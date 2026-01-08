import { ExternalLink, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "FinTrack Pro",
    category: "Fintech",
    description: "A comprehensive financial management platform for enterprise clients with real-time analytics and reporting.",
    challenge: "Legacy financial systems were causing delays in reporting and lack of real-time visibility into cash flows.",
    solution: "Built a modern cloud-native platform with real-time data processing and interactive dashboards.",
    outcome: "60% reduction in reporting time, 40% improvement in financial visibility, and $2M annual savings.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "HealthConnect",
    category: "Healthcare",
    description: "A HIPAA-compliant telemedicine platform enabling virtual consultations and patient management.",
    challenge: "Healthcare provider needed to expand reach while maintaining regulatory compliance and data security.",
    solution: "Developed a secure video consultation platform with encrypted data storage and seamless EHR integration.",
    outcome: "300% increase in patient reach, 95% patient satisfaction score, and full HIPAA compliance.",
    technologies: ["React Native", "Python", "MongoDB", "Azure"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "LogiFlow",
    category: "Logistics",
    description: "AI-powered supply chain optimization platform with predictive analytics and route optimization.",
    challenge: "Inefficient routing and inventory management leading to increased costs and delivery delays.",
    solution: "Implemented ML-based demand forecasting and dynamic route optimization algorithms.",
    outcome: "25% reduction in delivery costs, 35% improvement in on-time deliveries, and optimized inventory levels.",
    technologies: ["Vue.js", "Python", "TensorFlow", "GCP"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "EduSphere",
    category: "EdTech",
    description: "An interactive learning management system with AI-powered personalized learning paths.",
    challenge: "Traditional LMS lacked engagement and failed to adapt to individual learning styles.",
    solution: "Created an adaptive learning platform with gamification, progress tracking, and AI recommendations.",
    outcome: "80% increase in course completion rates, 50% improvement in assessment scores.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "RetailMax",
    category: "E-commerce",
    description: "A scalable e-commerce platform with omnichannel capabilities and advanced inventory management.",
    challenge: "Fragmented sales channels and manual inventory tracking causing overselling and stockouts.",
    solution: "Built a unified commerce platform with real-time inventory sync across all channels.",
    outcome: "45% increase in online sales, 90% reduction in overselling incidents, unified customer experience.",
    technologies: ["React", "Node.js", "Redis", "AWS"],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "PropertyHub",
    category: "Real Estate",
    description: "A comprehensive property management platform with virtual tours and tenant portal.",
    challenge: "Property managers struggled with manual processes and poor communication with tenants.",
    solution: "Developed an all-in-one platform with 3D virtual tours, automated rent collection, and maintenance tracking.",
    outcome: "70% reduction in administrative work, 60% faster tenant onboarding, improved tenant satisfaction.",
    technologies: ["React", "Python", "PostgreSQL", "Stripe"],
    color: "from-teal-500 to-cyan-500",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Projects That
              <span className="text-accent"> Deliver Results</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore our case studies showcasing real-world solutions that have transformed businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-end`}>
                  <div>
                    <span className="text-white/80 text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                      <p className="text-sm text-accent font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "$50M+", label: "Client ROI Generated" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Similar Results?"
        subtitle="Let's discuss how we can help you achieve your business goals with a custom solution."
        primaryCTA="Start Your Project"
        secondaryCTA="View More Work"
      />
    </Layout>
  );
};

export default Portfolio;
