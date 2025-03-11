"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"; // ✅ Importamos Image de Next.js
import "../../css/styles.css";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface ServiceProps {
    data: ServiceItemData[];
}

function Portfolio({ data }: ServiceProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024); // 📌 Pantallas menores a 1024px
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    function Playing() {
        gsap.registerPlugin(ScrollTrigger);

        const cards = document.querySelectorAll(".cards .card-item");
        const stickDistance = 0;

        const lastCardST = ScrollTrigger.create({
            trigger: cards[cards.length - 1],
            start: "bottom bottom",
        });

        cards.forEach((card, index) => {
            const scale = 1 - (cards.length - index) * 0.025;
            const scaleDown = gsap.to(card, {
                scale: scale,
                transformOrigin: "50% " + (lastCardST.start + stickDistance),
            });

            ScrollTrigger.create({
                trigger: card,
                start: "center center",
                end: () => lastCardST.start + stickDistance,
                pin: true,
                pinSpacing: false,
                animation: scaleDown,
                toggleActions: "restart none none reverse",
            });
        });
    }

    useEffect(() => {
        Playing();

        return () => {
            ScrollTrigger.getAll().forEach((instance) => instance.kill());
        };
    }, []);
    
    return (
        
        <section className="work-card section-padding pb-0 bg-[#f9f9fa] lg:w-[90%] lg:ml-[5%] 2xl:ml-[5%]">
            <div className="container  lg:!w-full">
                <div className="cards ">
                    {data.map((service, index) => (
                        <div key={index} className="card-item sub-bg lg:h-screen lg:rounded-3xl 2xl:h-[70vh]">
                            <div className="row lg:flex lg:flex-row lg:justify-between">
                                <div className="col-lg-5">
                                    <div className="cont flex lg:hidden">
                                        <div>
                                            <h4 className="text-gray-800 font-sans font-light lg:hidden">
                                                {service.title}
                                            </h4>
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-sans font-extralight lg:hidden">
                                                {isMobile
                                                    ? service.description.length > 150
                                                        ? service.description.substring(0, 600) + "..."
                                                        : service.description
                                                    : service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-2/5 hidden lg:flex lg:flex-col py-20 pr-10">
                                    <h4 className="text-xl text-gray-800 font-sans font-light 2xl:text-2xl">
                                        {service.title}
                                    </h4>
                                    <p
                                        className="text-gray-600 font-sans font-extralight leading-none pt-4 text-sm 2xl:text-sm"
                                        dangerouslySetInnerHTML={{ __html: service.description }}
                                    ></p>
                                    <ul className="pt-4">
                                        {Object.entries(service.includes || {}).map(
                                            (text, index) => (
                                                <li key={index} className="flex items-start space-x-2">
                                                    <span className="bg-green-500 text-sm text-white ">
                                                        {" "}
                                                        <IoMdCheckmark />{" "}
                                                    </span>
                                                    <p className="text-xs font-sans font-extralight leading-[1] text-gray-600 2xl:text-sm">
                                                        {text}
                                                    </p>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* Botón de envío */}
                                    <button
                                        type="submit"
                                        className="button-normal w-3/4 ml-[25%] bg-[#36a8b2] hover:bg-blue-600 mt-28"
                                        onClick={() => {
                                            const section = document.getElementById('about');
                                            if (section) {
                                                section.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Lock in the best price for your business
                                        <IoIosArrowForward className="pl-2 w-5 h-5" />
                                    </button>

                                </div>

                                {/* ✅ Cambié img por next/image */}
                                <div className="lg:w-3/5 relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={800} // 📌 Ajusta estos valores según el tamaño real de tus imágenes
                                        height={600} // 📌 Next.js necesita dimensiones específicas
                                        layout="responsive" // 📌 Hace que la imagen se adapte al contenedor
                                        objectFit="cover" // 📌 Mantiene la proporción de la imagen
                                        className="lg:object-cover lg:bottom-0"
                                        priority={index === 0} // 📌 Carga la primera imagen con prioridad
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
