import Navigation from "@/components/Navigation";
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
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="products">
        <Products />
      </div>
      <Experiments />
      <div id="skills">
        <Skills />
      </div>
      <TechStack />
      <ProductThinking />
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
