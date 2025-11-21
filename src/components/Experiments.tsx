import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const experiments = [
  "SMS-to-Webhook Android App",
  "Advanced JSON-based cinematic ad generator",
  "Chatbot/AI assistant builder using structured knowledge bases",
  "MongoDB schema design experiments",
  "Workflow automation prototypes",
  "Prompt engineering systems",
  "AI-first email infrastructure workflow diagrams",
  "Postal SMTP infra testing & setup learning"
];

const Experiments = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-card/50 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--electric-purple)/0.05),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-2xl flex items-center justify-center animate-pulse">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Experiments <span className="bg-gradient-primary bg-clip-text text-transparent">& Labs</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {experiments.map((experiment, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-500 hover:scale-105 border-border/50 hover:border-neon-blue/40 bg-gradient-glass backdrop-blur-sm relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <CardTitle className="text-base leading-tight group-hover:text-neon-blue transition-colors duration-300">
                  {experiment}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
