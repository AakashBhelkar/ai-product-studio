const experiences = [
  {
    title: "Product Owner — Pabbly Email Marketing (PEM)",
    period: "2025 — Present",
    highlights: [
      "Leading the full PEM redesign from research → design → prototype → beta",
      "Working across UX, system behavior, workflows, and product decisions",
      "Defining MongoDB schemas, naming conventions, user flows",
      "Working closely with designers, engineering, QA, and founders",
      "Creating detailed product documentation defining every UI component, card, button, filter, table, and behavior"
    ]
  },
  {
    title: "Senior Content Creator → Marketing Specialist — Pabbly Connect",
    period: "Previous Role",
    highlights: [
      "Created 1200+ video tutorials on automation & AI workflows",
      "Built internal knowledge bases, documentation, and training material",
      "Designed automation architecture for demos",
      "Developed strong system-level thinking & customer empathy",
      "Transitioned into product roles from hands-on technical content"
    ]
  }
];

const WorkExperience = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-accent pb-12 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-glow" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.period}</p>
                </div>
                
                <ul className="space-y-2 text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
