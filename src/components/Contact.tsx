import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


const Contact = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-card/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Ready to build AI-first products together.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-electric-purple/30 shadow-card-hover bg-gradient-card backdrop-blur-sm hover:border-electric-purple/50 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-3xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="border-border/50 focus:border-electric-purple bg-background/50 backdrop-blur-sm h-12 transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-border/50 focus:border-electric-purple bg-background/50 backdrop-blur-sm h-12 transition-all duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="border-border/50 focus:border-electric-purple bg-background/50 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="glow"
                  className="w-full h-14 text-lg font-semibold"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-semibold hover:shadow-glow"
            >
              Download My Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
