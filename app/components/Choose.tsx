"use client";

import Form from "./choose/Form";
import ReviewsImages from "./about/ReviewsImages";


const Choose = () => {
    return (
        <section id="about" 
        className="
        relative 
        py-12 
        bg-[url('/layout5_mobile.webp')]
        lg:bg-[url('/layout5.webp')]
        bg-cover
        bg-top 
        bg-no-repeat
        text-center
        h-[60vh]
        flex flex-col 
        lg:flex-row
        justify-between 
        items-center 
        w-full
        lg:pl-0
        lg:pr-28
        lg:h-[calc(100vw*0.6646)] 
        lg:items-start
        lg:justify-center
        "
    >
        <div className="px-16 w-full text-left space-y-0 lg:hidden">
            <h5 className="leading-none text-xs lg:text-lg font-sans font-light text-[#586a80]">
                Why Choose Us for Commercial Cleaning in Sydney?
            </h5>
            <p  className="leading-none text-xs lg:text-lg font-sans font-light text-[#96a3b0] ">
                At Oasis, we deliver high-quality, reliable, and affordable commercial cleaning services.
                <br/>
                Whether you run a corporate office, retail store, warehouse, or hospitality space, we ensure your workplace is spotless, hygienic, and inviting.
            </p>
            <h5 className="leading-none text-xs lg:text-lg font-sans font-light text-[#586a80]">
                Let’s make your business shine! Get a free quote in just 1 hour! 
            </h5>
        </div>
    
        {/* Columna Derecha - Formulario */}
        <div className="px-16 w-full lg:w-[70%] flex justify-end">
            <Form />            
        </div>
        
        <div className="px-6 w-[30%] text-left space-y-0 hidden lg:block pt-32">
            <h5 className="hidden text-sm font-sans font-bold text-gray-700 lg:block">
                Why Choose Us for Commercial Cleaning in Sydney?
            </h5>
            <p  className="hidden text-sm font-sans font-thin text-gray-600  lg:block">
                At Oasis, we deliver high-quality, reliable, and affordable commercial cleaning services.
                <br/>
                Whether you run a corporate office, retail store, warehouse, or hospitality space, we ensure your workplace is spotless, hygienic, and inviting.
            </p>
            <h5 className="text-sm font-sans font-bold text-gray-700">
                Let’s make your business shine! Get a free quote in just 1 hour! 
            </h5>
        </div>
        
    </section>
    
    );
};

export default Choose;
