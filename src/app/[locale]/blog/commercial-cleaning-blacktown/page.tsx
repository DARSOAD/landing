import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/src/app/data/dataServices.json";
import Header from "@/src/components/Header";
import About from "@/src/components/About";
import Promo from "@/src/components/Promo";
import TestimoniialTwo from "@/src/components/TestimonialTwo";
import testimonialData from "@/src/app/data/dataTestimonial.json";
import servicesEspecificData from "@/src/app/data/dataEspecificServices.json"
import Choose from "@/src/components/Choose";
import Footer from "@/src/components/Footer";
import aboutSectionData from "@/src/app/data/aboutContentHome.json";

const SLUG = "commercial-cleaning-blacktown";

// ✅ Página de blog basada en `slug`
export default function BlogPost() {
    const article = blogData.find((item) => item.slug === SLUG);
    if (!article) return notFound();

    return (
        <>
            <Header />
            <About data={aboutSectionData[0]} services={servicesEspecificData}/>
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
