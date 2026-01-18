import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

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
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      lines: ["papparichgungahlin@gmail.com"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      lines: ["(02) 6241 2388"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      lines: [
        "Shop 33, Gungahlin Village",
        "46-50 Hibberson Street",
        "Gungahlin ACT 2912, Australia"
      ],
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            PappaRich Gungahlin
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
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div
            className={`relative rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px] transition-all duration-700 delay-200 
              shadow-elevated border-2 border-border hover:border-accent ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.6897!2d149.1332!3d-35.1847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d8b5f8a4f0b%3A0x2c3e5b4c6d7e8f9a!2sGungahlin%20Village!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PappaRich Gungahlin Location"
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
                  className={`group p-6 rounded-xl bg-card border border-border 
                    hover:border-accent hover:shadow-elevated hover:-translate-y-1
                    transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-olive-dark text-gold flex items-center justify-center
                      group-hover:bg-accent group-hover:text-olive-dark transition-colors duration-300">
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

            {/* Call to Action */}
            <div
              className={`mt-8 p-8 rounded-2xl bg-gradient-olive text-cream transition-all duration-700 delay-700 
                border border-gold/20 hover:border-gold/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="font-heading font-bold text-2xl text-cream mb-3">
                Visit PappaRich Gungahlin
              </h4>
              <p className="text-cream/80 text-sm mb-6">
                Experience authentic Malaysian cuisine in a warm and welcoming atmosphere. 
                We look forward to serving you!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shop+33+Gungahlin+Village+46-50+Hibberson+Street+Gungahlin+ACT+2912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg
                    hover:shadow-gold hover:scale-[1.02] transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="tel:+61262412388"
                  className="inline-flex items-center gap-2 bg-cream/10 text-cream font-semibold px-6 py-3 rounded-lg
                    border border-cream/20 hover:bg-cream/20 hover:border-cream/40 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;