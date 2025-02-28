'use client';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../css/styles.css'
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
            setIsMobile(window.innerWidth < 1024); // 📌 Cambia el estado si la pantalla es menor a 1024px
        };

        checkScreenSize(); // Llamamos una vez para establecer el estado inicial
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);


    function Playing() {
        gsap.registerPlugin(ScrollTrigger);

        const cards = document.querySelectorAll('.cards .card-item');
        let stickDistance = 0;

        const firstCardST = ScrollTrigger.create({
            trigger: cards[0],
            start: 'center center',
        });

        const lastCardST = ScrollTrigger.create({
            trigger: cards[cards.length - 1],
            start: 'bottom bottom',
        });

        cards.forEach((card, index) => {
            const scale = 1 - (cards.length - index) * 0.025;
            const scaleDown = gsap.to(card, {
                scale: scale,
                transformOrigin: '50% ' + (lastCardST.start + stickDistance),
            });

            ScrollTrigger.create({
                trigger: card,
                start: 'center center',
                end: () => lastCardST.start + stickDistance,
                pin: true,
                pinSpacing: false,
                animation: scaleDown,
                toggleActions: 'restart none none reverse',
            });
        });
    }
    useEffect(() => {
        Playing();

        // Clean up function
        return () => {
            // Dispose GSAP ScrollTrigger instances
            ScrollTrigger.getAll().forEach((instance) => instance.kill());
        };
    }, []);
    return (
        <section className="work-card section-padding pb-0 bg-[#f9f9fa]">
            <div className="container">
                <div className="cards">
                    {
                        data.map((service, index) => {
                            return (<div key={index} className="card-item sub-bg lg:h-screen">
                                <div className="row lg:flex lg:flex-row lg:justify-between">
                                    <div className="col-lg-5">
                                        <div className="cont flex lg:hidden">
                                            <div>
                                                <h4 className='text-gray-800 font-sans font-light lg:hidden'>{service.title}</h4>
                                            </div>
                                            <div>
                                                <p className='text-gray-800 font-sans font-extralight lg:hidden'>
                                                    {isMobile
                                                        ? service.description.length > 150
                                                            ? service.description.substring(0, 150) + "..."
                                                            : service.description
                                                        : service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='lg:w-2/5 hidden lg:flex lg:flex-col py-20 pr-10'>
                                        <h4 className='text-xl text-gray-800 font-sans font-light'>{service.title}</h4>
                                        <p className='text-gray-600 font-sans font-extralight leading-none pt-4 text-sm'
                                            dangerouslySetInnerHTML={{ __html: service.description }}
                                        ></p>
                                        <ul className="pt-4">
                                            {Object.entries(service.includes || {}).map((text, index) => (
                                                <li key={index} className="flex items-start space-x-2">
                                                    <span className="bg-green-500 text-sm text-white"> <IoMdCheckmark /> </span>
                                                    <p className="text-xs font-sans font-extralight leading-[1] text-gray-600">{text}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* Botón de envío */}
                                        <button
                                            type="submit"
                                            className="button-normal w-3/4 ml-[25%] bg-[#36a8b2] hover:bg-blue-600 mt-28">
                                            Lock in the best price for your business
                                            <IoIosArrowForward className="pl-2 w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="img lg:w-3/5">
                                        <img src={service.image} alt="" className='lg:object-cover lg:rounded-lg lg:bottom-0' />
                                    </div>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default Portfolio;
