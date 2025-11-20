import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 bg-gradient-card backdrop-blur-sm mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/90">
                  Aakash Bhelkar is a <span className="font-semibold text-electric-purple">Product Owner/Manager</span> specializing in AI-first SaaS and automation systems.
                  I'm a no-code builder with strong technical thinking — designing products, architectures, and workflows that scale.
                </p>
                
                <p className="text-muted-foreground">
                  I understand APIs, data models, automation workflows, and system behavior deeply even though I don't code traditionally.
                  My focus is product logic, clarity, customer outcomes, and system architecture — and I use AI tools whenever code is required.
                </p>
                
                <p className="text-foreground font-medium border-l-4 border-electric-purple pl-6 py-2 bg-electric-purple/5 rounded-r-lg">
                  I previously created over <span className="text-electric-purple font-bold">1200+ tutorials</span> in automation, integration, and AI workflows during my Pabbly Connect journey, 
                  building a unique mix of technical clarity + user empathy.
                  This background now fuels how I design products and communicate complex systems simply.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300 hover:shadow-glow group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-electric-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 text-electric-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Product Thinking</h3>
                <p className="text-sm text-muted-foreground">Deep system logic & architecture design</p>
              </CardContent>
            </Card>
            
            <Card className="border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow-blue group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-neon-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">AI-First Builder</h3>
                <p className="text-sm text-muted-foreground">No-code + AI-assisted development</p>
              </CardContent>
            </Card>
            
            <Card className="border-electric-purple/20 hover:border-electric-purple/50 transition-all duration-300 hover:shadow-glow group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-electric-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-electric-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">User Empathy</h3>
                <p className="text-sm text-muted-foreground">1200+ tutorials & clear communication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
