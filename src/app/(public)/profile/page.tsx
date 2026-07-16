import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import ProfileForm from "./ProfileForm";
import { UserCircle } from "lucide-react";

export const metadata = {
  title: "My Profile | INSURANCE SAHYOG",
  description: "Manage your INSURANCE SAHYOG profile settings.",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  // Fetch fresh user data from database
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      name: true,
      email: true,
      phone: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        
        <div className="mb-8 flex items-center gap-4">
          <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center font-bold text-3xl uppercase shadow-inner">
            {user.name[0] || "U"}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              My Profile
            </h1>
            <p className="text-slate-500 mt-1">
              Update your personal details and contact information.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <UserCircle className="w-6 h-6 text-orange-500" />
              Personal Information
            </h2>
            
            <ProfileForm user={user} />
          </div>
        </div>
        
      </div>
    </div>
  );
}
