import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: Request) {
  const userData = await req.json();

  // Simulación de llamada a FastAPI o similar
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockedToken123456';

  const user = {
    email: userData.email,
    name: userData.name,
    role: userData.role || 'user',
    created_at: new Date().toISOString(),
  };

  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 días
    path: '/',
  });

  const response = NextResponse.json({ user });
  response.headers.set('Set-Cookie', cookie);
  return response;
}
