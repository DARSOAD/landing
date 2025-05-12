import { NextRequest, NextResponse } from 'next/server'
import { fetchWithAuth } from '@/lib/fetchWithAuth'

interface Params {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest, { params }: Params) {
  const { slug } = params

  try {
    const res = await fetchWithAuth(`${process.env.BACKEND_URL}/blog/post/${slug}`)

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ error: 'Error desde backend' }, { status: res.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('❌ Error al hacer fetch al backend:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
