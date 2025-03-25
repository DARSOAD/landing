// Estructura del formulario recuperacion de cuentas
// components/ui/auth/register-form.tsx
'use client';
import Social from '../auth/social';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validaciones y lógica de registro
    console.log('Register form submitted', form);
  };

  return (
    <div
      className="flex w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/all-img/login-bg.png')" }} // Asegúrate que la imagen exista
    >
      {/* Lado izquierdo con el logo */}
      <div className="hidden lg:flex w-1/2 justify-center items-center">
        <div className="text-white text-center">
          <Image src="/images/logo/logo-white.svg" width={100} height={100} alt="Logo" className="mx-auto mb-4" />
          {/* <p className="text-lg font-semibold">DashCode</p> */}
        </div>
      </div>

      {/* Lado derecho: formulario */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
        <div className="bg-[#0F172A] text-white w-full max-w-md p-8 rounded-md">
          <h2 className="text-2xl font-bold text-center mb-2">Account creation</h2>
          <p className="text-center text-gray-400 mb-6 text-sm">
            Create an account to start using Dashcode
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                onChange={handleChange}
                value={form.name}
                className="w-full px-4 py-2 rounded bg-[#1E293B] text-white outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="dashcode@gmail.com"
                onChange={handleChange}
                value={form.email}
                className="w-full px-4 py-2 rounded bg-[#1E293B] text-white outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                type="password"
                placeholder="********"
                onChange={handleChange}
                value={form.password}
                className="w-full px-4 py-2 rounded bg-[#1E293B] text-white outline-none"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                onChange={handleChange}
                checked={form.termsAccepted}
                className="mr-2"
                required
              />
              <span className="text-sm">
                You Accept Our Terms And Conditions And Privacy Policy
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-black rounded hover:bg-gray-200"
            >
              Create An Account
            </button>
          </form>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-4 text-gray-400 text-sm">Or continue with</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <Social locale="en"  />

          <p className="mt-6 text-center text-sm text-gray-400">
            ALREADY REGISTERED?{' '}
            <Link href="/login" className="text-white font-semibold hover:underline">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}