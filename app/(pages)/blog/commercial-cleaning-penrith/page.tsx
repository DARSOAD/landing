import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/app/data/dataServices.json";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Promo from "@/app/components/Promo";
import TestimoniialTwo from "@/app/components/TestimonialTwo";
import testimonialData from "@/app/data/dataTestimonial.json";
import Choose from "@/app/components/Choose";
import Footer from "@/app/components/Footer";
import servicesEspecificData from "@/app/data/dataEspecificServices.json"

const SLUG = "commercial-cleaning-penrith";

// ✅ Página de blog basada en `slug`
export default function BlogPost() {
    const article = blogData.find((item) => item.slug === SLUG);
    if (!article) return notFound();

    return (
        <>
            <Header />
            <About data={servicesEspecificData}/>
            <Promo/>
            <div className="flex flex-col py-8 space-y-2">
                <h1 className="text-sm font-sans text-gray-600 ml-10 lg:ml-40 bg-gray-200 w-60 text-center rounded-lg">
                    {article.location}
                </h1>
                <h3 className="text-sm font-sans text-gray-700 ml-10 lg:ml-40 font-bold">
                    {article.date}
                </h3>
                <Image
                    src={article.cover}
                    alt={article.header}
                    width={1920}
                    height={1080}
                    layout="responsive"
                    className="w-full h-auto"
                />
                <p className="text-sm font-sans text-gray-600 px-10 lg:px-40">
                    {article.content}
                </p>
            </div>
            <TestimoniialTwo data={testimonialData} />
            <Choose data={servicesEspecificData}/>
            <Footer />
        </>
    );
}
