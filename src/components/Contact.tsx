import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 bg-secondary/30" id="contato">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Envie um e-mail para
          </p>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:contato@orkae.com.br" className="inline-flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              contato@orkae.com.br
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
