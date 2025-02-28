import Image from "next/image";
import Rate from "../testimonial/Rate";

interface ServiceItemData {
    image: string;
    location: string;
    header: string;
    date: string;
    description: string;
}

interface ServiceProps {
    data: ServiceItemData;
    type: string;
}

const ServiceItem = ({ data, type }: ServiceProps) => {
    return (
        <>
            <div className="max-w-md bg-white rounded-2xl overflow-hidden">
                {/* Imagen */}
                <div className="w-full h-48 relative">
                    <Image
                        src={data.image} 
                        alt={data.header}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                    />
                </div>

                {/* Contenido */}
                <div className="py-5 space-y-4 px-6">
                    {/* Categoría */}
                    <span className="inline-block bg-[#f1f2f3] text-[#999a9f] text-sm px-5 font-medium rounded-full">
                        {data.location}
                    </span>

                    {/* Título */}
                    <h3 className="text-lg font-light text-gray-800  leading-none">{data.header}</h3>

                    {/* Descripción */}
                    <p className="text-[#919197] text-sm">
                        {data.description.length > 180 
                            ? data.description.substring(0, 180) + "..."
                            : data.description}
                    </p>

                    {/* Fecha */}
                    <p className="text-gray-600 font-semibold text-xs uppercase !mt-8">{data.date}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceItem