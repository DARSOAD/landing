

import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Promo from "./components/Promo";
import Video from "./components/Video";
import TestimoniialTwo from "./components/TestimonialTwo";
import testimonialData from "./data/dataTestimonial.json"
import servicesData from "./data/dataServices.json"
import Companies from "./components/Companies";
import Services from "./components/Services";

// const products = initialData.products;
// const productsTop = initialData.productsTop;

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Promo/>
      <Portfolio/>
      <Video/>
      <TestimoniialTwo data={testimonialData}/>
      <Companies/>
      <Services data={servicesData}/>
      <About/>
      
    </>
  );
}


