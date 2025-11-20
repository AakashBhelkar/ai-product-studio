import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductThinking = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My Product <span className="bg-gradient-primary bg-clip-text text-transparent">Thinking</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-electric-purple/30 hover:border-electric-purple/60 hover:shadow-glow transition-all duration-500 bg-gradient-card backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-electric-purple/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-2xl text-electric-purple">How I Think About Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Start with problem clarity",
                  "Understand user constraints",
                  "Define system behavior, not UI first",
                  "Build minimal, test fast",
                  "Challenge assumptions",
                  "Use AI to accelerate iteration"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 group/item">
                    <span className="text-electric-purple text-xl font-bold group-hover/item:scale-125 transition-transform">→</span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-neon-blue/30 hover:border-neon-blue/60 hover:shadow-glow-blue transition-all duration-500 bg-gradient-card backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <CardTitle className="text-2xl text-neon-blue">Frameworks I Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "JTBD (Jobs to be Done)",
                  "5 Why's",
                  "RICE / MoSCoW",
                  "Problem → Solution → Evidence",
                  "Data → Insight → Action",
                  "User Story Mapping",
                  "Feature Scoping",
                  "KPI Definition"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 group/item">
                    <span className="text-neon-blue text-xl group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-dark border-electric-purple/40 hover:shadow-glow transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <CardContent className="p-10 relative">
            <div className="text-6xl mb-6 opacity-20">"</div>
            <p className="text-xl text-white/90 italic leading-relaxed font-medium -mt-12 pl-12">
              During PEM redesign, I broke down each screen into:
              Purpose → Behavior → Rules → Edge cases → Data model → User flow → QA notes.
            </p>
            <div className="text-6xl text-right opacity-20 -mt-4">"</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductThinking;
