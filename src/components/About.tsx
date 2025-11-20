const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Aakash Bhelkar is a Product Owner/Manager specializing in AI-first SaaS and automation systems.
            I'm a no-code builder with strong technical thinking — designing products, architectures, and workflows that scale.
          </p>
          
          <p>
            I understand APIs, data models, automation workflows, and system behavior deeply even though I don't code traditionally.
            My focus is product logic, clarity, customer outcomes, and system architecture — and I use AI tools whenever code is required.
          </p>
          
          <p className="text-foreground font-medium">
            I previously created over 1200 tutorials in automation, integration, and AI workflows during my Pabbly Connect journey, 
            building a unique mix of technical clarity + user empathy.
            This background now fuels how I design products and communicate complex systems simply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
