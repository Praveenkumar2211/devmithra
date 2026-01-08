import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Database,
  Settings,
  Shield,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and scalable architecture that drive business results.",
    features: [
      "Progressive Web Applications (PWA)",
      "E-commerce Solutions",
      "Content Management Systems",
      "Enterprise Web Portals",
      "API Development & Integration",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences on iOS and Android.",
    features: [
      "iOS Native Development",
      "Android Native Development",
      "React Native Apps",
      "Flutter Cross-Platform",
      "App Store Optimization",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps automation to optimize performance and reduce costs.",
    features: [
      "AWS / Azure / GCP",
      "Cloud Migration",
      "DevOps & CI/CD",
      "Infrastructure as Code",
      "Cost Optimization",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI and ML technologies to automate and enhance operations.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Process Automation",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics platforms that turn raw data into actionable insights.",
    features: [
      "Data Warehousing",
      "ETL Pipeline Development",
      "Real-time Analytics",
      "Business Intelligence",
      "Data Visualization",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Management",
      "Identity & Access Management",
      "Security Monitoring",
    ],
  },
  {
    icon: Workflow,
    title: "Enterprise Solutions",
    description: "Custom enterprise software that streamlines operations and enhances productivity.",
    features: [
      "ERP Implementation",
      "CRM Development",
      "Workflow Automation",
      "Legacy Modernization",
      "System Integration",
    ],
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology guidance to align IT initiatives with your business objectives.",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "Architecture Review",
      "Vendor Selection",
      "IT Roadmap Planning",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              End-to-End IT
              <span className="text-accent"> Solutions</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              From concept to deployment and beyond, we provide comprehensive software development and IT services tailored to your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 border border-border/50 card-hover hover:border-accent/30"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <service.icon
                      size={32}
                      className="text-accent group-hover:text-accent-foreground transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven methodology ensures quality, transparency, and successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Understand",
                description: "We dive deep into your requirements, goals, and challenges to create a comprehensive project blueprint.",
              },
              {
                step: "2",
                title: "Build",
                description: "Using agile methodology, we develop your solution iteratively with regular feedback and demos.",
              },
              {
                step: "3",
                title: "Launch & Support",
                description: "We ensure smooth deployment and provide ongoing support to keep your solution running optimally.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        subtitle="Tell us about your project and let's explore how we can help you achieve your goals."
        primaryCTA="Start a Project"
        secondaryCTA="Schedule a Call"
      />
    </Layout>
  );
};

export default Services;
