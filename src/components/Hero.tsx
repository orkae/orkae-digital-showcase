import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,127,80,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transformamos ideias em{" "}
            <span className="gradient-text">produtos digitais</span>
            {" "}que encantam e escalam.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Somos uma software house que une engenharia, design e estratégia para criar soluções de alto impacto.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="group bg-primary hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            Fale com a gente
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/20 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
