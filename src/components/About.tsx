const About = () => {
  return (
    <section className="py-32 bg-background" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sobre a <span className="gradient-text">ORKAE</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A ORKAE nasceu da paixão por código limpo, design funcional e resultados reais.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nossa missão é simplificar o complexo, construindo tecnologia com propósito, excelência e transparência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
