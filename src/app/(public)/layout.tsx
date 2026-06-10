import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  // Clone the session to inject fresh DB data
  let currentSession = session ? { ...session, user: { ...session.user } } : null;

  if (currentSession?.user?.id) {
    const dbUser = await prisma.user.findUnique({
      where: { id: currentSession.user.id },
      select: { name: true, email: true }
    });
    
    if (dbUser) {
      currentSession.user.name = dbUser.name;
      currentSession.user.email = dbUser.email;
    }
  }

  return (
    <>
      <Navbar session={currentSession} />
      {children}
      <Footer />
    </>
  );
}
