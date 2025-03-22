import LoginForm from '../../components/ui/auth/login-form';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex bg-[#0F111A]">
      {/* Sección izquierda: formulario */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-10">
        <LoginForm />
      </div>

      {/* Sección derecha: mensaje o imagen */}
      <div className="hidden lg:flex w-2/5 bg-[#1A1C2D] items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center px-6">
          Welcome back 👋
        </h1>
      </div>
    </main>
  );
}
