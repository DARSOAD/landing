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
            <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden px-4">
                {/* Imagen */}
                <div className="w-full h-48 relative">
                    <Image
                        src={data.image} 
                        alt={data.header}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-2xl"
                    />
                </div>

                {/* Contenido */}
                <div className="p-5">
                    {/* Categoría */}
                    <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mb-2">
                        {data.location}
                    </span>

                    {/* Título */}
                    <h3 className="text-lg font-semibold text-gray-900">{data.header}</h3>

                    {/* Descripción */}
                    <p className="text-gray-600 text-sm mt-2">
                        {data.description}
                    </p>

                    {/* Fecha */}
                    <p className="text-gray-800 font-bold text-xs mt-4">{data.date}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceItem