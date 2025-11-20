import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  "All",
  "Product Strategy",
  "AI for Product Managers",
  "No-Code & Automation",
  "Case Studies",
  "My Experiments",
  "Thinking Logs"
];

const blogPosts = [
  {
    title: "How AI is transforming solo product development",
    category: "AI for Product Managers",
    excerpt: "Exploring how AI tools enable individual builders to create production-ready SaaS products.",
    date: "2025"
  },
  {
    title: "How I structure product documentation for complex SaaS platforms",
    category: "Product Strategy",
    excerpt: "A deep dive into my framework for creating comprehensive product specs that engineering teams love.",
    date: "2025"
  },
  {
    title: "Building Confirmly: The no-code + AI approach",
    category: "Case Studies",
    excerpt: "Behind the scenes of building a returns management SaaS without writing traditional code.",
    date: "2025"
  },
  {
    title: "My framework for evaluating new product ideas",
    category: "Product Strategy",
    excerpt: "How I decide what to build next using problem clarity, market validation, and technical feasibility.",
    date: "2025"
  },
  {
    title: "Why product thinking matters more than coding for PM roles",
    category: "Thinking Logs",
    excerpt: "Understanding systems, user problems, and business logic beats syntax knowledge every time.",
    date: "2025"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Insights on product, AI, and building
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "glow" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-card-hover transition-all duration-500 hover:scale-105 border-border/50 hover:border-electric-purple/30 bg-gradient-card backdrop-blur-sm group">
              <CardHeader>
                <div className="inline-block px-3 py-1 bg-gradient-primary text-white rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-electric-purple transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-sm">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-electric-purple hover:text-electric-purple/80 group/btn">
                  Read More 
                  <span className="inline-block group-hover/btn:translate-x-1 transition-transform ml-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
