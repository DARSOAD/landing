import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import About from "./components/About";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Companies from "./components/Companies";
import ClientContent from "./components/ClientContent"; // Nuevo componente cliente
import { TestimonialItemData, ServiceItemData, ServiceEspecificItemData } from "./types";

// Importar JSONs directamente con tipado
import testimonialData from "./data/dataTestimonial.json";
import servicesData from "./data/dataServices.json";
import servicesEspecificData from "./data/dataEspecificServices.json";
import companiesData from "./data/dataCompanies.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page Optimizada 🚀</title>
        <meta name="description" content="Landing Page rápida y optimizada con Next.js y Tailwind CSS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <About data={servicesEspecificData} />
        <Promo />
        <Companies data={companiesData} /> {/* Se envía un array vacío porque ya no se usa companiesData */}
        {/* Componentes pesados cargados en ClientContent */}
        <ClientContent
          testimonialData={testimonialData as TestimonialItemData[]} 
          servicesData={servicesData as ServiceItemData[]}
          servicesEspecificData={servicesEspecificData as ServiceEspecificItemData[]}
        />
      </main>
      <Footer />
    </>
  );
}
