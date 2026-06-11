import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// Lazy initialize Supabase Client to prevent top-level crashes if env vars are missing
const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vdevakgnmvjvweradcjg.supabase.co";
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseKey) {
    throw new Error("Supabase Anon or Service Role key is missing in your .env file!");
  }
  
  return createClient(supabaseUrl, supabaseKey);
};

export const GET = auth(async (req: any) => {
  try {
    console.log("AUTH CHECK:", JSON.stringify(req.auth, null, 2));
    if (!req.auth || (req.auth.user as any).role !== "admin") {
      console.log("UNAUTHORIZED. req.auth:", !!req.auth, "role:", req.auth?.user?.role);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}) as any;

export const POST = auth(async (req: any) => {
  try {
    if (!req.auth || (req.auth.user as any).role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

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

    // Check if slug already exists
    const existingBlog = await prisma.blog.findUnique({ where: { slug } });
    if (existingBlog) {
      return NextResponse.json({ error: "Slug already exists. Please choose another." }, { status: 400 });
    }

    let featuredImage = null;

    // Handle image upload to Supabase if provided
    if (image && image.size > 0) {
      const supabase = getSupabase();
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `blogs/${Date.now()}-${image.name.replace(/\s+/g, "-")}`;
      
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from(process.env.S3_BUCKET_NAME || "insurencesarthi-uploads")
        .upload(fileName, buffer, {
          contentType: image.type,
          upsert: false
        });

      if (uploadError) {
        throw new Error("Failed to upload image to Supabase: " + uploadError.message);
      }
      
      const publicUrlPrefix = process.env.NEXT_PUBLIC_S3_PUBLIC_URL || "https://vdevakgnmvjvweradcjg.supabase.co/storage/v1/object/public/insurencesarthi-uploads";
      featuredImage = `${publicUrlPrefix.split('/insurencesarthi-uploads')[0]}/${process.env.S3_BUCKET_NAME || "insurencesarthi-uploads"}/${fileName}`;
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        featuredImage,
        published,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: error?.message || "Failed to create blog", stack: error?.stack }, { status: 500 });
  }
}) as any;
