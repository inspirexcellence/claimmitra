"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    if (!name || !email) {
      return { success: false, error: "Name and Email are required" };
    }

    // Check if email is already taken by someone else
    if (email !== session.user.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser && existingUser.id !== session.user.id) {
        return { success: false, error: "Email is already in use by another account" };
      }
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        email,
        phone: phone || null,
      },
    });

    revalidatePath("/profile");
    revalidatePath("/dashboard");
    return { success: true, message: "Profile updated successfully" };
  } catch (error: any) {
    console.error("Profile update error:", error);
    return { success: false, error: "Failed to update profile. Please try again." };
  }
}
