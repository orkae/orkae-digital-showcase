import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text">ORKAE</h2>
            
            <nav className="flex flex-wrap justify-center gap-6 mb-8">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cases
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>

            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2025 ORKAE — Engenharia e inovação que simplificam o digital.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
