'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card' // Ajusta la ruta si es diferente
import { Button } from '@/src/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/src/types'
import Link from 'next/link'

export default function PostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [page, setPage] = useState(1)
  const [limit] = useState(9)
  const [totalPosts, setTotalPosts] = useState(0)
  const [pageTokens, setPageTokens] = useState<{ [page: number]: string | null }>({
    1: null, // Página 1 no tiene token porque es el principio
  });


  const totalPages = Math.ceil(totalPosts / limit)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`/api/blog/posts?page=${page}&limit=${limit}&lastPostId=${pageTokens[page]}`)
      const data = await res.json()
      setPosts(data.items)
      setTotalPosts(data.total)
      if (!Object.values(pageTokens).includes(data.next_token)) {
        setPageTokens(prev => ({
          ...prev,
          [page + 1]: data.next_token
        }));
      }

    }

    fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit])

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Entradas del blog</h1>
        <Button>Añadir nueva entrada</Button>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <Link href={`/dashboard/edit-post/${post.post_id}`} key={post.post_id}>
            <Card className="bg-white hover:shadow-md transition">
              <CardHeader className="p-0">
                <Image
                  src={post.thumbnail_url}
                  alt={post.title}
                  width={400}
                  height={160}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>Por {post.author_name}</CardDescription>
                <p className="text-xs text-gray-400">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-end gap-2 items-center">
        <Button
          variant="outline"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Anterior
        </Button>
        <span className="text-sm text-gray-700">
          Página {page} de {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}
