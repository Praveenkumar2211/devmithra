import { Link } from "react-router-dom";
import { ArrowRight, Code2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-light rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-up">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium">Trusted by 100+ Companies</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
              Building Digital
              <br />
              <span className="text-accent">Excellence</span> Together
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-up animation-delay-200">
              We transform your vision into powerful software solutions. From startups to enterprises, Devmithra delivers innovation that drives growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start a Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-up animation-delay-400">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">150+</div>
                <div className="text-sm text-primary-foreground/60">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">50+</div>
                <div className="text-sm text-primary-foreground/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">8+</div>
                <div className="text-sm text-primary-foreground/60">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center animate-fade-up animation-delay-300">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
                <Code2 size={32} className="text-accent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float animation-delay-200">
                <Shield size={32} className="text-accent" />
              </div>

              {/* Main Card */}
              <div className="w-80 h-96 bg-primary-foreground/5 backdrop-blur-md rounded-3xl border border-primary-foreground/10 p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                    <Zap size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                    Innovation First
                  </h3>
                  <p className="text-primary-foreground/60 text-sm">
                    Cutting-edge solutions built with the latest technologies and best practices.
                  </p>
                </div>
                <div className="flex gap-2">
                  {["React", "Node.js", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
