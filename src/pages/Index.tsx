import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TechStack from "@/components/sections/TechStack";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TechStack />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
