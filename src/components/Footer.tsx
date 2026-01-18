import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import papparichLogo from "@/assets/papparich-logo-green.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", label: "YouTube" },
  ];

  const footerLinks = [
    {
      title: "Menu",
      links: [
        { label: "Signature Dishes", url: "#menu" },
        { label: "Noodles & Rice", url: "#menu" },
        { label: "Beverages", url: "#menu" },
        { label: "Desserts", url: "#menu" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Our Story", url: "#about" },
        { label: "Locations", url: "#contact" },
        { label: "Halal Certified", url: "#" },
        { label: "Franchise", url: "#" },
      ],
    },
    {
      title: "Order",
      links: [
        { label: "Order Online", url: "#order" },
        { label: "Uber Eats", url: "#" },
        { label: "DoorDash", url: "#" },
        { label: "Catering", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-olive text-cream">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img
                src={papparichLogo}
                alt="PappaRich Malaysian Cuisine"
                className="h-16 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-cream/70 leading-relaxed mb-6 max-w-sm">
              Bringing authentic Malaysian kopitiam culture to Australia since
              2005. Experience the rich flavours and warmth of Malaysia, right
              here at home.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gold hover:text-olive-dark flex items-center justify-center transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-heading font-bold text-lg text-gold mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-cream/70 hover:text-cream hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
