import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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

          {/* Hero Image */}
          <div
            className="relative opacity-0 animate-fade-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroFood}
                alt="Delicious Malaysian Nasi Lemak"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-olive-dark px-6 py-4 rounded-xl shadow-gold animate-float">
              <p className="font-heading font-bold text-xl">★ 4.8</p>
              <p className="text-sm font-medium opacity-80">2,500+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
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
