'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from "@/src/components/testimonial/Testimonial";
import { IoIosArrowForward } from "react-icons/io";

interface TestimonialItemData {
    rate: number;
    review: string;
    name: string;
    opinions: string;
    image: string;
    date: string;
}

interface TestimonialTwoProps {
    data: TestimonialItemData[];
    classname?: string;  // classname puede ser opcional
}

export default function TestimonialTwo({ data, classname }: TestimonialTwoProps) {
    return (
        <section className={`testimonial-block lg:py-20 sm:py-14 py-10 bg-[#f9f9fa] ${classname}`}>
            <div className="container flex flex-col lg:flex-row">
                <div className="lg:w-1/5 flex flex-row lg:px-8 lg:pt-40 items-center justify-center">
                    <h3 className="font-sans text-center text-gray-800 lg:!text-2xl leading-[1.1] tracking-tight">Our clients <br/> talk for us</h3>
                    <IoIosArrowForward className="mt-3 lg:mt-6 pt-2 -ml-2 w-5 h-5 text-gray-800 lg:block lg:h-20" />
                </div>
                <div className="list-testimonials md:mt-10 mt-7 w-full lg:w-4/5">
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
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                        className='h-full relative style-section'
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialItem data={item} type={'style-two'} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
