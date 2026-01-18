import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import papparichLogo from "@/assets/papparich-logo-green.jpg";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-elevated py-2"
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
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
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {/* Home */}
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-olive-dark hover:text-gold font-medium text-sm transition-colors duration-300"
            >
              Home
            </button>
          </li>

          {/* About Us */}
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="text-olive-dark hover:text-gold font-medium text-sm transition-colors duration-300"
            >
              About Us
            </button>
          </li>

          {/* Our Location Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleDropdownEnter("location")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="flex items-center gap-1 text-olive-dark hover:text-gold font-medium text-sm transition-colors duration-300"
            >
              Our Location
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "location" ? "rotate-180" : ""}`} />
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
                  className="block w-full text-left px-4 py-3 text-olive-dark hover:bg-olive-dark hover:text-cream text-sm transition-colors duration-300"
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
              className="flex items-center gap-1 text-olive-dark hover:text-gold font-medium text-sm transition-colors duration-300"
            >
              Our Menu
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "menu" ? "rotate-180" : ""}`} />
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
                  className="block w-full text-left px-4 py-3 text-olive-dark hover:bg-olive-dark hover:text-cream text-sm transition-colors duration-300"
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
              className="text-olive-dark hover:text-gold font-medium text-sm transition-colors duration-300"
            >
              Contact Us
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("#order")}
              className="btn-primary text-sm px-5 py-2"
            >
              Order Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-olive-dark p-2 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-elevated ${
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
              className="text-olive-dark hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="text-olive-dark hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
            >
              About Us
            </button>
          </li>
          
          {/* Mobile Location Submenu */}
          <li>
            <button
              onClick={() => setOpenDropdown(openDropdown === "mobile-location" ? null : "mobile-location")}
              className="flex items-center justify-between w-full text-olive-dark hover:text-gold transition-colors font-medium text-base py-2"
            >
              Our Location
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "mobile-location" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === "mobile-location" ? "max-h-40" : "max-h-0"}`}>
              {locationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left pl-4 py-2 text-olive-dark/80 hover:text-gold text-sm"
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
              className="flex items-center justify-between w-full text-olive-dark hover:text-gold transition-colors font-medium text-base py-2"
            >
              Our Menu
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "mobile-menu" ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === "mobile-menu" ? "max-h-80" : "max-h-0"}`}>
              {menuCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToSection("#menu")}
                  className="block w-full text-left pl-4 py-2 text-olive-dark/80 hover:text-gold text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-olive-dark hover:text-gold transition-colors font-medium text-base w-full text-left py-2"
            >
              Contact Us
            </button>
          </li>
          <li className="pt-4">
            <button
              onClick={() => scrollToSection("#order")}
              className="btn-primary w-full text-center"
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
