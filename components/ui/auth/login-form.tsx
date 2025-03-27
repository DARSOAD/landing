'use client';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Social from '../../ui/auth/social';
import { useState } from 'react';
import {login} from '../../../app/services/api'
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios'

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // estado de "cargando"
  const [errorMessage, setErrorMessage] = useState(''); // mensaje de error
  const [form, setForm] = useState({
    email: '',
    password: '',
    termsAccepted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      const user = await login({
        "email": "alexajenny@gmail.com",
        "password": "supersecure123"
      });
  
      console.log('Usuario logueado:', user);
      // window.location.href = '/dashboard'; // O redirigir donde quieras
  
    } catch (err: any) {
      alert(err.message);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl p-10 rounded-lg shadow-md bg-[#1A1C2D] text-white"
    >
    
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

      {/* MENSAJE DE ERROR */}
      {errorMessage && (
        <div className="mb-4 text-sm text-red-500 bg-red-100 p-2 rounded">
          {errorMessage}
        </div>
      )}


      {/* BOTÓN LOGIN */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {/* LÍNEA DIVISORIA */}
      <div className="my-6 flex items-center">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-4 text-gray-400">Or continue with</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* SOCIAL */}
      <Social locale="en" />

     
      
    </form>
  );
}
