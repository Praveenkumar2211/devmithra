import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Linkedin, Twitter, Github } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@devmithra.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Tech Street",
    description: "San Francisco, CA 94102",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri",
    description: "9:00 AM - 6:00 PM EST",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start a
              <span className="text-accent"> Conversation</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to discuss your project? Reach out through any of the channels below, or fill out the form and we'll get back to you promptly.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-0.5">{item.title}</h3>
                      <p className="text-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors group"
                  >
                    <Linkedin size={18} className="text-muted-foreground group-hover:text-accent-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors group"
                  >
                    <Twitter size={18} className="text-muted-foreground group-hover:text-accent-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center transition-colors group"
                  >
                    <Github size={18} className="text-muted-foreground group-hover:text-accent-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Our Location
            </h3>
            <p className="text-muted-foreground">
              123 Tech Street, Innovation Hub<br />
              San Francisco, CA 94102
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
