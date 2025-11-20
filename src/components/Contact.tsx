import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Let's Build Together</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Ready to build AI-first products together.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-accent/20 shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="border-input focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-input focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="border-input focus:border-accent"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
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
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
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
