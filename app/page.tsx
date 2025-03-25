import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import About from "./components/About";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Companies from "./components/Companies";
import Choose from "./components/Choose";
import ClientContent from "./components/ClientContent"; // Nuevo componente cliente
import { TestimonialItemData, ServiceItemData, ServiceEspecificItemData, PortFolioStyles, VideoSource } from "./types";

// Importar JSONs directamente con tipado
import testimonialData from "./data/dataTestimonial.json";
import servicesData from "./data/dataServices.json";
import servicesEspecificData from "./data/dataEspecificServices.json";
import companiesData from "./data/dataCompanies.json";
import aboutSectionData from "./data/aboutContentHome.json";
import portFolioStyles from "./data/portFolioStyles.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Commercial Cleaning Services Sydney | Premium Office & Retail Cleaning</title>
        <meta name="description" content="Professional commercial cleaning services in Sydney. Trusted office cleaning, retail space maintenance & healthcare facility sanitation. Eco-friendly solutions & insured cleaners. Get a free quote today!" />
      </Head>

      <Header />
      <main>
        <About data={aboutSectionData[0]} services={servicesEspecificData} />
        <Promo />
        <Companies data={companiesData} title="Trusted for all this companies all arround Sydney" /> {/* Se envía un array vacío porque ya no se usa companiesData */}
        {/* Componentes pesados cargados en ClientContent */}
        <ClientContent
          testimonialData={testimonialData as TestimonialItemData[]}
          servicesData={servicesData as ServiceItemData[]}
          servicesEspecificData={servicesEspecificData as ServiceEspecificItemData[]}
          portFolioStyles={portFolioStyles[0] as PortFolioStyles}
          videoSource={"/videocleaning.webm" as string}
        />
        <Choose data={servicesEspecificData} />
      </main>
      <Footer />
    </>
  );
}
