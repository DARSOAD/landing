// app/dashboard/layout.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import DashCodeSidebar from "@/src/components/partials/sidebar";
// import DashCodeHeader from "@/components/partials/header";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const getTitle = () => {
    const parts = pathname.split("/");
    return parts[2]?.charAt(0).toUpperCase() + parts[2]?.slice(1) || "Dashboard";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 text-xl font-bold">
        {getTitle()}
      </header>
      <main className="p-6">
        <DashCodeSidebar />
        {children}
      </main>
    </div>
  );
}
