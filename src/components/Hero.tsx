import { useState, useEffect } from "react";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.jpg";

const bannerImages = [banner1, banner2];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Banner Slider */}
      <div className="absolute inset-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`PappaRich Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/70 via-olive-dark/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-cream/50 hover:bg-cream/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cream/20 hover:bg-cream/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerImages.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-cream/20 hover:bg-cream/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

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

          {/* Empty space where the old image was - keeping layout intact */}
          <div className="hidden lg:block" />
        </div>
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
