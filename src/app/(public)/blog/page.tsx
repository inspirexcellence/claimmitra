import type { Metadata } from "next";
import Link from "next/link";
import { Folder, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import BlogSidebar from "@/components/public/BlogSidebar";

export const revalidate = 60; // Revalidate every 60 seconds to make the page load instantly

export const metadata: Metadata = {
  title: "Insurance Guides & Blog | InsuranceSarthi",
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
      metaDescription: true,
      content: true,
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <article key={blog.id} className="group flex flex-col bg-white rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden h-full">
                    
                    {/* Image Area */}
                    <Link href={`/blog/${blog.slug}`} className="w-full relative overflow-hidden aspect-[16/10] bg-slate-100">
                      <img 
                        src={blog.featuredImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60"} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </Link>
                    
                    {/* Content Area */}
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <div className="flex items-center justify-between gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4">
                        <span className="text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Insurance Guide</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                      
                      <Link href={`/blog/${blog.slug}`} className="block group-hover:text-emerald-600 transition-colors mb-3">
                        <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug line-clamp-2">
                          {blog.title}
                        </h2>
                      </Link>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                        {blog.metaDescription || blog.excerpt || (blog.content ? blog.content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim().substring(0, 150) + "..." : "Click to read the full article and learn more about this insurance topic...")}
                      </p>
                      
                      <div className="mt-auto pt-5 border-t border-slate-100">
                        <Link 
                          href={`/blog/${blog.slug}`} 
                          className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors group/btn text-sm uppercase tracking-wide"
                        >
                          Read Article 
                          <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
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
