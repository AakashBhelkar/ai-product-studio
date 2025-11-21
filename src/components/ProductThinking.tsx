import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductThinking = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/3 w-64 h-64 md:w-96 md:h-96 bg-electric-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 md:w-96 md:h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My Product <span className="bg-gradient-primary bg-clip-text text-transparent">Thinking</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="border-electric-purple/30 hover:border-electric-purple/60 hover:shadow-glow transition-all duration-500 bg-gradient-card backdrop-blur-sm">
            <CardHeader className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric-purple/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🎯</span>
              </div>
              <CardTitle className="text-xl sm:text-2xl text-electric-purple">How I Think About Products</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
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
            <CardHeader className="p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neon-blue/10 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">⚡</span>
              </div>
              <CardTitle className="text-xl sm:text-2xl text-neon-blue">Frameworks I Use</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
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
          <CardContent className="p-6 sm:p-8 md:p-10 relative">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 opacity-20">"</div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 italic leading-relaxed font-medium -mt-8 sm:-mt-12 pl-8 sm:pl-12">
              During PEM redesign, I broke down each screen into:
              Purpose → Behavior → Rules → Edge cases → Data model → User flow → QA notes.
            </p>
            <div className="text-4xl sm:text-6xl text-right opacity-20 -mt-2 sm:-mt-4">"</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductThinking;
