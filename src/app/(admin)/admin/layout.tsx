"use client";

import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Toaster } from "@/components/ui/sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return (
      <>
        {children}
        <Toaster />
      </>
    );
  }

  return (
    <SessionProvider>
      <div className="flex min-h-screen bg-slate-50">
        <AdminSidebar />
        <main className="flex-1 md:ml-56 p-4 pt-20 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
      <Toaster />
    </SessionProvider>
  );
}
