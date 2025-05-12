// src/components/partials/header/client-profile-info.tsx
'use client';
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Icon } from "@/src/components/ui/icon";

export default function ClientProfileInfo() {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) return null;

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/auth/login", // 👈 redirección después del logout
    });
  };
  
  return (
    <div className="md:block hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src={session.user.image || "/images/default-avatar.png"}
              alt={session.user.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="text-sm font-medium capitalize hidden lg:block">
              {session.user.name}
            </div>
            <span className="text-base hidden lg:inline-block">
              <Icon icon="heroicons-outline:chevron-down" />
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-0" align="end">
          <DropdownMenuItem 
            className="flex items-center gap-2 px-3 py-1.5"
            onClick={handleLogout}
            >
            <Icon icon="heroicons:power" className="w-4 h-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
