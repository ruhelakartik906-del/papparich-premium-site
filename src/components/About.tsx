import { useEffect, useRef, useState } from "react";
import restaurantStaff from "@/assets/restaurant-staff.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -skew-x-12 translate-x-1/4" />
      
      {/* Floating Stickers */}
      <div className="absolute top-16 right-20 hidden lg:block animate-pulse">
        <div className="bg-gold text-olive-dark px-4 py-2 rounded-full font-bold text-sm shadow-xl transform rotate-12">
          🏆 Award Winning
        </div>
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block animate-bounce" style={{ animationDelay: "0.3s" }}>
        <div className="bg-[#1f5c40] text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl transform -rotate-6 border-2 border-gold">
          ❤️ Family Recipe
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated img-zoom">
                <img
                  src={restaurantStaff}
                  alt="PappaRich friendly staff at our restaurant"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-olive-dark text-cream px-6 py-4 rounded-xl shadow-elevated">
                <p className="text-gold font-heading font-bold text-3xl">19</p>
                <p className="text-sm font-medium">Years of Tradition</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="inline-block text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-olive-dark mb-6 leading-tight">
              A Taste of Malaysia,{" "}
              <span className="text-gold-gradient">Right Here in Australia</span>
            </h2>

            <div className="decorative-line mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since 2005, PappaRich has been bringing the authentic flavours of
              Malaysian "kopitiam" culture to Australian shores. Our journey
              began with a simple mission: to share the rich culinary heritage
              of Malaysia with food lovers across the country.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every dish is crafted using traditional recipes passed down
              through generations, with premium ingredients sourced both locally
              and from Malaysia. From our signature Nasi Lemak to our aromatic
              Teh Tarik, each plate tells a story of cultural authenticity and
              culinary passion.
            </p>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "🍃", text: "Fresh Ingredients" },
                { icon: "👨‍🍳", text: "Expert Chefs" },
                { icon: "🏆", text: "Award Winning" },
                { icon: "💚", text: "Halal Certified" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
