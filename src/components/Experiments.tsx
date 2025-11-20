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
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Lightbulb className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">Experiments / Labs</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {experiments.map((experiment, index) => (
            <Card 
              key={index}
              className="hover:shadow-glow-blue transition-all duration-300 hover:scale-105 border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-base leading-tight">{experiment}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
