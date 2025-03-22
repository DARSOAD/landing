// Estructura del formulario de creacion de cuenta 

// components/ui/auth/register-form.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-[#1A1C2D] text-white">
      <h2 className="text-2xl font-bold text-center mb-1">Create account </h2>
      {/* <p className="text-center text-gray-400 mb-6">Create your account to start using Dashcode</p> */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          value={form.name}
          className="w-full px-4 py-2 rounded bg-[#2A2C3B] text-white outline-none"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          className="w-full px-4 py-2 rounded bg-[#2A2C3B] text-white outline-none"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          className="w-full px-4 py-2 rounded bg-[#2A2C3B] text-white outline-none"
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={form.confirmPassword}
          className="w-full px-4 py-2 rounded bg-[#2A2C3B] text-white outline-none"
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            onChange={handleChange}
            checked={form.termsAccepted}
            className="mr-2"
            required
          />
          <span className="text-sm">I agree to the Terms and Conditions</span>
        </div>
        <button type="submit" className="w-full py-2 bg-white text-black rounded hover:bg-gray-200">
          Create Account
        </button>
      </form>

      <div className="my-6 flex items-center">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400">Or continue with</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <div className="flex justify-center gap-4">
        <SocialButton icon="🐦" />
        <SocialButton icon="📘" />
        <SocialButton icon="🔗" />
        <SocialButton icon="🟥" />
      </div>

      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{' '}
        <Link href="/login" className="text-white font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

function SocialButton({ icon }: { icon: string }) {
  return (
    <button className="w-10 h-10 bg-[#2A2C3B] rounded-full text-xl hover:bg-[#3A3C4B]">
      {icon}
    </button>
  );
}
