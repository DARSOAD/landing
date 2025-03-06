import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/app/data/dataServices.json";
import About from "@/app//components/About";
import Header from "@/app//components/Header";
import Promo from "@/app//components/Promo";
import TestimoniialTwo from "@/app/components/TestimonialTwo";
import testimonialData from "@/app/data/dataTestimonial.json"
import companiesData from "@/app/data/dataCompanies.json"
import servicesEspecificData from "@/app/data/dataEspecificServices.json"
import Companies from "@/app//components/Companies";
import Choose from "@/app//components/Choose";
import Footer from "@/app//components/Footer";

export default function BlogPost({ params }: { params: { slug: string } }) {
    const article = blogData.find((item) => item.slug.toString() === params.slug);

    if (!article) return notFound();

    return (
        // <main className="container mx-auto p-6">
        //     <h1 className="text-3xl font-bold">{article.header}</h1>
        //     <p className="text-gray-500">{article.date}</p>
        //     <img src={article.image} alt={article.header} className="w-full h-auto my-4" />
        //     <p className="mt-4">{article.description}</p>
        // </main>
        <>
            <Header/>
            <About data={servicesEspecificData}/>
            <Promo/>
            <div className="flex flex-col py-8 space-y-2">
                <h1 className="text-sm font-sans text-gray-600 ml-10 lg:ml-40 bg-gray-200 w-60 text-center rounded-lg">{article.location}</h1>
                <h3 className="text-sm font-sans text-gray-700 ml-10 lg:ml-40 font-bold">{article.date}</h3>
                <Image src={article.cover} 
                    alt={article.header}
                    width={1920} // Ancho base de referencia (no es fijo, Next.js lo ajusta)
                    height={1080} // Alto base de referencia (mantiene proporción)
                    layout="responsive" // Hace que la imagen sea 100% del contenedor y ajuste altura automáticamente
                    className="w-full h-auto"
                />
                <p className="text-sm font-sans text-gray-600 px-10 lg:px-40">{article.content}</p>

            </div>
            <TestimoniialTwo data={testimonialData}/>
            <Companies data={companiesData} />
            <Choose data={servicesEspecificData}/>
            <Footer/>
            
        </>
    );
}