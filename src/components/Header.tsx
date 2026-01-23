import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import papparichLogo from "@/assets/papparich-logo-green.jpg";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#3d9970] shadow-elevated"
          : "bg-[#3d9970]"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-[#3d9970] backdrop-blur-md transition-all duration-300 overflow-hidden shadow-elevated ${
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
  );
};

export default Header;
