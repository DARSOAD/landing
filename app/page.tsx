

import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Promo from "./components/Promo";
import Video from "./components/Video";
import TestimoniialTwo from "./components/TestimonialTwo";
import testimonialData from "./data/dataTestimonial.json"
import companiesData from "./data/dataCompanies.json"
import servicesData from "./data/dataServices.json"
import servicesEspecificData from "./data/dataEspecificServices.json"
import Companies from "./components/Companies";
import Services from "./components/Services";
import Choose from "./components/Choose";
import Footer from "./components/Footer";

// const products = initialData.products;
// const productsTop = initialData.productsTop;

export default function Home() {
  return (
    <>
      <Header/>
      <About data={servicesEspecificData}/>
      <Promo/>
      <Portfolio data={servicesEspecificData}/>
      <Video/>
      <TestimoniialTwo data={testimonialData}/>
      <Companies data={companiesData}/>
      <Services data={servicesData}/>
      <Choose data={servicesEspecificData}/>
      <Footer/>
      
    </>
  );
}


