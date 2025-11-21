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
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background to-card/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 sm:pl-12 border-l-2 sm:border-l-4 border-electric-purple/30 pb-6 sm:pb-8 last:pb-0 group"
            >
              <div className="absolute -left-[9px] sm:-left-[13px] top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-primary shadow-glow group-hover:scale-125 transition-transform duration-300" />
              
              <div className="bg-card border border-border/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:border-electric-purple/30 backdrop-blur-sm">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="inline-block px-4 py-1 bg-gradient-primary text-white rounded-full text-sm font-medium">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 group/item">
                      <span className="text-electric-purple mt-1 text-lg group-hover/item:scale-125 transition-transform">→</span>
                      <span className="leading-relaxed">{highlight}</span>
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
