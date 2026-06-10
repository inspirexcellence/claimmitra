import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { uploadToStorage, generateStorageKey } from "@/lib/storage";
import { sendEmail, claimSubmissionEmail } from "@/lib/email";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = (session?.user as any)?.role === "user" ? session?.user?.id : undefined;

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const policyNumber = formData.get("policyNumber") as string;
    const reason = formData.get("reason") as string;

    if (!name || !phone || !email || !reason) {
      return NextResponse.json(
        { error: "Name, phone, email, and reason are required" },
        { status: 400 }
      );
    }

    // Handle file uploads
    const documentUrls: string[] = [];
    const files = formData.getAll("documents") as File[];

    for (const file of files) {
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const key = generateStorageKey("claims/rejected", file.name);
        const url = await uploadToStorage(buffer, key, file.type);
        documentUrls.push(url);
      }
    }

    const rejectedClaim = await prisma.rejectedClaim.create({
      data: {
        name,
        phone,
        email,
        policyNumber,
        reason,
        documents: documentUrls,
        userId,
      },
    });

    // Send confirmation email
    const emailTemplate = claimSubmissionEmail(name);
    sendEmail({
      to: email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    }).catch(console.error);

    return NextResponse.json({ success: true, id: rejectedClaim.id });
  } catch (error) {
    console.error("Rejected Claims API error:", error);
    return NextResponse.json(
      { error: "Failed to submit rejected claim" },
      { status: 500 }
    );
  }
}
