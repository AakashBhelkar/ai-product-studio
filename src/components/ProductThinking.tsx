import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductThinking = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">My Product Thinking</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">How I Think About Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Start with problem clarity",
                  "Understand user constraints",
                  "Define system behavior, not UI first",
                  "Build minimal, test fast",
                  "Challenge assumptions",
                  "Use AI to accelerate iteration"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Frameworks I Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
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
                  <li key={i} className="flex gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-gradient-dark border-accent/30">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              "During PEM redesign, I broke down each screen into:
              Purpose → Behavior → Rules → Edge cases → Data model → User flow → QA notes."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductThinking;
