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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Products Built</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Case Studies</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground font-medium">
                  Role: {product.role}
                </p>
                <p className="text-muted-foreground">{product.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href={product.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
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
