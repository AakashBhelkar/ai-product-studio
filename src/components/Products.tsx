import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import confirmlyPreview from "@/assets/confirmly-preview.jpg";
import digiroplatPreview from "@/assets/digiroplat-preview.jpg";
import vibenotesPreview from "@/assets/vibenotes-preview.jpg";

const products = [
  {
    title: "Confirmly.io",
    subtitle: "Returns Verification & Management SaaS",
    role: "Founder, Product Designer, System Architect",
    description: "Built fully without coding, using AI-assisted development. Designed workflows, customer journeys, internal tools. Built product logic, UI structure, DB flow.",
    github: "https://github.com/AakashBhelkar/confirmly.git",
    image: confirmlyPreview
  },
  {
    title: "DigiProPlat",
    subtitle: "Digital Product Platform",
    role: "Product Builder",
    description: "Designed marketplace flow, creator dashboards, automation triggers. AI-assisted dev + no-code systems.",
    github: "https://github.com/AakashBhelkar/DigiProPlat.git",
    image: digiroplatPreview
  },
  {
    title: "VibeNotes",
    subtitle: "AI-based Note-Taking App",
    role: "Builder + Product Thinker",
    description: "MVP structure. Lean feature set. Simple UI flows. Mobile-first product design.",
    github: "#",
    image: vibenotesPreview
  }
];

const Products = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Products <span className="bg-gradient-primary bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">Case Studies</p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-500 overflow-hidden border-border/50 hover:border-electric-purple/30 bg-gradient-card backdrop-blur-sm">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-electric-purple transition-colors">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground font-medium">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="px-3 py-2 bg-electric-purple/5 rounded-lg border border-electric-purple/20">
                  <p className="text-sm text-electric-purple font-semibold">
                    {product.role}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full group/btn hover:shadow-glow"
                  asChild
                >
                  <a href={product.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub 
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
