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
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Insights on product, AI, and building
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-accent hover:bg-accent/90 text-accent-foreground" 
                : "border-accent/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="text-sm text-accent font-medium mb-2">{post.category}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-accent">
                  Read More →
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
