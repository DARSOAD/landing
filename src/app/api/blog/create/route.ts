// src/app/api/blog/create/route.ts

import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const token = session?.user?.accessToken

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { title, content, slug, cover, thumbnail, author_name } = body

    // Validación simple
    if (!title || !content || !slug || !cover || !thumbnail || !author_name) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Llama a tu backend real (FastAPI)
    const backendRes = await fetch(`${process.env.BACKEND_URL}/blog/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // <-- Token JWT aquí
      },
      body: JSON.stringify({
        title,
        content,
        slug,
        cover,
        thumbnail,
        author_name,
      }),
    })

    const backendData = await backendRes.json()

    return NextResponse.json(backendData, {
      status: backendRes.status,
    })

  } catch (error) {
    console.error('❌ Error en /api/blog/create:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
