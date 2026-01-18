import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      lines: ["Level 1, 123 Swanston Street", "Melbourne VIC 3000", "Australia"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      lines: ["+61 3 9123 4567", "Mon-Sun: 10am - 10pm"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      lines: ["papparichgungahlin@gmail.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      lines: [
        "Monday - Thursday: 10am - 9pm",
        "Friday - Sunday: 10am - 10pm",
      ],
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Find Us
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Location & <span className="text-gold-gradient">Contact</span>
          </h2>
          <div
            className={`decorative-line mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div
            className={`relative rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.96316!3d-37.813628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sSwanston%20St%2C%20Melbourne%20VIC!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PappaRich Melbourne Location"
              className="absolute inset-0"
            />
            {/* Overlay for styling */}
            <div className="absolute inset-0 pointer-events-none border-4 border-card rounded-2xl" />
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`p-6 rounded-xl bg-card border border-border hover:border-gold hover:shadow-soft transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-olive-dark text-gold flex items-center justify-center">
                      {info.icon}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      {info.title}
                    </h3>
                  </div>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Additional Locations Note */}
            <div
              className={`mt-8 p-6 rounded-xl bg-secondary transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                15+ Locations Across Australia
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Find your nearest PappaRich restaurant in Melbourne, Sydney,
                Brisbane, Perth, and more.
              </p>
              <a
                href="#"
                className="text-gold hover:text-gold-light font-medium text-sm inline-flex items-center gap-2 transition-colors"
              >
                View All Locations
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
