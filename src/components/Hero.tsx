import { useState, useEffect } from "react";
import heroBanner1 from "@/assets/hero-banner-1.png";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

const bannerImages = [heroBanner1, heroBanner2];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            zIndex: 0,
          }}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-olive-dark/60" />
        </div>
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div
              className="inline-block mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-gold font-medium text-sm md:text-base tracking-widest uppercase">
                Est. 2005 • Melbourne
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-cream leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Authentic Malaysian{" "}
              <span className="text-gold-gradient">Cuisine</span> in Australia
            </h1>

            <p
              className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Experience the rich flavours and cultural heritage of Malaysia.
              From aromatic Nasi Lemak to creamy Curry Laksa, every dish tells a
              story of tradition and passion.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => scrollToSection("#order")}
                className="btn-primary text-base"
              >
                Order Now
              </button>
              <button
                onClick={() => scrollToSection("#menu")}
                className="btn-outline text-base"
              >
                View Menu
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-cream/20 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold">
                  15+
                </p>
                <p className="text-cream/70 text-sm mt-1">Locations</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold">
                  100+
                </p>
                <p className="text-cream/70 text-sm mt-1">Menu Items</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold">
                  19yrs
                </p>
                <p className="text-cream/70 text-sm mt-1">Experience</p>
              </div>
            </div>
          </div>

          {/* Empty space to maintain layout balance */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-gold w-6"
                : "bg-cream/50 hover:bg-cream/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in z-10" style={{ animationDelay: "0.7s" }}>
        <button
          onClick={() => scrollToSection("#about")}
          className="text-cream/60 hover:text-cream transition-colors flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <div className="w-5 h-9 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
