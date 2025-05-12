"use client";

import dynamic from "next/dynamic";
import { TestimonialItemData } from "@/src/app/types"; // Importamos los tipos desde un archivo centralizado
import { ServiceItemData, ServiceEspecificItemData, PortFolioStyles } from "@/src/app/types";

// Carga dinámica de componentes pesados
const Portfolio = dynamic(() => import("./Portfolio"));
const TestimonialTwo = dynamic(() => import("./TestimonialTwo"));
const Services = dynamic(() => import("./Services"));
const Video = dynamic(() => import("./Video"));

interface ClientContentProps {
  testimonialData: TestimonialItemData[];
  servicesData: ServiceItemData[];
  servicesEspecificData: ServiceEspecificItemData[];
  portFolioStyles: PortFolioStyles;
  videoSource: string
}

export default function ClientContent({
  testimonialData,
  servicesData,
  servicesEspecificData,
  portFolioStyles,
  videoSource
}: ClientContentProps) {
  return (
    <section className="space-y-20 delay-100">
      <Portfolio data={servicesEspecificData} estilos={portFolioStyles} />
      <Video url={videoSource}/>
      <TestimonialTwo data={testimonialData} />
      <Services data={servicesData} />
    </section>
  );
}
