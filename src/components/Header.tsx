"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Importamos next/image para manejar el SVG
import Link from "next/link"; // Para manejar navegación
import { FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Corregimos la importación

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter(); // Hook de Next.js para navegación

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        if (window.location.pathname === "/") {
            // Si ya estamos en la página principal, hacer scroll a la sección 'about'
            const section = document.getElementById("about");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Si estamos en otra página, redirigir a la página principal
            router.push("/");
    
            // Esperar un poco y luego hacer scroll a 'about'
            setTimeout(() => {
                const section = document.getElementById("about");
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 500);
        }
    };
    

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-gradient-to-b from-black/50 to-black/10 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="mx-auto py-2 flex justify-between px-6 lg:px-20">
                {/* Logo - Ahora como Link con Image */}
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                    <Link href="/" onClick={handleClick} className="hover:cursor-pointer">
                        <Image
                            src="/images/logo.svg" // Usamos una imagen estática desde public/
                            alt="Oasis Logo"
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Ícono de Teléfono */}
                <div className="pt-4">
                    <a href="tel:+611300082727" className="flex flex-row space-x-3">
                        <p className="text-white"> 1300082727</p>
                        <FaPhoneAlt className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
