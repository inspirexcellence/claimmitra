import { prisma } from "@/lib/prisma";
import BlogsAdminClient from "./client-page";

export const dynamic = "force-dynamic";

export default async function BlogsAdmin() {

  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      content: true,
      published: true,
      createdAt: true,
    }
  });

  // Convert Date objects to strings for the client component
  const serializedBlogs = blogs.map(blog => ({
    ...blog,
    createdAt: blog.createdAt.toISOString()
  }));

  return <BlogsAdminClient initialBlogs={serializedBlogs} />;
}
