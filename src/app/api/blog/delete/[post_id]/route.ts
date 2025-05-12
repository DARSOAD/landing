import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Record<string, string> } // <- cambio clave aquí
) {
  const post_id = params.post_id;

  if (!post_id) {
    return NextResponse.json({ error: "ID de post no proporcionado" }, { status: 400 });
  }

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const accessToken = token?.accessToken;

  if (!accessToken) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const backendRes = await fetch(`${process.env.BACKEND_URL}/blog/delete/${post_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const backendData = await backendRes.json();

    return NextResponse.json(backendData, {
      status: backendRes.status,
    });
  } catch (error) {
    console.error("❌ Error al eliminar el post:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
