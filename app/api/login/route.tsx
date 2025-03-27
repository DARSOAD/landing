// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: Request) {
  const { email, password } = await req.json();


  console.log('llegue aqui')
  // Mock user (puedes moverlo a un archivo aparte si deseas)
  const mockUser = {
    email: 'alexajenny@gmail.com',
    name: 'Jenny',
    password: 'supersecure123', // En producción esto sería un hash
    role: 'user',
  };

  // Validar existencia de usuario
  if (email !== mockUser.email) {
    return NextResponse.json(
      { error: 'Usuario no encontrado' },
      { status: 404 }
    );
  }
console.log(password);
console.log(mockUser);

  // Validar contraseña
  if (password !== mockUser.password) {
    return NextResponse.json(
      { error: 'Contraseña incorrecta' },
      { status: 401 }
    );
  }

  // Simular token JWT
  const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mocked-login-token';

  // Crear cookie HttpOnly
  const cookie = serialize('token', mockToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 7 días
    path: '/',
  });

  const user = {
    email: mockUser.email,
    name: mockUser.name,
    role: mockUser.role,
  };

  const response = NextResponse.json({ user });
  response.headers.set('Set-Cookie', cookie);
  return response;
}
