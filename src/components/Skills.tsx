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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-accent/20 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
