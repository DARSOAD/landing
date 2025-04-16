// src/app/(admin)/posts/page.tsx
'use client';

import React from 'react';
import { Button } from '@/src/components/ui/button';

const posts = [
    {
        id: 1,
        title: "Welcome to Oasis CMS 🎉",
        author: "Admin",
        date: "10/04/2025 a las 9:00 am",
      },
      {
        id: 2,
        title: "How to organize your workspace",
        author: "Camila",
        date: "12/04/2025 a las 3:45 pm",
      },
      {
        id: 3,
        title: "Top 5 plugins for productivity",
        author: "Luis",
        date: "13/04/2025 a las 8:10 am",
      },
      {
        id: 4,
        title: "Design trends for 2025",
        author: "Sofía",
        date: "14/04/2025 a las 2:30 pm",
      },
      {
        id: 5,
        title: "¡Hola mundo!",
        author: "Diego",
        date: "15/04/2025 a las 5:17 pm",
      },
];

export default function PostsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Entradas</h1>
        <Button>Añadir nueva entrada</Button>
      </div>

      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-800 uppercase">
          <tr>
            <th className="px-4 py-3"></th>
            <th className="pl-0 pr-4 py-3">TÍTULO</th>
            <th className="px-4 py-3">AUTOR</th>
            <th className="px-4 py-3">FECHA</th>
          </tr>
          </thead>
          <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b">
                <input type="checkbox" />
              </td>
              <td className="pl-0 pr-4 py-3 text-primary font-medium underline cursor-pointer">
                {post.title}
              </td>
              <td className="px-4 py-3">{post.author}</td>
              <td className="px-4 py-3">{post.date}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
