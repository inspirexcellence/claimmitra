import BlogSidebar from "@/components/public/BlogSidebar";

export default function BlogListingLoading() {
  // Array to map 3 dummy skeleton articles
  const dummyArray = [1, 2, 3];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left Column) Skeletons */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-12">
              {dummyArray.map((index) => (
                <article key={index} className="flex flex-col border-b border-gray-200 pb-10">
                  
                  {/* Title Skeleton */}
                  <div className="h-10 bg-slate-200 rounded-md w-3/4 mb-3 animate-pulse"></div>
                  
                  {/* Meta Row Skeleton */}
                  <div className="h-4 bg-slate-200 rounded-md w-1/3 mb-6 animate-pulse"></div>

                  {/* Content Row: Image + Excerpt */}
                  <div className="flex flex-col md:flex-row gap-8 mb-6">
                    {/* Image Skeleton */}
                    <div className="w-full md:w-2/5 shrink-0 rounded-xl overflow-hidden shadow-md bg-slate-200 aspect-[4/3] animate-pulse"></div>
                    
                    {/* Text Content Skeleton */}
                    <div className="flex flex-col flex-1 py-1 gap-3">
                      <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-4/5 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-2/3 animate-pulse"></div>
                      
                      {/* Continue Reading Button Skeleton */}
                      <div className="h-5 bg-slate-200 rounded-md w-1/3 mt-auto self-start animate-pulse"></div>
                    </div>
                  </div>

                  {/* Categories Footer Skeleton */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 bg-slate-200 rounded-full animate-pulse"></div>
                    <div className="h-3 bg-slate-200 rounded-md w-1/4 animate-pulse"></div>
                  </div>
                  
                </article>
              ))}
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
