import Image from "next/image";
import Link from "next/link";

interface ServiceItemData {
    image: string;
    location: string;
    header: string;
    date: string;
    description: string;
    slug: string;
}

interface ServiceProps {
    data: ServiceItemData;
    type: string;
}

const ServiceItem = ({ data }: ServiceProps) => {
    return (
        <>
            <div className="max-w-md bg-white rounded-2xl overflow-hidden lg:w-full 2xl:w-[45vh]">
                {/* Imagen */}
                <div className="w-full h-48 relative lg:h-60">

                    <Link href={`/blog/${data.slug}`}>
                        <Image
                            src={data.image}
                            alt={data.header}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Link>
                </div>

                {/* Contenido */}
                <div className="py-5 space-y-4 px-6">
                    {/* Categoría */}
                    <Link href={`/blog/${data.slug}`}>
                        <span className="inline-block bg-[#f1f2f3] text-[#999a9f] text-sm px-5 font-medium rounded-full">
                            {data.location}
                        </span>
                    </Link>
                    {/* Título */}
                    <Link href={`/blog/${data.slug}`}>
                        <h3 className="text-lg font-light text-gray-800  leading-none">{data.header}</h3>
                    </Link>
                    {/* Descripción */}
                    <Link href={`/blog/${data.slug}`}>
                        <p className="text-[#919197] text-sm">
                            {data.description.length > 180
                                ? data.description.substring(0, 180) + "..."
                                : data.description}
                        </p>
                    </Link>
                    {/* Fecha */}
                    <Link href={`/blog/${data.slug}`}>
                        <p className="text-gray-600 font-semibold text-xs uppercase !mt-8">{data.date}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ServiceItem