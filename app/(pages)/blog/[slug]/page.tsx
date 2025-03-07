// app/(pages)/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import blogData from "@/app/data/dataServices.json";
import About from "@/app/components/About";
import Header from "@/app/components/Header";
import Promo from "@/app/components/Promo";
import TestimonialTwo from "@/app/components/TestimonialTwo";
import testimonialData from "@/app/data/dataTestimonial.json";
import companiesData from "@/app/data/dataCompanies.json";
import servicesEspecificData from "@/app/data/dataEspecificServices.json";
import Companies from "@/app/components/Companies";
import Choose from "@/app/components/Choose";
import Footer from "@/app/components/Footer";
import { Metadata } from "next";

export function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug // Debe coincidir exactamente con el nombre del segmento dinámico [slug]
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const article = blogData.find((item) => item.slug === params.slug);

    if (!article) return { title: "Artículo no encontrado" };

    return {
        title: article.header,
        description: article.content.slice(0, 150) + "...",
        openGraph: {
            title: article.header,
            description: article.content.slice(0, 150) + "...",
            images: [{ url: article.cover }],
            type: "article",
        },
        metadataBase: new URL("https://tudominio.com"), // Agrega esta línea
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const article = blogData.find((item) => item.slug === params.slug);

    if (!article) return notFound();

    return (
        <>
            <Header />
            <About data={servicesEspecificData} />
            <Promo />

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
                    className="w-full h-auto px-10 lg:px-40"
                    priority
                />

                <article className="prose prose-sm max-w-none px-10 lg:px-40">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>
            </div>

            <TestimonialTwo data={testimonialData} />
            <Companies data={companiesData} />
            <Choose data={servicesEspecificData} />
            <Footer />
        </>
    );
}