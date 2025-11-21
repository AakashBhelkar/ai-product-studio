import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Product Skills",
    skills: [
      "Product strategy",
      "Roadmapping",
      "Prioritization frameworks",
      "Research → Design → Prototype → Delivery",
      "PRD writing",
      "User journey mapping",
      "Cross-functional communication",
      "Beta launches & rollout strategy"
    ]
  },
  {
    category: "AI & No-code Skills",
    skills: [
      "AI-assisted development (OpenAI, Replit, v0)",
      "No-code apps (Pabbly, Make, etc.)",
      "Prompt engineering",
      "Chatbot orchestration",
      "API integrations",
      "Automation workflow design"
    ]
  },
  {
    category: "Technical Thinking",
    skills: [
      "Understanding DB schemas & data models",
      "API understanding",
      "Queue systems",
      "Email infrastructure basics",
      "System design fundamentals"
    ]
  }
];

const Skills = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute bottom-0 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-electric-purple/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Core <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = [
              { border: 'border-electric-purple/30', hover: 'hover:border-electric-purple/60', shadow: 'hover:shadow-glow', bullet: 'text-electric-purple', bg: 'bg-electric-purple/5' },
              { border: 'border-neon-blue/30', hover: 'hover:border-neon-blue/60', shadow: 'hover:shadow-glow-blue', bullet: 'text-neon-blue', bg: 'bg-neon-blue/5' },
              { border: 'border-electric-purple/30', hover: 'hover:border-electric-purple/60', shadow: 'hover:shadow-glow', bullet: 'text-electric-purple', bg: 'bg-electric-purple/5' }
            ];
            const color = colors[index];
            
            return (
              <Card key={index} className={`${color.border} ${color.hover} ${color.shadow} transition-all duration-500 bg-gradient-card backdrop-blur-sm group`}>
                <CardHeader>
                  <div className={`inline-block px-4 py-2 ${color.bg} rounded-lg mb-2`}>
                    <CardTitle className={`text-2xl ${color.bullet}`}>{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground group/item">
                        <span className={`${color.bullet} mt-1 text-lg group-hover/item:scale-125 transition-transform`}>•</span>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
