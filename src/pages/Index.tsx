import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Delivery from "@/components/Delivery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Menu />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Delivery />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <WhyUs />
        </AnimatedSection>
        <Testimonials />
        <AnimatedSection delay={0.1}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
