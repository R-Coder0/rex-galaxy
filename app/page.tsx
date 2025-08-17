import CaseStudiesSection from "@/section/CaseStudies";
import CTASection from "@/section/Cta";
import HeroSection from "@/section/hero";
import IndustriesSection from "@/section/Industries";
import ServicesSection from "@/section/Services";
import TechStackSection from "@/section/TechStack";
import WhyChooseUs from "@/section/WhychooseUs";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <IndustriesSection />
      <TechStackSection />
      <CTASection />
      <CaseStudiesSection />
    </main>);
}
