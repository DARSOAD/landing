'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import { useEffect, useState } from "react";
import { BlogPost } from "@/src/types";
import { blogSchemas } from "@/src/utils/validations";
import Image from "next/image";
import { useSession } from "next-auth/react";


type BlogPostFormSchema = z.infer<typeof blogSchemas>;

interface BlogFormProps {
  blogPost: BlogPost | null;
  onSubmit: (data: BlogPostFormSchema) => void;
}

export default function FormBlog({ blogPost, onSubmit }: BlogFormProps) {
  const { data: session } = useSession();
  const form = useForm<BlogPostFormSchema>({
    resolver: zodResolver(blogSchemas),
    defaultValues: {
      author_name: "admin",
      title: blogPost?.title || "",
      slug: blogPost?.slug || "",
      content: blogPost?.content || "",
      cover_base64: blogPost?.cover_url ||"",
      thumbnail_base64: blogPost?.cover_url || "",
    }, 
  });

  // Actualizar el campo solo cuando tengas el nombre
useEffect(() => {
  if (session?.user?.name) {
    form.setValue("author_name", session.user.name);
  }
}, [session?.user?.name, form]);

  const [coverPreview, setCoverPreview] = useState<string | null>(blogPost?.cover_url || null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(blogPost?.thumbnail_url || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: "cover_base64" | "thumbnail_base64") => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      form.setValue(fieldName, base64String); // <-- Aquí hacemos la conversión a base64 y lo guardamos en react-hook-form
      if (fieldName === "cover_base64") {
        setCoverPreview(base64String);
      } else {
        setThumbnailPreview(base64String);
      }
    };
    reader.readAsDataURL(file); // <-- Esta función convierte el archivo a base64
  };

  const submitHandler = (data: BlogPostFormSchema) => {
    console.log("🚀 Datos de sesion", session);
    console.log("📝 Enviando datos:", data);
    onSubmit(data); // El data ya contiene title, slug, content, cover_base64 y thumbnail_base64
  };

  return (
    <div className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
          {/* Title y Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <input {...field} className="input w-full border rounded p-2" placeholder="Title of the post" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <input {...field} className="input w-full border rounded p-2" placeholder="slug-of-the-post" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <textarea {...field} className="textarea w-full border rounded p-2 h-40 resize-none" placeholder="Write the content here..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cover and Thumbnail Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cover */}
            <FormField
              control={form.control}
              name="cover_base64"
              render={() => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "cover_base64")}
                        className="w-full border rounded p-2"
                      />
                      {coverPreview && (
                        <div className="relative mt-2 w-full h-40">
                          <Image
                            src={coverPreview}
                            alt="Cover Preview"
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Thumbnail */}
            <FormField
              control={form.control}
              name="thumbnail_base64"
              render={() => (
                <FormItem>
                  <FormLabel>Thumbnail Image</FormLabel>
                  <FormControl>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "thumbnail_base64")}
                        className="w-full border rounded p-2"
                      />
                      {thumbnailPreview && (
                        <div className="relative mt-2 w-full h-40">
                          <Image
                            src={thumbnailPreview}
                            alt="Thumbnail Preview"
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            {blogPost ? "Actualizar Entrada" : "Crear Entrada"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
