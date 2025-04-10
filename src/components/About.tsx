import Image from "next/image";
import Features from "./about/Features";
import Formhead from "./about/Formhead";
import ReviewsImages from "./about/ReviewsImages";

interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface AboutSectionData {
    backgroundDesktop: string;
    backgroundMobile: string;
    heading: string;
    featuresContent: FeaturesContent[];
    formContent: FormContent[];
}

interface FeaturesContent {
    featuresFirstText: string;
    featuresSecondText: string;
    featuresImg: string;
}

interface FormContent {
    firstText: string;
    buttonText: string;
    buttonColor: string;
}

interface AboutProps {
    data: AboutSectionData;
    services: ServiceItemData[];
}

const About = ({ data, services }: AboutProps) => {
    const {
        backgroundDesktop,
        backgroundMobile,
        heading,
        featuresContent,
        formContent
    } = data;

    return (
        <section id="about" className="relative py-20 text-center flex flex-col lg:flex-row justify-between items-center w-full lg:px-28 lg:pt-20 lg:items-start lg:h-screen">
            {/* Fondo optimizado */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={backgroundDesktop}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="hidden lg:block"
                />
                <Image
                    src={backgroundMobile}
                    alt="Mobile Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="lg:hidden"
                />
            </div>

            {/* Columna Izquierda - Texto y Características */}
            <div className="px-6 w-full lg:w-[60%] text-left space-y-6">
                <h2 className="text-2xl lg:text-3xl font-sans pl-4 font-extralight lg:absolute lg:top-28 2xl:top-36 lg:pl-0 lg:left-[10%] lg:z-10 leading-tight text-white 2xl:text-4xl 2xl:left-[11%]">
                    {heading}
                </h2>
                <Features data={featuresContent[0]} />
                <div className="hidden md:block absolute bottom-0">
                    <ReviewsImages />
                </div>
            </div>

            {/* Columna Derecha - Formulario */}
            <div className="px-6 w-full lg:w-[40%] flex justify-end lg:justify-start">
                <Formhead data={services} content={formContent[0]} />
            </div>

            {/* Imágenes de Reseñas en Móviles */}
            <div className="md:hidden">
                <ReviewsImages />
            </div>
        </section>
    );
};

export default About;
