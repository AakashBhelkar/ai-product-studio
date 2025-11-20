import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Products from "@/components/Products";
import Experiments from "@/components/Experiments";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import ProductThinking from "@/components/ProductThinking";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <WorkExperience />
      <Products />
      <Experiments />
      <Skills />
      <TechStack />
      <ProductThinking />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
