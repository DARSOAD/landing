import Features from "./about/Features";
import Formhead from "./about/Formhead";
import ReviewsImages from "./about/ReviewsImages";


const About = () => {
    return (
        <section id="about" 
        className="
        relative 
        py-20 
        bg-[url('/layout1_mobile.webp')]
        lg:bg-[url('/layout1.webp')]
        bg-cover
        bg-top 
        bg-no-repeat
        text-center
        h-screen
        flex flex-col 
        lg:flex-row
        justify-between 
        items-center 
        w-full
        lg:px-28
        "
    >
        {/* Columna Izquierda - Texto y Características */}
        <div className="px-6 w-full lg:w-[60%] text-left space-y-6">
            <h2 className="text-lg lg:text-3xl font-sans font-thin lg:absolute lg:top-40 lg:left-[11%] lg:z-10">
                Sydney’s best commercial cleaning, we’ll beat any price!
            </h2>
            <Features />
            <div className="hidden lg:block absolute bottom-8">
                <ReviewsImages />
            </div>
        </div>
    
        {/* Columna Derecha - Formulario */}
        <div className="px-6 w-full lg:w-[40%] flex justify-end">
            <Formhead />            
        </div>
    
        {/* Imágenes de Reseñas en Móviles */}
        <div className="lg:hidden">
            <ReviewsImages />
        </div>
    </section>
    
    );
};

export default About;
