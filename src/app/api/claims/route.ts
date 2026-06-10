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
    const company = formData.get("company") as string;
    const policyNumber = formData.get("policyNumber") as string;
    const details = formData.get("details") as string;

    if (!name || !phone || !email || !company || !policyNumber || !details) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Handle file uploads
    const documentUrls: string[] = [];
    const files = formData.getAll("documents") as File[];

    for (const file of files) {
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const key = generateStorageKey("claims", file.name);
        const url = await uploadToStorage(buffer, key, file.type);
        documentUrls.push(url);
      }
    }

    const claim = await prisma.claim.create({
      data: {
        name,
        phone,
        email,
        company,
        policyNumber,
        details,
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

    return NextResponse.json({ success: true, id: claim.id });
  } catch (error) {
    console.error("Claims API error:", error);
    return NextResponse.json(
      { error: "Failed to submit claim" },
      { status: 500 }
    );
  }
}
