export interface ClaimFormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  policyNumber: string;
  details: string;
}

export interface RejectedClaimFormData {
  name: string;
  phone: string;
  email: string;
  policyNumber?: string;
  reason: string;
}

export interface PolicyReviewFormData {
  name: string;
  phone: string;
  email: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  published: boolean;
}

export type ClaimStatus = "pending" | "in_review" | "resolved" | "rejected";
export type PaymentStatus = "created" | "paid" | "failed";
export type ReviewStatus = "pending" | "in_review" | "completed";
