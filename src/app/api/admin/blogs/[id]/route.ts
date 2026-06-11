import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";

// Lazy initialize Supabase Client to prevent top-level crashes if env vars are missing
const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vdevakgnmvjvweradcjg.supabase.co";
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseKey) {
    throw new Error("Supabase Anon or Service Role key is missing in your .env file!");
  }
  
  return createClient(supabaseUrl, supabaseKey);
};

export const GET = auth(async (req: any, { params }: { params: Promise<{ id: string }> }) => {
  try {
    if (!req.auth || (req.auth.user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const blog = await prisma.blog.findUnique({ where: { id } });

    if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}) as any;

export const PUT = auth(async (req: any, { params }: { params: Promise<{ id: string }> }) => {
  try {
    if (!req.auth || (req.auth.user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const formData = await req.formData();
    
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const metaTitle = formData.get("metaTitle") as string;
    const metaDescription = formData.get("metaDescription") as string;
    const published = formData.get("published") === "true";
    const image = formData.get("image") as File | null;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check slug uniqueness excluding this blog
    const existingBlog = await prisma.blog.findFirst({
      where: { slug, NOT: { id } },
    });
    if (existingBlog) {
      return NextResponse.json({ error: "Slug already exists. Please choose another." }, { status: 400 });
    }

    const updateData: any = {
      title,
      slug,
      content,
      excerpt: excerpt || null,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      published,
    };

    if (image && image.size > 0) {
      const supabase = getSupabase();
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `blogs/${Date.now()}-${image.name.replace(/\s+/g, "-")}`;
      
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from(process.env.S3_BUCKET_NAME || "claimmitra-uploads")
        .upload(fileName, buffer, {
          contentType: image.type,
          upsert: false
        });

      if (uploadError) {
        throw new Error("Failed to upload image to Supabase: " + uploadError.message);
      }
      
      const publicUrlPrefix = process.env.NEXT_PUBLIC_S3_PUBLIC_URL || "https://vdevakgnmvjvweradcjg.supabase.co/storage/v1/object/public/claimmitra-uploads";
      updateData.featuredImage = `${publicUrlPrefix}/${fileName}`;
    }

    const blog = await prisma.blog.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(blog);
  } catch (error: any) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: error?.message || "Failed to update blog", stack: error?.stack }, { status: 500 });
  }
}) as any;

export const DELETE = auth(async (req: any, { params }: { params: Promise<{ id: string }> }) => {
  try {
    if (!req.auth || (req.auth.user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    await prisma.blog.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}) as any;
