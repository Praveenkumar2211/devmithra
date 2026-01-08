import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Zap, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    icon: Heart,
    title: "Trust",
    description: "We build lasting relationships through transparency, honesty, and delivering on our promises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex challenges.",
  },
  {
    icon: Zap,
    title: "Quality",
    description: "Excellence is non-negotiable. We ensure every line of code meets the highest standards.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering open communication and shared goals.",
  },
];

const workProcess = [
  { step: "01", title: "Discovery", description: "Understanding your vision, goals, and requirements through in-depth consultations." },
  { step: "02", title: "Planning", description: "Creating detailed roadmaps, architecture designs, and project timelines." },
  { step: "03", title: "Development", description: "Agile development with regular sprints, demos, and continuous feedback integration." },
  { step: "04", title: "Delivery", description: "Rigorous testing, deployment, and post-launch support to ensure success." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Devmithra
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building the Future of
              <span className="text-accent"> Digital Innovation</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              We are a team of passionate technologists dedicated to transforming businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between cutting-edge technology and business needs, Devmithra has grown from a small team of passionate developers into a full-service IT solutions provider.
                </p>
                <p>
                  Over the years, we've partnered with startups, SMBs, and enterprises across industries, helping them navigate digital transformation and achieve their goals. Our commitment to quality, innovation, and client success has made us a trusted partner for businesses worldwide.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and methodologies to deliver solutions that not only meet but exceed expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">8+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-6 bg-secondary rounded-2xl text-center">
                <div className="text-4xl font-display font-bold text-accent mb-2">30+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be the catalyst for digital transformation, turning complex challenges into opportunities.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 card-hover">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in delivering transformative IT solutions that shape the future of business. We envision a world where technology seamlessly enhances every aspect of business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values define who we are and how we work with our clients and partners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-secondary rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <value.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Approach */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven methodology ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((process, index) => (
              <div key={process.step} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border/50 h-full">
                  <span className="text-5xl font-display font-bold text-accent/20 mb-4 block">
                    {process.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight size={24} className="text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        subtitle="Let's discuss how Devmithra can help accelerate your digital journey."
        primaryCTA="Get in Touch"
      />
    </Layout>
  );
};

export default About;
