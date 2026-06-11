"use client";

import { useState } from "react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  published: boolean;
  createdAt: string;
};

export default function BlogsAdminClient({ initialBlogs }: { initialBlogs: Blog[] }) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      toast.success("Blog deleted successfully");
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (err) {
      toast.error("Failed to delete blog");
    }
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Blog Management</h1>
          <p className="text-slate-500 mt-1">Create and manage your articles.</p>
        </div>
        <Link href="/admin/blogs/new">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="w-4 h-4 mr-2" />
            Create New Blog
          </Button>
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[250px] lg:w-[300px]">Title</TableHead>
              <TableHead className="w-[300px] lg:w-[400px]">Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                  Loading blogs...
                </TableCell>
              </TableRow>
            ) : blogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                  No blogs created yet.
                </TableCell>
              </TableRow>
            ) : (
              blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium truncate max-w-[100px] md:w-[250px] lg:max-w-[300px]" title={blog.title}>
                    {blog.title}
                  </TableCell>
                  <TableCell className="text-slate-500 max-w-[100px] md:w-[250px] lg:max-w-[300px]">
                    <p className="line-clamp-2 text-sm" title={blog.excerpt || "Description"}>
                      {blog.excerpt || (blog.content ? blog.content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').substring(0, 120) + '...' : "No description available.")}
                    </p>
                  </TableCell>
                  <TableCell>
                    {blog.published ? (
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Published</Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600">Draft</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-slate-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/blogs/${blog.id}/edit`}>
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4 text-orange-500" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
