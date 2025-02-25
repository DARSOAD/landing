'use client';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../css/styles.css'

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

function Portfolio() {
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
        <section className="work-card section-padding pb-0 bg-[#e6e6e6]">
            <div className="container">
                <div className="cards">
                    {
                        services.map((service, index) => {
                            return (<div key={index} className="card-item sub-bg ">
                                <div className="row lg:flex lg:flex-row lg:justify-between">
                                    <div className="col-lg-5">
                                        <div className="cont flex lg:hidden">
                                            <div>
                                                <h4 className='text-black font-sans font-bold lg:hidden'>{service.title}</h4>
                                            </div>
                                            <div>
                                                <p className='text-black font-sans lg:hidden'>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='lg:w-1/2 hidden lg:flex lg:flex-col py-6'> 
                                        <h4 className='text-xl text-gray-800 font-sans font-bold'>{service.title}</h4>
                                        <p className='text-gray-800 font-sans'>
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="img lg:w-1/2">
                                        <img src={service.image} alt="" className='lg:object-cover lg:rounded-lg lg:bottom-0'/>
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
