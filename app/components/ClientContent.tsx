"use client";

import dynamic from "next/dynamic";
import { TestimonialItemData } from "../types"; // Importamos los tipos desde un archivo centralizado
import { ServiceItemData, ServiceEspecificItemData } from "../types";

// Carga dinámica de componentes pesados
const Portfolio = dynamic(() => import("./Portfolio"));
const TestimonialTwo = dynamic(() => import("./TestimonialTwo"));
const Services = dynamic(() => import("./Services"));
const Choose = dynamic(() => import("./Choose"));
const Video = dynamic(() => import("./Video"));

interface ClientContentProps {
  testimonialData: TestimonialItemData[];
  servicesData: ServiceItemData[];
  servicesEspecificData: ServiceEspecificItemData[];
}

export default function ClientContent({
  testimonialData,
  servicesData,
  servicesEspecificData,
}: ClientContentProps) {
  return (
    <section className="space-y-20 delay-100">
      <Portfolio data={servicesEspecificData} />
      <Video />
      <TestimonialTwo data={testimonialData} />
      <Services data={servicesData} />
      <Choose data={servicesEspecificData} />
    </section>
  );
}
