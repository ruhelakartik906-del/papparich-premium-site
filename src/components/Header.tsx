import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import papparichLogo from "@/assets/papparich-logo-green.jpg";
import headerBanner from "@/assets/header-banner.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1f5c40] shadow-elevated"
            : "bg-[#1f5c40]"
        }`}
      >
        <nav className="container-custom">
          {/* Main Nav Row */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center"
            >
              <img
                src={papparichLogo}
                alt="PappaRich Malaysian Cuisine"
                className="h-14 md:h-16 w-auto rounded-md"
              />
            </a>

            {/* Desktop Navigation - Next to Logo */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-8">
              {/* Home */}
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>

              {/* About Us */}
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>

              {/* Our Location - Simple Link */}
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  Our Location
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>

              {/* Our Menu - Simple Link */}
              <li>
                <button
                  onClick={() => scrollToSection("#menu")}
                  className="text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  Our Menu
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>

              {/* Contact Us */}
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("#order")}
                  className="bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Order Now
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#1f5c40]/98 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-elevated ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="container-custom py-6 flex flex-col gap-2">
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#about")}
                className="text-white hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
              >
                About Us
              </button>
            </li>
            
            {/* Mobile Location - Simple Link */}
            <li>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-white hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
              >
                Our Location
              </button>
            </li>

            {/* Mobile Menu - Simple Link */}
            <li>
              <button
                onClick={() => scrollToSection("#menu")}
                className="text-white hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
              >
                Our Menu
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-white hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
              >
                Contact Us
              </button>
            </li>
            <li className="pt-4">
              <button
                onClick={() => scrollToSection("#order")}
                className="bg-gold hover:bg-gold-dark text-white font-semibold w-full text-center py-3 rounded-full transition-all duration-300"
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Banner with Food Image */}
      <div className="relative w-full h-[400px] md:h-[500px] mt-[76px] md:mt-[88px] overflow-hidden">
        <img 
          src={headerBanner} 
          alt="Delicious Malaysian Cuisine" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f5c40]/40 via-transparent to-[#1f5c40]/60"></div>
        
        {/* Floating Stickers/Decorations */}
        <div className="absolute top-8 left-8 md:left-16 animate-bounce">
          <div className="bg-gold text-olive-dark px-4 py-2 rounded-full font-bold text-sm shadow-xl transform -rotate-12">
            🔥 Hot & Fresh!
          </div>
        </div>
        <div className="absolute top-20 right-8 md:right-20 animate-pulse">
          <div className="bg-white text-[#1f5c40] px-4 py-2 rounded-full font-bold text-sm shadow-xl transform rotate-12">
            ⭐ 4.8 Rating
          </div>
        </div>
        <div className="absolute bottom-32 left-8 md:left-20 hidden md:block animate-bounce" style={{ animationDelay: "0.5s" }}>
          <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl transform rotate-6">
            🌶️ Spicy Favorites
          </div>
        </div>
        <div className="absolute bottom-40 right-8 md:right-16 hidden md:block animate-pulse" style={{ animationDelay: "0.3s" }}>
          <div className="bg-[#1f5c40] text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl border-2 border-gold transform -rotate-6">
            🍜 100% Halal
          </div>
        </div>
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="bg-gold/90 text-olive-dark px-6 py-2 rounded-full font-semibold text-sm mb-4 animate-pulse shadow-xl">
            ✨ Authentic Malaysian Taste ✨
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4">
            Authentic Malaysian Cuisine
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-lg mb-8">
            Experience the rich flavors of Malaysia at PappaRich Gungahlin
          </p>
          <button
            onClick={() => scrollToSection("#menu")}
            className="bg-gold hover:bg-gold-dark text-white font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Explore Our Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
