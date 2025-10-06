import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    name: "Reuni",
    description: "Plataforma de inscrições para eventos cristãos.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
  },
  {
    name: "Mannai",
    description: "Assistente de nutrição com IA.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-secondary/30" id="cases">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projetos / <span className="gradient-text">Cases</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
