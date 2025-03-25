// components/ui/auth/lock-screen-form.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const LockScreenForm = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el unlock real
    console.log('Desbloqueando con contraseña:', password);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg w-full max-w-md text-center">
      {/* Logo en móvil */}
      <div className="mb-6 lg:hidden">
        <Link href="/">
          
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
        Lock Screen
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Enter your password to unlock the screen!
      </p>

      <div className="flex flex-col items-center mb-6">
        <Image
          src="imagen"
          alt="User"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div className="font-medium text-gray-900 dark:text-white">
          Kathryn Murphy
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Unlock
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Not you? Return
        <Link href="/login" className="text-blue-600 dark:text-blue-400 ml-1 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default LockScreenForm;
