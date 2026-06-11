import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Folder, MessageCircle, Link2, Share2, User } from "lucide-react";
import "react-quill-new/dist/quill.snow.css";

import { prisma } from "@/lib/prisma";
import BlogSidebar from "@/components/public/BlogSidebar";
import { cache } from "react";

export const revalidate = 60;

const getBlog = cache(async (slug: string) => {
  return await prisma.blog.findUnique({
    where: { slug }
  });
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return { title: "Blog Not Found | InsurenceSarthi" };
  }

  return {
    title: blog.metaTitle || `${blog.title} | InsurenceSarthi Blog`,
    description: blog.metaDescription || `Read ${blog.title} on InsurenceSarthi`,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const blog = await getBlog(slug);

  if (!blog || !blog.published) {
    notFound();
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2">
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
              {blog.title}
            </h1>
            
            <div className="text-sm text-slate-500 mb-6 font-medium">
              Posted on {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} by InsurenceSarthi
            </div>

            {/* Spread the love social icons */}
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 block mb-3">Share this article</span>
              <div className="flex gap-3 flex-wrap">
                <button className="bg-[#1877F2] text-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                </button>
                <button className="bg-black text-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </button>
                <button className="bg-[#0A66C2] text-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </button>
                <button className="bg-green-500 text-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <MessageCircle size={18} fill="currentColor" />
                </button>
                <button className="bg-red-500 text-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className="w-full mb-10">
              <img 
                src={blog.featuredImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80"} 
                alt={blog.title}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>

            <div className="w-full mb-12">
              <div className="ql-snow">
                <div className="ql-editor" style={{ padding: 0 }} dangerouslySetInnerHTML={{ __html: blog.content ? blog.content.replace(/&nbsp;/g, ' ') : '' }} />
              </div>

              <div className="my-10 text-center">
                <p className="text-red-600 font-bold mb-4">Click here to register your complaint with InsurenceSarthi</p>
                <p className="text-sm">Visit our website: <Link href="/" className="text-red-600 hover:underline">insurencesarthi.com</Link></p>
                <p className="text-sm mt-1">Mail us at <a href="mailto:corporate@insurencesarthi.com" className="text-red-600 hover:underline">corporate@insurencesarthi.com</a></p>
              </div>
              
              <hr className="border-gray-200 mb-6" />

              <div className="flex items-center text-xs font-semibold text-slate-500 uppercase tracking-wide mb-10">
                <Folder className="w-4 h-4 mr-2 text-slate-400" />
                Insurance Guide, Claim Settlement
              </div>

              {/* Author Box */}
              <div className="bg-slate-50 border border-slate-200 p-6 flex gap-6 items-center mb-10">
                <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
                  <User className="text-slate-400 w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wider mb-2">InsurenceSarthi Expert</h4>
                  <Link href="/blog" className="text-xs text-red-600 uppercase tracking-widest hover:underline">More Posts</Link>
                </div>
              </div>

            </div>
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
