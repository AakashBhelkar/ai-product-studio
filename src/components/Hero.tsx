import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Product Owner building AI-driven SaaS experiences.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          Aakash Bhelkar — Product Manager, No-code Builder, and AI-first SaaS Strategist.
          I design scalable systems, deep product logic, and automation-driven experiences.
          I focus on the "why" and "how" of the product — and let AI help with the "code."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
