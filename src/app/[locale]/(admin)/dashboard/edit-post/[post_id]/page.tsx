'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import FormBlog from '@/src/components/FormBlog'
import { BlogPost, BlogPostFormData } from '@/src/types'
import { fetchWithAuth } from '@/lib/fetchWithAuth'
import { useRouter } from 'next/navigation'
import { Button } from "@/src/components/ui/button";

export default function EditPostPage() {
  const { post_id } = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/post/by-id/${post_id}`)
        const data = await res.json()
        setPost(data)
      } catch (err) {
        console.error('🛑 Error al cargar post:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [post_id])



  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que deseas eliminar este post?")) return;

    try {
      const res = await fetchWithAuth(`/api/blog/delete/${post_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        alert('✅ Post eliminado con éxito');
        router.push('/dashboard/blog');
      } else {
        const error = await res.json();
        console.error('❌ Error al eliminar:', error);
        alert('Error al eliminar el post');
      }
    } catch (error) {
      console.error('🚨 Error en handleDelete:', error);
      alert('Error interno al eliminar el post');
    }
  };

  // Actualizar post
  const handleUpdate = async (data: BlogPostFormData) => {
    if (!post) {
      alert("❌ No se pudo cargar la información original del post.");
      return;
    }

    const changedData = getUpdatedFields(post, data);

    if (Object.keys(changedData).length === 0) {
      alert("⚠️ No se detectaron cambios. No hay nada que actualizar.");
      return;
    }
    console.log("🔄 Datos a actualizar: Estoy en page", changedData);
    try {
      const res = await fetchWithAuth(`/api/blog/edit/${post_id}`, {
        method: 'PATCH',
        body: JSON.stringify({ changedData }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        alert('✅ Post actualizado con éxito')
        router.push('/dashboard/blog')
      } else {
        const error = await res.json()
        console.error('❌ Error al actualizar:', error)
        alert('Error al actualizar el post')
      }
    } catch (error) {
      console.error('🚨 Error en handleUpdate:', error)
      alert('Error interno al actualizar el post')
    }
  }

  if (loading) return <p className="p-8">Cargando...</p>

  return (
    <div className="p-8">
      <FormBlog
        blogPost={post}
        onSubmit={handleUpdate}

      />
      {/* Delete Button */}
      <Button type="button" className="w-full" onClick={handleDelete}>
        Borrar post
      </Button>
    </div >
  )
}

function getUpdatedFields<T extends object>(
  original: Partial<T>,
  updated: T
): Partial<T> {
  const changedFields: Partial<T> = {};

  for (const key in updated) {
    const updatedValue = updated[key as keyof T];
    const originalValue = original[key as keyof T];

    // 🔄 Comparación especial para las imágenes
    if (
      (key === "cover_base64" && "cover_url" in original) ||
      (key === "thumbnail_base64" && "thumbnail_url" in original)
    ) {
      if (typeof updatedValue === "string" && updatedValue.startsWith("http")) {
        continue; // Si el nuevo valor es una URL, no lo consideramos un cambio
      }
    }

    // ⚖️ Comparación normal
    if (updatedValue !== originalValue) {
      changedFields[key as keyof T] = updatedValue;
    }
  }

  return changedFields;
}




