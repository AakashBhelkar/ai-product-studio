import { Card, CardContent } from "@/components/ui/card";

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
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Tech <span className="bg-gradient-primary bg-clip-text text-transparent">I Use</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {techStack.map((tech, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-6 text-center hover:shadow-card-hover transition-all duration-500 hover:scale-110 border-border/50 hover:border-neon-blue/40 bg-gradient-glass backdrop-blur-sm group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <p className="font-semibold text-sm sm:text-base text-foreground relative z-10 group-hover:text-neon-blue transition-colors">{tech}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <Card className="max-w-xl mx-auto bg-gradient-dark border-border/50 hover:shadow-glow transition-all duration-500">
            <CardContent className="p-6 sm:p-8">
              <a 
                href="https://github.com/AakashBhelkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-white hover:text-purple-light font-semibold text-lg sm:text-xl transition-colors group"
              >
                <span className="text-xl sm:text-2xl">→</span>
                Visit GitHub
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <p className="text-white/60 mt-3 text-xs sm:text-sm">
                Featuring repos: Confirmly, DigiProPlat & more
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
