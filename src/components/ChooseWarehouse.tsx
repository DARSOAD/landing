"use client";

import Image from "next/image";
import Form from "./choose/Form";

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface ServiceProps {
    data: ServiceItemData[];
}

const Choose = ({ data }: ServiceProps) => {
    return (
        <section id="about" 
        className="
        relative 
        py-12  
        text-center
        h-[70vh]
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
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0 -z-10">
            {/* Imagen para Desktop */}
            <Image 
                src="/layout5Warehouse.webp"
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
                className="hidden lg:block"
            />
            {/* Imagen para Móvil */}
            <Image 
                src="/layout5_mobile.webp"
                alt="Mobile Background"
                layout="fill"
                objectFit="cover"
                priority
                className="lg:hidden"
            />
        </div>
    
        {/* Columna Derecha - Formulario */}
        <div className="px-16 w-full flex justify-center items-center">
            <Form data={data}/>            
        </div>     
       
        
    </section>
    );
};

export default Choose;
