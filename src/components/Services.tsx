import { Lightbulb, Settings, Palette, Cloud, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Soluções sob medida",
    description: "Sistemas e apps personalizados",
  },
  {
    icon: Settings,
    title: "APIs e plataformas",
    description: "Arquitetura escalável e segura",
  },
  {
    icon: Layers,
    title: "Software como Serviço",
    description: "Produtos SaaS completos e escaláveis",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Interfaces intuitivas e modernas",
  },
  {
    icon: Cloud,
    title: "Cloud e DevOps",
    description: "Infraestrutura otimizada e monitorada",
  },
];

const Services = () => {
  return (
    <section className="py-32 bg-secondary/30" id="servicos">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          O que <span className="gradient-text">fazemos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
