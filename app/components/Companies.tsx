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
                        <h4 className="text-gray-800 font-sans text-center w-full text-sm pt-8 px-8 lg:text-2xl leading-none 2xl:pt-4">Trusted for all this companies all arround Sydney</h4>
                        <div className="lg:mt-10 mt-7 w-full lg:pr-24 lg:pl-20 2xl:mt-1">
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
                                        className="h-full relative style-section 2xl:h-[17vh]"
                                >
                                        {data.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                        <div className="bg-img lg:w-full w-40 lg:h-[50vh] h-20 overflow-hidden 2xl:h-full">
                                                                <Image
                                                                        width={4000}
                                                                        height={2000}
                                                                        className="w-full h-full object-contain block"
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
