import type { Metadata } from "next";
import Link from "next/link";
import { Folder, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import BlogSidebar from "@/components/public/BlogSidebar";

export const revalidate = 60; // Revalidate every 60 seconds to make the page load instantly

export const metadata: Metadata = {
  title: "Insurance Guides & Blog | InsurenceSarthi",
  description: "Read the latest tips, guides, and news about health and life insurance claims in India.",
};

export default async function BlogListingPage() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      createdAt: true,
    }
  });

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2">
            {blogs.length === 0 ? (
              <div className="text-center text-slate-500 py-12">
                No published blogs found. Please check back later!
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                {blogs.map((blog) => (
                  <article key={blog.id} className="flex flex-col border-b border-gray-200 pb-10">
                    
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-tight hover:text-red-600 transition-colors tracking-tight">
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>
                    
                    {/* Meta Row */}
                    <div className="text-sm text-slate-500 mb-6 font-medium">
                      Posted on {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} by InsurenceSarthi
                    </div>

                    {/* Content Row: Image + Excerpt */}
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="w-full md:w-1/3 shrink-0">
                        <Link href={`/blog/${blog.slug}`} className="block h-48 md:h-56 bg-slate-200 overflow-hidden relative group">
                          <img 
                            src={blog.featuredImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60"} 
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <p className="text-slate-700 leading-relaxed mb-4">
                          {blog.excerpt || "Click to read the full article and learn more about this insurance topic..."}
                        </p>
                        <Link href={`/blog/${blog.slug}`} className="text-red-600 font-medium hover:underline mt-auto self-end md:self-start">
                          Continue Reading &rarr;
                        </Link>
                      </div>
                    </div>

                    {/* Categories Footer */}
                    <div className="flex items-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      <Folder className="w-4 h-4 mr-2 text-slate-400" />
                      Insurance Guide, Claim Settlement
                    </div>
                    
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
