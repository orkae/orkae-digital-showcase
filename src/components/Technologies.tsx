const technologies = [
  "TypeScript",
  "React",
  "Node.js",
  "Laravel",
  "Docker",
  "AWS",
  "PostgreSQL",
];

const Technologies = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Tecnologias</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-card/50 backdrop-blur border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-lg font-medium text-foreground">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
