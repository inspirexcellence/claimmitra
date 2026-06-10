import { NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";
import { prisma } from "@/lib/prisma";
import { uploadToStorage, generateStorageKey } from "@/lib/storage";
import { sendEmail, policyReviewEmail } from "@/lib/email";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const userId = (session?.user as any)?.role === "user" ? session?.user?.id : undefined;

    const formData = await req.formData();

    const razorpayOrderId = formData.get("razorpay_order_id") as string;
    const razorpayPaymentId = formData.get("razorpay_payment_id") as string;
    const razorpaySignature = formData.get("razorpay_signature") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return NextResponse.json(
        { error: "Payment verification data missing" },
        { status: 400 }
      );
    }

    // Verify signature
    const isValid = verifyRazorpaySignature(
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    );

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Update payment record
    const payment = await prisma.payment.update({
      where: { orderId: razorpayOrderId },
      data: {
        razorpayId: razorpayPaymentId,
        status: "paid",
      },
    });

    // Upload policy PDF
    let policyPdfUrl = "";
    const policyFile = formData.get("policyPdf") as File;
    if (policyFile && policyFile.size > 0) {
      const buffer = Buffer.from(await policyFile.arrayBuffer());
      const key = generateStorageKey("policies", policyFile.name);
      policyPdfUrl = await uploadToStorage(buffer, key, policyFile.type);
    }

    // Create policy review record
    const review = await prisma.policyReview.create({
      data: {
        name,
        phone,
        email,
        policyPdf: policyPdfUrl,
        paymentStatus: "paid",
        paymentId: payment.id,
        userId,
      },
    });

    // Send confirmation email
    const emailTemplate = policyReviewEmail(name);
    sendEmail({
      to: email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    }).catch(console.error);

    return NextResponse.json({ success: true, id: review.id });
  } catch (error) {
    console.error("Razorpay verify error:", error);
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
