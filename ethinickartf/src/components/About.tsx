import { Heart, Sparkles, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Crafted with Care",
      description:
        "Every piece is handpicked and crafted with attention to detail, ensuring the highest quality.",
    },
    {
      icon: Sparkles,
      title: "Timeless Design",
      description:
        "Our designs blend traditional elegance with contemporary style for a timeless appeal.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "We use only premium fabrics and materials to ensure comfort and durability.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Elegance, we believe that fashion is an expression of your unique
            personality. Our mission is to provide you with premium kurthis that
            combine traditional craftsmanship with modern aesthetics. Each piece
            in our collection is carefully selected to ensure you feel confident
            and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-card border border-border elegant-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
