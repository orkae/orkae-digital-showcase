import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Mannai",
    description: "Assistente inteligente de nutrição com IA para orientação alimentar personalizada.",
    url: "https://mannai.orkae.com.br",
  },
  {
    name: "Reuni",
    description: "Plataforma completa de inscrições para eventos cristãos, com gestão de participantes e pagamentos.",
    url: "https://reuni.orkae.com.br",
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-secondary/30" id="cases">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="gradient-text">Produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Além destes produtos próprios, desenvolvemos soluções sob medida para diversos clientes, 
            com projetos customizados que não podemos expor publicamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  {project.name}
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors inline-block"
                >
                  {project.url.replace('https://', '')}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
