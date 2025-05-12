import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/blog/post/${id}`);

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: 'Error desde backend' }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ Error al hacer fetch al backend:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}