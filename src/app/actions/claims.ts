"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { sendEmail, claimSubmissionEmail } from "@/lib/email";

export async function submitClaim(formData: FormData) {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    const type = formData.get("type") as string || "general";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string || "N/A";
    const policyNumber = formData.get("policyNumber") as string || "N/A";
    const details = formData.get("details") as string;

    if (!name || !email || !phone || !details) {
      return { success: false, error: "Please fill in all required fields." };
    }

    if (type === "refile-claim") {
      await prisma.rejectedClaim.create({
        data: {
          name,
          email,
          phone,
          policyNumber,
          reason: details,
          documents: [],
          userId,
        },
      });
    } else if (type === "policy-review") {
      await prisma.policyReview.create({
        data: {
          name,
          email,
          phone,
          notes: details,
          userId,
        },
      });
    } else {
      await prisma.claim.create({
        data: {
          name,
          email,
          phone,
          company,
          policyNumber,
          details,
          type,
          documents: [],
          userId,
        },
      });
    }

    // Send acknowledgment email to the user
    const userEmailContent = claimSubmissionEmail(name);
    await sendEmail({
      to: email,
      subject: userEmailContent.subject,
      html: userEmailContent.html,
    });

    // Send notification email to the Website Owner / Admin
    const adminEmailHtml = `
      <h2>New Service Query Submitted</h2>
      <p><strong>Service Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Policy Number:</strong> ${policyNumber}</p>
      <p><strong>Details:</strong><br/>${details.replace(/\n/g, '<br/>')}</p>
    `;
    await sendEmail({
      to: process.env.SMTP_USER || "admin@insurencesarthi.com", // Or a specific admin email
      subject: `New Claim/Query: ${type.toUpperCase()}`,
      html: adminEmailHtml,
    });

    return { success: true, message: "Your request has been submitted successfully!" };
  } catch (error: any) {
    console.error("Error submitting claim:", error);
    return { success: false, error: "An error occurred while submitting your request. Please try again." };
  }
}
