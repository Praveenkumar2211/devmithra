import { CheckCircle2, Users, Award, Headphones, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our seasoned developers bring years of experience in diverse technologies and industries.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Rigorous testing and code reviews ensure enterprise-grade quality in every delivery.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support to keep your systems running smoothly at all times.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodology ensures rapid development cycles and timely project completion.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Success is Our
              <span className="gradient-text"> Priority</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 8 years of experience delivering cutting-edge solutions, we understand what it takes to build software that drives real business results.
            </p>

            <div className="space-y-4">
              {[
                "Proven track record with 150+ successful projects",
                "Transparent communication and project updates",
                "Flexible engagement models to suit your needs",
                "Post-launch support and maintenance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl bg-secondary border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <reason.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
