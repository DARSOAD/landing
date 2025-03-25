// import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";


interface FeaturesContent {
    featuresFirstText: string;
    featuresSecondText: string;
    featuresImg: string;
}

interface FeaturesDrops {
    data: FeaturesContent;
}

const Features = ({ data }: FeaturesDrops) => {
    const {
        featuresFirstText,
        featuresSecondText,
        featuresImg
    } = data;
    return (
        <div className="text-white mt-2 mx-2 px-2 lg:block lg:!mt-20 lg:py-1 2xl:ml-8 2xl:!mt-32">
            {/* Texto superior */}
            <p className="mt-4 font-sans text-xs text-left font-extralight lg:font-thin lg:text-sm leading-[1.1] lg:mt-0 2xl:text-xl">
                {featuresFirstText}
            </p>

            {/* Imagen en el centro */}
            <div className="relative w-full my-4 flex justify-center lg:w-[60%]">
                <Image
                    src={featuresImg}
                    alt="Before and After Cleaning"
                    width={600}
                    height={300}
                    className="rounded-lg shadow-lg"
                    priority
                    quality={75} // 🔥 Reduce peso sin perder calidad
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 600px" // 🔥 Ajusta el tamaño dinámicamente
                    loading="eager" // 🔥 Carga lo antes posible
                />
            </div>

            {/* Texto inferior */}
            <p className="font-sans text-xs text-left font-extralight lg:font-thin lg:text-sm leading-[1.1] 2xl:text-xl">
                {featuresSecondText}
            </p>
        </div>
    );
};

export default Features;
