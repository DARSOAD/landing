"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

type SocialProps = {
  locale: string;
};

const providers = [
  {
    id: "google",
    name: "Google",
    bg: "bg-[#EA4335]",
    icon: "/images/gp.svg",
    enabled: true,
  },
  {
    id: "twitter",
    name: "Twitter",
    bg: "bg-[#1DA1F2]",
    icon: "/images/tw.svg",
    enabled: false, // Cambia a true si ya lo tienes configurado en NextAuth
  },
  {
    id: "facebook",
    name: "Facebook",
    bg: "bg-[#1877F2]",
    icon: "/images/fb.svg",
    enabled: false,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    bg: "bg-[#0077B5]",
    icon: "/images/in.svg",
    enabled: false,
  },
];

export default function Social({ locale }: SocialProps) {
  const handleSignIn = async (providerId: string) => {
    await signIn(providerId, {
      callbackUrl: `/${locale}/dashboard/analytics`,
    });
  };

  return (
    <ul className="flex items-center gap-4 mt-6 justify-center">
      {providers.map((provider) => (
        <li key={provider.id}>
          {provider.enabled ? (
            <button
              onClick={() => handleSignIn(provider.id)}
              className={`h-10 w-10 p-2 rounded-full ${provider.bg} flex items-center justify-center transition hover:opacity-80`}
              aria-label={`Login with ${provider.name}`}
            >
              <Image
                src={provider.icon}
                alt={`Login with ${provider.name}`}
                width={24}
                height={24}
              />
            </button>
          ) : (
            <div
              className={`h-10 w-10 p-2 rounded-full ${provider.bg} flex items-center justify-center opacity-50 cursor-not-allowed`}
              title={`${provider.name} not available`}
            >
              <Image
                src={provider.icon}
                alt={`Login with ${provider.name}`}
                width={24}
                height={24}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}