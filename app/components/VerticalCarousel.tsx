"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "Office cleaning sydney",
        description: "A clean office isn’t just about appearances...",
        image: "/services/service1.webp",
    },
    {
        title: "Dusting, Vacuuming & Surface Sanitization",
        description: "Ensure a clean workspace with thorough dusting and vacuuming.",
        image: "/services/service2.webp",
    },
    {
        title: "Restroom & Kitchen Cleaning",
        description: "Sanitize kitchens and restrooms for a hygienic environment.",
        image: "/services/service3.webp",
    },
    {
        title: "Trash Removal & Recycling",
        description: "Keep your office clean with regular trash disposal and recycling.",
        image: "/services/service4.webp",
    },
    {
        title: "Disinfection of High-Touch Areas",
        description: "Regular sanitization of handles, switches, and shared spaces.",
        image: "/services/service5.webp",
    },
];

export default function VerticalCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [pasosCarrusel, setpasosCarrusel] = useState(0);
    const [primerScroll, setprimerScroll] = useState(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // **Detectar visibilidad con Intersection Observer**
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

                // Detecta si el usuario ha llegado al final del div
                if (entry.boundingClientRect.top < 0) {
                    setIsAtBottom(true);
                } else {
                    setIsAtBottom(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // **Manejo del scroll para cambiar el servicio activo**
    useEffect(() => {
        console.log('entre');
        console.log(pasosCarrusel, 'pasoscarrusel');
        console.log(primerScroll, 'primerScroll');
        
        
        
        if (!isVisible) return;
        const handleScroll = () => {
            
            const scrollPosition = window.scrollY;
            const sectionTop = sectionRef.current ? sectionRef.current.offsetTop : 0;
            
            if(pasosCarrusel===0){
                //console.log('Entramos');
                //console.log("scrollPosition"+scrollPosition);
                //console.log("sectionTop"+sectionTop);
                //console.log("Pasos carrusel será: ", Math.floor((sectionTop - scrollPosition) / 100))
                setprimerScroll(scrollPosition);
                setpasosCarrusel(Math.floor((sectionTop - scrollPosition) / 100));
                console.log(pasosCarrusel);
            }

            const scrollPorservicio = 10*(9-((scrollPosition-sectionTop)/100));
            const index = Math.max(
                0,
                Math.floor((scrollPosition - primerScroll - scrollPorservicio) / scrollPorservicio)                
            );

            // console.log("scrollPosition"+scrollPosition);
            // console.log("sectionTop"+sectionTop);
            // console.log("window.innerHeight"+window.innerHeight);
            // console.log("index"+index);
            // console.log("pasosCarrusel"+pasosCarrusel);

            setActiveIndex(index);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, pasosCarrusel]);

    // **Controlar la posición de `motion.div`**
    const animatedTop = isAtBottom
        ? "calc(100% - 300px)" // Se coloca en la parte inferior cuando llega al final
        : isVisible
        ? "300px" // Se mantiene centrado mientras está visible
        : "500px"; // Estado inicial

    // const animatedPosition = isAtBottom || !isVisible ? "absolute" : "fixed";

    return (
        <div
            ref={sectionRef}
            className="relative w-full overflow-hidden flex flex-col items-center justify-center h-[1600px] bg-gray-100"
        >
            {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                    // **motion.div externo** → Controla la animación de `top`
                    <motion.div
                        key={index}
                        className="w-full px-2 transition-all duration-500 fixed"
                        // style={{ position: animatedPosition }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            top: animatedTop,
                            opacity: isVisible ? 1 : 0, 
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {/* **motion.div interno** → Controla `opacity`, `scale`, `y` */}
                        <motion.div
                            animate={{
                                opacity: isActive ? 1 : 0,
                                scale: isActive ? 1 : 0.8,
                                y: isActive ? "-50%" : "10%",
                            }}
                            transition={{ duration: 0.5 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            className="w-full shadow-md flex flex-col bg-white rounded-3xl overflow-hidden font-sans h-auto"
                        >
                            <div className="flex flex-col w-full p-8">
                                <h2 className="text-xl text-gray-800 font-thin mt-4">{service.title}</h2>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                            <div className="w-full">
                            <Image
                                src={service.image}
                                alt={service.title}
                                layout="responsive"
                                width={774} // 📌 Invertimos el ancho y alto para que la imagen sea más alta
                                height={2015}
                                className="object-cover rounded-lg bottom-0"
                            />

                            </div>
                            

                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
