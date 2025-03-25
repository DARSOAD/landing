import RecoverForm from '@/components/ui/auth/recover-form';

export default function RecoverPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0F111A] text-white">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between py-12 px-6">
        {/* Sección izquierda */}
        <div className="w-full lg:w-1/2 space-y-6 max-w-md">
          <div className="space-y-2">
            <div className="relative flex space-x-3 items-center text-2xl">
              <span className="inline-block w-[25px] bg-blue-500 h-[1px]"></span>
              <span className="text-white">Password recovery</span>
            </div>
            <h2 className="text-4xl font-bold">Forgot your password?</h2>
            <p className="text-gray-400">
              No worries, we’ll help you recover it. Enter your email below and we’ll send you a recovery link.
            </p>
          </div>
          <RecoverForm />
        </div>

        {/* Sección derecha con ilustración */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
          <img
            src="/images/svg/img-1.svg"
            alt="Recover illustration"
            className="w-[300px] h-auto"
          />
        </div>
      </div>
    </main>
  );
}