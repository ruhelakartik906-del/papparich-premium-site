import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.png";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

const bannerImages = [heroBanner1, heroBanner2];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image Slider */}
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
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-olive-dark/60" />
          </div>
        ))}
      </div>

      {/* Slider Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-cream/20 hover:bg-cream/40 backdrop-blur-sm text-cream p-2 md:p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-cream/20 hover:bg-cream/40 backdrop-blur-sm text-cream p-2 md:p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
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

          {/* Empty space for slider visibility on right side */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in z-10" style={{ animationDelay: "0.7s" }}>
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
