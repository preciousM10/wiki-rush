
import Hero from "@/components/sections/Hero";
import About from "@/components/layout/about";
import Features from "@/components/sections/Features"
import Testimonials from "@/components/sections/Testimonials"
import Characters from "@/components/sections/Characters"
import Mystery from "@/components/sections/Mystery";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      
      <Hero />
     <About />
     <Features />
     <Testimonials />
     <Characters />
     <Mystery />
     <Footer />
    </>
  );
}