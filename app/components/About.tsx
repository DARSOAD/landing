import Features from "./about/Features";
import Formhead from "./about/Formhead";
import ReviewsImages from "./about/ReviewsImages";


interface ServiceItemData {
    title: string;
    description: string;
    image: string;
    includes: Record<string, string | undefined>;
}

interface ServiceProps {
    data: ServiceItemData[];
}

const About = ({ data }: ServiceProps) => {
    return (
        <section id="about" 
        className="
        relative 
        py-36 
        bg-[url('/layout1_mobile.webp')]
        lg:bg-[url('/layout1.webp')]
        bg-cover
        bg-top 
        bg-no-repeat
        text-center
        h-[900px]
        flex flex-col 
        lg:flex-row
        justify-between 
        items-center 
        w-full
        lg:px-28
        lg:pt-20
        lg:items-start
        lg:h-screen
        "
    >
        {/* Columna Izquierda - Texto y Características */}
        <div className="px-6 w-full lg:w-[60%] text-left space-y-6 ">
            <h2 className="text-2xl lg:text-3xl font-sans font-extralight lg:absolute lg:top-40 lg:left-[11%] lg:z-10 leading-tight text-white 2xl:text-4xl 2xl:left-[7%]">
                Sydney’s best commercial cleaning, we’ll beat any price!
            </h2>
            <Features />
            <div className="hidden md:block absolute bottom-8">
                <ReviewsImages />
            </div>
        </div>
    
        {/* Columna Derecha - Formulario */}
        <div className="px-6 w-full lg:w-[40%] flex justify-end lg:justify-start ">
            <Formhead data={data} />            
        </div>
    
        {/* Imágenes de Reseñas en Móviles */}
        <div className="md:hidden">
            <ReviewsImages />
        </div>
    </section>
    
    );
};

export default About;
