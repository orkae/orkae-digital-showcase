import { Search, Rocket, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Clareza",
    description: "Comunicação transparente e objetiva.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Engenharia com propósito e qualidade.",
  },
  {
    icon: MessageCircle,
    title: "Parceria",
    description: "Trabalhamos junto, não apenas para você.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Por que escolher a <span className="gradient-text">ORKAE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 rounded-lg hover:bg-card/30 transition-all duration-300"
            >
              <reason.icon className="w-16 h-16 text-accent mx-auto" />
              <h3 className="text-2xl font-bold">{reason.title}</h3>
              <p className="text-muted-foreground text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
