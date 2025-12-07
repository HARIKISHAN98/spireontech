import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsSection from "./components/StatsSection"; 
import AboutCompany from "./components/AboutCompany";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <StatsSection/>
      <AboutCompany />
      <TestimonialsSection />
      <BlogSection />
      <Contact/>
    </div>
  );
}


