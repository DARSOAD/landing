'use client';

import { useState } from 'react';

export default function RecoverForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías conectar con tu backend para enviar el email de recuperación
    console.log('Email para recuperar contraseña:', email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl p-10 rounded-lg shadow-md bg-[#1A1C2D] text-white"
    >
      <h2 className="text-2xl font-bold mb-6">Recover your password</h2>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 rounded-md bg-[#0F111A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
      >
        Send recovery email
      </button>

      <p className="text-sm text-gray-400 mt-4">
        Remembered your password? <a href="/login" className="text-blue-400 hover:underline">Login</a>
      </p>
    </form>
  );
}
