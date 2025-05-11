import { z } from "zod";

export const blogSchemas = z.object({
  author_name: z
    .string(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters"),

  slug: z
    .string()
    .min(2, "Slug name must be at least 2 characters")
    .max(100, "Slug name must be at most 100 characters"),

  content: z
    .string()
    .min(10, "Content must be at least 10 characters")
    .max(100, "Content must be at most 100 characters"),

  cover_base64: z
    .string()
    .min(10, "Cover image is required"),
    
  thumbnail_base64: z
    .string()
    .min(10, "Thumbnail image is required"),
});
