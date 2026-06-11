"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { slugify } from "@/lib/utils";
import RichTextEditor from "@/components/admin/RichTextEditor";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(5, "Title is too short"),
  slug: z.string().min(5, "Slug is too short"),
  excerpt: z.string().optional(),
  content: z.string().min(20, "Content must be at least 20 characters"),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  published: z.boolean(),
  image: z.any().optional(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

export default function CreateBlogPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      published: false,
      content: "",
    }
  });

  const titleValue = watch("title");

  const handleGenerateSlug = () => {
    if (titleValue) {
      setValue("slug", slugify(titleValue));
    }
  };

  const onSubmit = async (data: BlogFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append("content", data.content);
      formData.append("published", data.published.toString());
      if (data.excerpt) formData.append("excerpt", data.excerpt);
      if (data.metaTitle) formData.append("metaTitle", data.metaTitle);
      if (data.metaDescription) formData.append("metaDescription", data.metaDescription);
      
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const response = await fetch("/api/admin/blogs", { 
        method: "POST", 
        body: formData 
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to create blog post");
      }

      toast.success(data.published ? "Blog post published successfully!" : "Draft saved successfully!");
      router.push("/admin/blogs");
    } catch (error: any) {
      toast.error(error.message || "Failed to create blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col space-y-4">
        <Link href="/admin/blogs" className="text-sm text-slate-500 hover:text-orange-500 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blogs
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Create New Blog</h1>
          <p className="text-slate-500 mt-1">Write a new article for your users using the rich text editor.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Post Title *</Label>
                  <Input id="title" placeholder="How to win a health insurance claim" {...register("title")} className={errors.title ? "border-red-500" : ""} />
                  {errors.title && <p className="text-sm text-red-500">{errors.title.message as string}</p>}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="slug">URL Slug *</Label>
                    <button type="button" onClick={handleGenerateSlug} className="text-xs text-orange-500 hover:underline">Generate from title</button>
                  </div>
                  <Input id="slug" placeholder="how-to-win-health-insurance-claim" {...register("slug")} className={errors.slug ? "border-red-500" : ""} />
                  {errors.slug && <p className="text-sm text-red-500">{errors.slug.message as string}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content *</Label>
                  <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                      <RichTextEditor 
                        value={field.value} 
                        onChange={field.onChange} 
                        className={errors.content ? "border border-red-500 rounded-md" : ""}
                      />
                    )}
                  />
                  {errors.content && <p className="text-sm text-red-500">{errors.content.message as string}</p>}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt (Short Summary)</Label>
                  <Textarea id="excerpt" placeholder="Brief summary for blog cards..." className="min-h-[100px]" {...register("excerpt")} />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Featured Image</Label>
                  <Input id="image" type="file" accept="image/*" {...register("image")} className="cursor-pointer" />
                </div>

                <div className="flex items-center space-x-2 pt-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <input type="checkbox" id="published" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 w-5 h-5 cursor-pointer" {...register("published")} />
                  <Label htmlFor="published" className="font-semibold cursor-pointer text-slate-700">Publish immediately</Label>
                </div>
                <p className="text-xs text-slate-500 mt-1">If unchecked, this post will be saved as a Draft.</p>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 mt-4 h-12 text-md">
                  {isSubmitting ? "Saving..." : "Save Blog Post"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="font-bold text-slate-900">SEO Settings</h3>
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input id="metaTitle" placeholder="SEO Title" {...register("metaTitle")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea id="metaDescription" placeholder="SEO Description" className="min-h-[100px]" {...register("metaDescription")} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
