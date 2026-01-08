import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Cloud, Brain, Database, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions for iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps automation on AWS, Azure, and GCP.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics platforms for data-driven decisions.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize your business operations.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to deployment, we provide end-to-end software development services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-hover border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon
                  size={28}
                  className="text-accent group-hover:text-accent-foreground transition-colors"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
