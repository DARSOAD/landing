

import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Promo from "./components/Promo";
import VerticalCarousel from "./components/VerticalCarousel";
import Video from "./components/Video";
import TestimoniialTwo from "./components/TestimonialTwo";

// const products = initialData.products;
// const productsTop = initialData.productsTop;

const testimonialsData = [
  {
    rate: 5,
    review: "Excelente servicio",
    name: "John Doe",
    company: "ACME Inc.",
    image: "/john.png",
  },
  // añade aquí más objetos según necesites
];

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Promo/>
      <Portfolio/>
      <Video/>
      <TestimoniialTwo data={testimonialsData}/>
      
      
    </>
  );
}


