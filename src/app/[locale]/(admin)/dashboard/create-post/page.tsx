'use client'

import FormBlog from '@/src/components/FormBlog'
import { BlogPostFormData } from '@/src/types'
import { fetchWithAuth } from '@/lib/fetchWithAuth'

export default function CreatePostPage() {
  const handleCreate = async (dataFetch: BlogPostFormData) => {
    console.log('📝 Creando post:', dataFetch)

    try {
      const response = await fetchWithAuth('/api/blog/create', {
        method: 'POST',
        body: JSON.stringify({
          author_name: dataFetch.author_name,
          title: dataFetch.title,
          slug: dataFetch.slug,
          content: dataFetch.content,
          cover: dataFetch.cover_base64,
          thumbnail: dataFetch.thumbnail_base64,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('✅ Post creado exitosamente')
        console.log('✔️ Resultado:', result)
      } else {
        alert('❌ Error al crear el post')
        console.error('🛑 Error:', result)
      }
    } catch (error) {
      alert('⚠️ Error al enviar la solicitud')
      console.error('🚨 Error en handleCreate:', error)
    }
  }

  return (
    <div className="p-8">
      <FormBlog blogPost={null} onSubmit={handleCreate} />
    </div>
  )
}
