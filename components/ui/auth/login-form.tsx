'use client';


import Social from '../../ui/auth/social';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes conectar con tu backend o usar fetch/Axios
    console.log({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl p-10 rounded-lg shadow-md bg-[#1A1C2D] text-white"
    >
      <h2 className="text-2xl font-bold mb-6">Login to your account</h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 rounded-md bg-[#0F111A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-2 rounded-md bg-[#0F111A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
      >
        Login
      </button>

      <p className="text-sm text-gray-400 mt-4">
        Don’t have an account? <a href="/register" className="text-blue-400 hover:underline">Register</a>
      </p>
    </form>
  );
}
