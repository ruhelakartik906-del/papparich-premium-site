import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Order", href: "#order" },
    { label: "Contact", href: "#contact" },
  ];

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
          ? "bg-olive-dark/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-5"
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
          className="flex items-center gap-2"
        >
          <span className="text-2xl md:text-3xl font-heading font-bold text-cream">
            Pappa<span className="text-gold">Rich</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="nav-link font-medium text-base"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("#order")}
              className="btn-primary text-sm px-6 py-2.5"
            >
              Order Now
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-cream p-2 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-olive-dark/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-custom py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-cream hover:text-gold transition-colors font-medium text-lg w-full text-left py-2"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
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
