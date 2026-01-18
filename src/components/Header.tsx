import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import papparichLogo from "@/assets/papparich-logo-green.jpg";
import headerBanner from "@/assets/header-banner.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuCategories = [
    "Bread",
    "Dessert", 
    "Dimsum",
    "Drinks",
    "Noodles",
    "Rice",
    "Western"
  ];

  const locationItems = [
    { label: "Main Outlet", href: "#contact" },
    { label: "Other Outlets", href: "#other-outlets" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1f5c40]/98 backdrop-blur-md shadow-elevated"
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
            <ul className="hidden lg:flex items-center gap-8">
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

              {/* Our Location Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => handleDropdownEnter("location")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center gap-1 text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  Our Location
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "location" ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-elevated border border-border overflow-hidden transition-all duration-300 min-w-[160px] ${
                    openDropdown === "location" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {locationItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left px-4 py-3 text-olive-dark hover:bg-[#1f5c40] hover:text-white text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </li>

              {/* Our Menu Dropdown */}
              <li 
                className="relative"
                onMouseEnter={() => handleDropdownEnter("menu")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className="flex items-center gap-1 text-white hover:text-gold font-medium text-sm tracking-wide transition-all duration-300 relative group"
                >
                  Our Menu
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "menu" ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-elevated border border-border overflow-hidden transition-all duration-300 min-w-[140px] ${
                    openDropdown === "menu" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {menuCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => scrollToSection("#menu")}
                      className="block w-full text-left px-4 py-3 text-olive-dark hover:bg-[#1f5c40] hover:text-white text-sm transition-colors duration-300"
                    >
                      {category}
                    </button>
                  ))}
                </div>
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
              className="lg:hidden text-white p-2 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#1f5c40]/98 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-elevated ${
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
            
            {/* Mobile Location Submenu */}
            <li>
              <button
                onClick={() => setOpenDropdown(openDropdown === "mobile-location" ? null : "mobile-location")}
                className="flex items-center justify-between w-full text-white hover:text-gold transition-colors font-medium text-base py-2"
              >
                Our Location
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "mobile-location" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === "mobile-location" ? "max-h-40" : "max-h-0"}`}>
                {locationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left pl-4 py-2 text-white/80 hover:text-gold text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </li>

            {/* Mobile Menu Submenu */}
            <li>
              <button
                onClick={() => setOpenDropdown(openDropdown === "mobile-menu" ? null : "mobile-menu")}
                className="flex items-center justify-between w-full text-white hover:text-gold transition-colors font-medium text-base py-2"
              >
                Our Menu
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "mobile-menu" ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === "mobile-menu" ? "max-h-80" : "max-h-0"}`}>
                {menuCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToSection("#menu")}
                    className="block w-full text-left pl-4 py-2 text-white/80 hover:text-gold text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
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
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
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
