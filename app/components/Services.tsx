'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import ServiceItem from "@/app/components/service/Serviceitem";
import { IoIosArrowForward } from "react-icons/io";

interface ServiceItemData {
    image: string;
    location: string;
    header: string;
    date: string;
    description: string;    
}

interface ServiceProps {
    data: ServiceItemData[];
    classname?: string;  // classname puede ser opcional
}

export default function Services({ data, classname }: ServiceProps) {
    return (
        <section className={`testimonial-block sm:py-14 py-10 bg-[#f0f0f0] ${classname}`}>
            <div className="flex flex-col w-full">
                <div className="heading lg:px-8 lg:py-8">
                    <h3 className="font-sans text-center text-gray-800 lg:!text-2xl">Comercial cleaning services</h3>
                    <p className="font-sans text-center text-gray-600 lg:!text-2xl">Sydney-Wide Cleaning Services - Every space, perfectly cleaned</p>
                </div>
                <div className="list-testimonials md:mt-10 mt-7 w-full">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className='h-full relative style-section'
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ServiceItem data={item} type={'style-two'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
