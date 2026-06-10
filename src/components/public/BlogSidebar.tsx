import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function BlogSidebar() {
  const recentPosts = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      title: true,
      slug: true,
    }
  });

  return (
    <div className="w-full">
      {/* Search Box */}
      <div className="mb-10">
        <form className="flex w-full shadow-sm">
          <input 
            type="text" 
            placeholder="Search ..." 
            className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-l-md"
          />
          <button 
            type="submit" 
            className="bg-red-600 text-white px-6 py-2.5 text-sm font-bold hover:bg-red-700 transition-colors rounded-r-md flex-shrink-0"
          >
            SEARCH
          </button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="mb-10">
        <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b-2 border-red-500 pb-2 inline-block">
          Recent Posts
        </h3>
        <ul className="flex flex-col gap-0 border-t border-gray-200 mt-2">
          {recentPosts.map((post) => (
            <li key={post.id} className="py-3 border-b border-gray-200">
              <Link href={`/blog/${post.slug}`} className="text-slate-700 hover:text-red-600 transition-colors text-sm leading-snug">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
