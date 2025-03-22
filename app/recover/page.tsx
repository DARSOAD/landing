import RecoverForm from '@/components/ui/auth/recover-form';

export default function RecoverPage() {
  return (
    <main className="min-h-screen flex bg-[#0F111A]">
      {/* Sección izquierda: formulario */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-10">
        <RecoverForm />
      </div>

      {/* Sección derecha: visual opcional */}
      <div className="hidden lg:flex w-2/5 bg-[#1A1C2D] items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center px-6">
          Forgot your password? 🔐
        </h1>
      </div>
    </main>
  );
}
