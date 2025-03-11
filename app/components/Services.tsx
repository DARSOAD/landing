// Services.tsx
'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';

const ServiceItem = dynamic(() => import("@/app/components/service/Serviceitem"));

// ✅ Interfaz actualizada
interface ServiceItemData {
    image: string;
    location: string;
    header: string;
    date: string;
    description: string;    
    slug: string;
    translated?: boolean;
}

interface ServiceProps {
    data: ServiceItemData[];
    classname?: string;
}

export default function Services({ data, classname }: ServiceProps) {
    const memoizedData = React.useMemo(() => data, []);

    return (
        <section className={`testimonial-block sm:py-14 py-20 bg-[#f9f9fa] ${classname}`}>
            <div className="flex flex-col w-full">
                {/* ... (resto del código igual) */}
                <div className="list-testimonials md:mt-10 mt-7 w-full px-5 lg:pl-20 lg:pr-20 2xl:pr-56 2xl:pl-64">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 3 } // ✅ Breakpoint correcto
                        }}
                        className='h-full relative style-section'
                    >
                        {memoizedData.map((item, index) => (
                            <SwiperSlide 
                                key={index} 
                                className="2xl:flex 2xl:items-center 2xl:justify-center 2xl:mx-2" // ✅ Clases corregidas
                            >
                                <ServiceItem 
                                    data={item} 
                                    type="style-two"
                                    translate // ✅ Prop booleana simplificada
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}