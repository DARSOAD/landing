'use client'
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

interface Companies {
        image: string;
        alt: string;
}

interface CompaniesProps {
        data: Companies[];
}

const Companies = ({ data }: CompaniesProps) => {
        return (
                <section id="companies"
                        className="
        relative 
        text-center
        h-auto
        flex flex-col
        justify-between 
        items-center 
        w-full
        bg-white
        lg:py-20
        "
                >
                        <h4 className="text-gray-800 font-sans text-center w-full text-sm pt-8 px-8 lg:text-2xl leading-none">Trusted for all this companies all arround Sydney</h4>
                        <div className="md:mt-10 mt-7 w-full lg:pr-10 lg:pl-14">
                                <Swiper
                                        spaceBetween={1}
                                        slidesPerView={3}
                                        loop={true}
                                        modules={[Pagination]} // ✅ Puedes eliminar esto si no usas paginación
                                        breakpoints={{
                                                320: { slidesPerView: 3, spaceBetween: 5 },
                                                640: { slidesPerView: 3, spaceBetween: 10 },
                                                1024: { slidesPerView: 4, spaceBetween: 1 },
                                        }}
                                        className="h-full relative style-section"
                                >
                                        {data.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                        <div className="bg-img lg:w-[160px] w-40 lg:h-[80px] h-20 overflow-hidden">
                                                                <Image
                                                                        width={4000}
                                                                        height={2000}
                                                                        className="w-full h-full object-cover block"
                                                                        src={item.image}
                                                                        alt={item.image}
                                                                        unoptimized
                                                                />
                                                        </div>
                                                </SwiperSlide>
                                        ))}
                                </Swiper>
                        </div>
                </section>

        );
};

export default Companies;
