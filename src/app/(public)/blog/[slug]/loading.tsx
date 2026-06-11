import BlogSidebar from "@/components/public/BlogSidebar";

export default function BlogDetailLoading() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left Column) Skeletons */}
          <div className="lg:col-span-2">
            
            {/* Title Skeleton */}
            <div className="h-12 md:h-14 bg-slate-200 rounded-md w-full mb-4 animate-pulse"></div>
            <div className="h-12 md:h-14 bg-slate-200 rounded-md w-3/4 mb-4 animate-pulse"></div>
            
            {/* Meta Row Skeleton */}
            <div className="h-4 bg-slate-200 rounded-md w-1/3 mb-6 animate-pulse"></div>

            {/* Social Icons Skeleton */}
            <div className="mb-8">
              <div className="h-4 bg-slate-200 rounded-md w-32 mb-3 animate-pulse"></div>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-10 h-10 bg-slate-200 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Featured Image Skeleton */}
            <div className="w-full mb-10 h-[300px] md:h-[450px] bg-slate-200 rounded-xl animate-pulse"></div>

            {/* Body Content Skeletons */}
            <div className="w-full mb-12 flex flex-col gap-4">
              <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded-md w-11/12 animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse mt-4"></div>
              <div className="h-4 bg-slate-200 rounded-md w-10/12 animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded-md w-3/4 animate-pulse mt-4"></div>
              <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
            </div>

            {/* Author Box Skeleton */}
            <div className="bg-slate-50 border border-slate-200 p-6 flex gap-6 items-center mb-10 rounded-xl">
              <div className="w-20 h-20 bg-slate-200 rounded-full shrink-0 animate-pulse"></div>
              <div className="flex flex-col gap-2 w-full">
                <div className="h-5 bg-slate-200 rounded-md w-1/3 animate-pulse"></div>
                <div className="h-3 bg-slate-200 rounded-md w-1/4 animate-pulse"></div>
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
