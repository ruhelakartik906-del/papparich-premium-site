import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import papparichLogo from "@/assets/papparich-logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com/papparich", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/papparich", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/papparich", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-olive text-cream">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img
                src={papparichLogo}
                alt="PappaRich Malaysian Cuisine"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-cream/70 leading-relaxed mb-6 text-sm">
              Bringing authentic Malaysian kopitiam culture to Australia since
              2005. Experience the rich flavours and warmth of Malaysia.
            </p>

            {/* Follow Us */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-gold mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold hover:text-olive-dark flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-cream/70 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-cream/70 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#menu")}
                  className="text-cream/70 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-cream/70 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                >
                  Our Location
                </button>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-heading font-bold text-lg text-gold mb-4">
              Our Menu
            </h4>
            <ul className="space-y-3">
              {["Bread", "Dessert", "Dimsum", "Drinks", "Noodles", "Rice", "Western"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection("#menu")}
                    className="text-cream/70 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg text-gold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:papparichgungahlin@gmail.com" 
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  papparichgungahlin@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+61262412388" 
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  (02) 6241 2388
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Shop 33, Gungahlin Village<br />
                  46-50 Hibberson Street<br />
                  Gungahlin ACT 2912, Australia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-sm">
            © {currentYear} PappaRich Australia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-cream/60 hover:text-cream text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cream/60 hover:text-cream text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
