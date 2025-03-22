//PAGINACION de formulario de registro de creacion de cuenta 

// app/register/page.tsx
import RegisterForm from '@/components/ui/auth/register-form';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F111A] p-4">
      <RegisterForm />
    </main>
  );
}
