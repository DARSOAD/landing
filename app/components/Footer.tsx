
import Logo from "@/public/images/logo.svg"; // Importa el SVG
import servicesData from "../data/dataServices.json"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#8a9ab0] text-white py-20 font-sans">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sección de Servicios */}
                    <div className="md:col-span-2">
                        <h2 className="text-sm font-light mb-4 leading-none">
                            Commercial Cleaning Services Sydney - Oasis Commercial
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
                            {servicesData.map((service) => (
                                <Link key={service.slug} href={`/blog/${service.slug}`}>
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
                        <p className="mt-2 text-gray-300 text-sm"> 0452209186</p>
                        <p className="text-gray-300 text-sm">
                            sales@commercialcleaningsydney.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
