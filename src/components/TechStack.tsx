import { Card } from "@/components/ui/card";

const techStack = [
  "OpenAI API",
  "Pabbly Connect",
  "Make.com",
  "MongoDB",
  "Figma",
  "Framer",
  "Zapier",
  "Postal SMTP",
  "GitHub",
  "V0",
  "Replit",
  "Cursor",
  "Android Studio"
];

const TechStack = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tech I Use</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-glow-blue transition-all duration-300 hover:scale-105 border-accent/20"
            >
              <p className="font-semibold text-foreground">{tech}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/AakashBhelkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-lg transition-colors"
          >
            Visit GitHub → 
          </a>
          <p className="text-muted-foreground mt-2">
            Featuring repos: Confirmly, DigiProPlat & more
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
