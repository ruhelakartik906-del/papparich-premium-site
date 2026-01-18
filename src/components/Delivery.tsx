import { useEffect, useRef, useState } from "react";
import { Phone, MapPin } from "lucide-react";

const Delivery = () => {
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
      id="order"
      ref={sectionRef}
      className="section-padding bg-gradient-olive relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Header */}
          <span
            className={`inline-block text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Order Now
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cream mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Dine In, Takeaway <span className="text-gold-gradient">& Delivery</span>
          </h2>
          <p
            className={`text-cream/80 text-lg mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Experience authentic Malaysian cuisine at PappaRich Gungahlin.
            Visit us in-store for dine-in, or call ahead for takeaway orders.
          </p>

          {/* Order Options */}
          <div
            className={`grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Dine In Card */}
            <div className="group bg-cream/10 hover:bg-cream/15 backdrop-blur-sm rounded-2xl p-8 
              border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6
                group-hover:bg-gold/30 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-cream mb-3">Dine In</h3>
              <p className="text-cream/70 mb-4">
                Visit our restaurant for a delightful Malaysian dining experience
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gold hover:text-gold-light font-semibold transition-colors inline-flex items-center gap-2"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Takeaway Card */}
            <div className="group bg-cream/10 hover:bg-cream/15 backdrop-blur-sm rounded-2xl p-8 
              border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6
                group-hover:bg-gold/30 transition-colors duration-300">
                <Phone className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-cream mb-3">Takeaway</h3>
              <p className="text-cream/70 mb-4">
                Call ahead to place your order for quick and easy pickup
              </p>
              <a
                href="tel:+61262412388"
                className="text-gold hover:text-gold-light font-semibold transition-colors inline-flex items-center gap-2"
              >
                Call to Order
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main CTA Button */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 btn-gold text-lg px-12 py-5 shadow-gold 
                relative overflow-hidden"
            >
              <span className="relative z-10">🍜 Visit Us Today</span>
              {/* Button Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;