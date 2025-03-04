"use client";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "@/public/images/logo.svg";
import servicesData from "../data/dataServices.json";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#8a9ab0] text-white py-20 font-sans">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Sección de Servicios */}
                        <div className="md:col-span-2">
                            <h2 className="text-sm font-light mb-4 leading-none">
                                Commercial Cleaning Services Sydney - Oasis Commercial
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
                                {servicesData.map((service, index) => (
                                    <Link key={index} href={`/blog/${service.slug}`}>
                                        {service.location}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Logo y Contacto */}
                        <div className="flex flex-col items-start">
                            <Logo
                                src="/oasis-logo.svg"
                                alt="Oasis Logo"
                                className="hidden lg:block"
                                width={120}
                                height={40}
                            />
                            <p className="text-gray-300 text-sm mt-2">
                                Professional Commercial Cleaning Services – Keep Your Workplace Spotless & Productive
                            </p>
                            <a href="tel:+611300082727" className="mt-2 text-gray-300 text-sm">
                                1300 082 727
                            </a>

                            <p className="text-gray-300 text-sm">
                                manager@commercialcleaningsydney.com
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Botón Flotante de Llamada */}
            <a
                href="tel:+611300082727"
                className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg animate-bounce transition-transform transform hover:scale-110"
                style={{
                    animation: "moveLeftRight 0.25s infinite alternate ease-in-out"
                }}
            >
                <FaPhoneAlt className="text-2xl" />
            </a>

            {/* Animación en CSS */}
            <style jsx>{`
                @keyframes moveLeftRight {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(10px);
                    }
                }
            `}</style>
        </>
    );
};

export default Footer;
