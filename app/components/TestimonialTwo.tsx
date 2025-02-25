'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from "@/app/components/testimonial/Testimonial";

interface TestimonialItemData {
    rate: number;
    review: string;
    name: string;
    company: string;
    image: string;
}

interface TestimonialTwoProps {
    data: TestimonialItemData[];
    classname?: string;  // classname puede ser opcional
}

export default function TestimonialTwo({ data, classname }: TestimonialTwoProps) {
    return (
        <section className={`testimonial-block lg:py-20 sm:py-14 py-10 ${classname} bg-black`}>
            <div className="container">
                <div className="heading">
                    <h3 className="heading3 text-center">Testimonials</h3>
                    <p className="text-center mt-2">Discover exceptional experiences through testimonials from our satisfied customers.</p>
                </div>
                <div className="list-testimonials md:mt-10 mt-7">
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
                        {data.slice(7, 12).map((item, index) => (
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
