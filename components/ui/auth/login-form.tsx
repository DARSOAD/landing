'use client';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Social from '../../ui/auth/social';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl p-10 rounded-lg shadow-md bg-[#1A1C2D] text-white"
    >
      <h2 className="text-2xl font-bold mb-6">Login to your account</h2>

      {/* EMAIL */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          placeholder="dashcode@codeshaper.net"
          type="email"
          className="w-full px-4 py-2 rounded-md bg-[#0F111A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* PASSWORD CON OJITO */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            className="w-full px-4 py-2 pr-10 rounded-md bg-[#0F111A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}

          </button>
        </div>
      </div>

      {/* CHECK + LINK */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-blue-600" />
          Keep Me Signed In
        </label>
        <a href="#" className="text-blue-400 hover:underline">Forgot Password?</a>
      </div>

      {/* BOTÓN LOGIN */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
      >
        Login
      </button>

      {/* LÍNEA DIVISORIA */}
      <div className="my-6 flex items-center">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400">Or continue with</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* SOCIAL */}
      <Social locale="en" />

      {/* TEXTO FINAL */}
      <p className="text-sm text-gray-400 mt-4">
        Don’t have an account? <a href="/register" className="text-blue-400 hover:underline">Register</a>
      </p>
    </form>
  );
}
