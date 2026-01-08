import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import {
  ShoppingCart,
  HeartPulse,
  Landmark,
  GraduationCap,
  Factory,
  Plane,
  Building2,
  Car,
} from "lucide-react";

const technologies = {
  frontend: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Java", "Go", ".NET", "PHP"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  cloud: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Vercel"],
  devops: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
  ai: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn"],
};

const industries = [
  { icon: ShoppingCart, name: "E-commerce & Retail", description: "Digital storefronts, inventory management, and omnichannel solutions." },
  { icon: HeartPulse, name: "Healthcare & Life Sciences", description: "HIPAA-compliant platforms, telemedicine, and patient management systems." },
  { icon: Landmark, name: "Finance & Banking", description: "Secure fintech solutions, payment gateways, and regulatory compliance." },
  { icon: GraduationCap, name: "Education & EdTech", description: "Learning management systems, e-learning platforms, and student portals." },
  { icon: Factory, name: "Manufacturing", description: "Industrial IoT, supply chain optimization, and predictive maintenance." },
  { icon: Plane, name: "Travel & Hospitality", description: "Booking systems, customer experience platforms, and loyalty programs." },
  { icon: Building2, name: "Real Estate", description: "Property management, listing platforms, and virtual tour solutions." },
  { icon: Car, name: "Automotive", description: "Connected vehicle solutions, dealer management, and fleet tracking." },
];

const capabilities = [
  { title: "Full-Stack Development", percentage: 95 },
  { title: "Cloud Architecture", percentage: 90 },
  { title: "Mobile Development", percentage: 88 },
  { title: "AI & Machine Learning", percentage: 82 },
  { title: "DevOps & Automation", percentage: 92 },
  { title: "UI/UX Design", percentage: 85 },
];

const Expertise = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Expertise
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Technologies &
              <span className="text-accent"> Capabilities</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Deep expertise across modern technologies and industries, enabling us to deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Technology Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Modern Tools for Modern Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We leverage cutting-edge technologies to build scalable, secure, and performant applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="bg-secondary rounded-2xl p-6 border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-card rounded-lg text-sm text-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Capabilities
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Excel At
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our team brings deep expertise across multiple domains, ensuring we can tackle any technical challenge your project demands.
              </p>

              <div className="space-y-6">
                {capabilities.map((cap) => (
                  <div key={cap.title}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{cap.title}</span>
                      <span className="text-accent font-semibold">{cap.percentage}%</span>
                    </div>
                    <div className="h-2 bg-card rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: `${cap.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Why Our Tech Stack Matters
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We carefully select technologies based on project requirements, scalability needs, and long-term maintainability.
                </p>
                <p>
                  Our engineers stay current with the latest advancements, ensuring you benefit from modern best practices and performance optimizations.
                </p>
                <p>
                  Whether you need a high-performance API, a responsive web app, or a complex microservices architecture, we have the expertise to deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Industries We Serve
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Domain Expertise Across Sectors
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique challenges and requirements of various industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group bg-secondary rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <industry.icon
                    size={24}
                    className="text-accent group-hover:text-accent-foreground transition-colors"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Great"
        subtitle="Leverage our expertise to bring your vision to life with the right technology stack."
        primaryCTA="Discuss Your Project"
      />
    </Layout>
  );
};

export default Expertise;
