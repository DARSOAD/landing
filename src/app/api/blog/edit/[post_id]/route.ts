// src/app/api/blog/edit/[post_id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function PATCH(
  req: NextRequest,
  context: { params: { post_id: string } }
) {
  const post_id = context.params.post_id;

  if (!post_id) {
    return NextResponse.json({ error: "ID de post no proporcionado" }, { status: 400 });
  }
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const accessToken = token?.accessToken;
  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const change = await req.json();

  if (Object.keys(change).length === 0) {
    return NextResponse.json({ error: "No hay datos para actualizar" }, { status: 400 });
  }

  try {
    const body = {
      author_name: change.changedData.author_name,
      title: change.changedData.title,
      slug: change.changedData.slug,
      content: change.changedData.content,
      cover: change.changedData.cover_base64,
      thumbnail: change.changedData.thumbnail_base64,
    };
    const backendRes = await fetch(`${process.env.BACKEND_URL}/blog/edit/${post_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    const backendData = await backendRes.json();
    return NextResponse.json(backendData, { status: backendRes.status });
  } catch (error) {
    console.error("❌ Error al actualizar el post:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
