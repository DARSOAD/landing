import LoginForm from '../../components/ui/auth/login-form';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main
      className="flex w-full items-center overflow-hidden min-h-screen h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/images/all-img/page-bg.png')`, // asegúrate de tener esta imagen en /public/images/all-img
      }}
    >
      <div className="overflow-y-auto flex flex-wrap w-full h-screen">
        {/* Sección izquierda con logo (visible solo en lg+) */}
        <div className="hidden lg:flex flex-1 items-center justify-center lg:w-1/2">
          <Link href="/">
            <Image
              src="/images/logo/logo-white.svg" // pon este logo en /public/images/logo
              alt="Logo"
              width={300}
              height={300}
              className="mb-10 h-40 w-36"
            />
          </Link>
        </div>

        {/* Sección derecha con formulario */}
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="bg-[#0F111A] text-white relative lg:mr-[150px] mr-auto p-10 rounded-md max-w-[520px] w-full ml-auto">
            {/* Logo mobile */}
            <div className="flex justify-center items-center text-center mb-6 lg:hidden">
              <Link href="/">
                <Image
                  src="/images/logo/logo-white.svg"//// imegen
                  alt="Logo"
                  width={120}
                  height={40}
                />
              </Link>
            </div>

            {/* Título */}
            <div className="text-center mb-5">
              <h4 className="font-semibold text-2xl">Sign In</h4>
              <p className="text-sm text-gray-400 mt-1">
                Sign in to your account to start using Dashcode
              </p>
            </div>

            {/* Formulario */}
            <LoginForm />

          

              {/* Enlace a registro */}
            <div className="text-sm text-center mt-6 text-gray-400 uppercase">
              Don’t have an account?
              <Link href="/register" className="text-white font-medium hover:underline ml-1">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SocialButton({ icon }: { icon: string }) {
  const icons = {
    twitter: '/icons/twitter.svg',
    facebook: '/icons/facebook.svg',
    linkedin: '/icons/linkedin.svg',
    google: '/icons/google.svg',
  };

  return (
    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition">
      <Image src={icons[icon]} alt={icon} width={20} height={20} />
    </button>
  );
}
