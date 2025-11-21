import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Workflow } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple/5 via-background to-neon-blue/5" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-purple/10 border border-electric-purple/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-electric-purple" />
            <span className="text-sm font-medium text-foreground">AI-First Product Builder</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="block text-foreground">Product Owner</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              building AI-driven
            </span>
            <span className="block text-foreground">SaaS experiences.</span>
          </h1>
          
          {/* Description */}
          <div className="max-w-3xl mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium">
              Aakash Bhelkar — Product Manager, No-code Builder, and AI-first SaaS Strategist.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design scalable systems, deep product logic, and automation-driven experiences.
              I focus on the "why" and "how" of the product — and let AI help with the "code."
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-electric-purple hover:bg-electric-purple/90 text-white shadow-glow group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-border hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="/Aakash_Bhelkar_Resume.pdf" download="Aakash_Bhelkar_Resume.pdf">
              Download Resume
            </a>
          </Button>
          </div>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-electric-purple/50 transition-colors">
              <Code2 className="w-8 h-8 text-electric-purple mb-3" />
              <h3 className="font-semibold text-foreground mb-2">No-Code Builder</h3>
              <p className="text-sm text-muted-foreground">Building SaaS products with AI-assisted development</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-neon-blue/50 transition-colors">
              <Workflow className="w-8 h-8 text-neon-blue mb-3" />
              <h3 className="font-semibold text-foreground mb-2">System Architect</h3>
              <p className="text-sm text-muted-foreground">Deep product logic and scalable architectures</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-electric-purple/50 transition-colors">
              <Sparkles className="w-8 h-8 text-electric-purple mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Product Strategist</h3>
              <p className="text-sm text-muted-foreground">1200+ tutorials in automation & AI workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
