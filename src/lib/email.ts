import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@insurancesahyog.com",
      to,
      subject,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
}

export function claimSubmissionEmail(name: string) {
  return {
    subject: "INSURANCE SAHYOG — Your Claim Has Been Received",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e3a5f; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0;">INSURANCE SAHYOG</h1>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <h2 style="color: #1e3a5f;">Hello ${name},</h2>
          <p>Thank you for submitting your claim with INSURANCE SAHYOG. Our team of experts will review your documents and get back to you within 24-48 hours.</p>
          <p>If you have any questions, reply to this email or call us at <strong>+91 99850 60600</strong>.</p>
          <hr style="border: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #888; font-size: 12px;">This is an automated email from INSURANCE SAHYOG. Please do not reply directly.</p>
        </div>
      </div>
    `,
  };
}

export function policyReviewEmail(name: string) {
  return {
    subject: "INSURANCE SAHYOG — Policy Review Payment Received",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e3a5f; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0;">INSURANCE SAHYOG</h1>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <h2 style="color: #1e3a5f;">Hello ${name},</h2>
          <p>Your payment of ₹99 for the Policy Review service has been received. Our experts will analyze your policy document and provide a detailed review within 48-72 hours.</p>
          <p>If you have any questions, reply to this email or call us at <strong>+91 99850 60600</strong>.</p>
          <hr style="border: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #888; font-size: 12px;">This is an automated email from INSURANCE SAHYOG. Please do not reply directly.</p>
        </div>
      </div>
    `,
  };
}
