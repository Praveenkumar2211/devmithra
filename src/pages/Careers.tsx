import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Coffee,
  Heart,
  Rocket,
  Users,
  Laptop,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";

const benefits = [
  { icon: Laptop, title: "Remote-First", description: "Work from anywhere with flexible hours" },
  { icon: TrendingUp, title: "Growth", description: "Continuous learning and career development" },
  { icon: Heart, title: "Health", description: "Comprehensive health and wellness benefits" },
  { icon: Coffee, title: "Perks", description: "Equipment allowance and team events" },
  { icon: Rocket, title: "Impact", description: "Work on meaningful projects that matter" },
  { icon: Users, title: "Culture", description: "Collaborative and inclusive environment" },
];

const openings = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our core engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Design and maintain our cloud infrastructure, CI/CD pipelines, and ensure system reliability.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and beautiful user experiences for web and mobile applications.",
  },
  {
    title: "Machine Learning Engineer",
    department: "AI/ML",
    location: "Remote",
    type: "Full-time",
    description: "Develop and deploy ML models to power intelligent features in our client solutions.",
  },
  {
    title: "Technical Project Manager",
    department: "Project Management",
    location: "Hybrid",
    type: "Full-time",
    description: "Lead cross-functional teams to deliver complex software projects on time and budget.",
  },
  {
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain automated testing frameworks to ensure product quality.",
  },
];

const values = [
  "We believe in transparency and open communication",
  "We celebrate diversity and different perspectives",
  "We encourage innovation and calculated risk-taking",
  "We prioritize work-life balance and mental health",
  "We invest in continuous learning and development",
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Join Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Build Your Career at
              <span className="text-accent"> Devmithra</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Join a team of passionate technologists working on challenging projects that make a real impact. We're always looking for talented individuals to grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Devmithra
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              More Than Just a Job
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a supportive environment where you can do your best work and grow your career.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-secondary rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Culture
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Place Where You Belong
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Devmithra, we've built a culture that puts people first. We believe that when our team thrives, our work thrives.
              </p>

              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight size={14} className="text-accent" />
                    </div>
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Life at Devmithra
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="text-3xl font-display font-bold text-accent mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="text-3xl font-display font-bold text-accent mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="text-3xl font-display font-bold text-accent mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Employee Retention</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-xl">
                  <div className="text-3xl font-display font-bold text-accent mb-1">4.8</div>
                  <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Open Positions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground text-lg">
              Find your next role and join our growing team.
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-all cursor-pointer card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="flex-shrink-0">
                    Apply Now
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See a Fit?"
        subtitle="We're always looking for talented individuals. Send us your resume and let's connect."
        primaryCTA="Submit Your Resume"
        secondaryCTA="Contact Us"
      />
    </Layout>
  );
};

export default Careers;
