import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

interface DeliveryPartner {
  name: string;
  logo: string;
  url: string;
  color: string;
}

const partners: DeliveryPartner[] = [
  {
    name: "Uber Eats",
    logo: "🥡",
    url: "#",
    color: "from-green-500 to-green-600",
  },
  {
    name: "DoorDash",
    logo: "🚗",
    url: "#",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Hungry Panda",
    logo: "🐼",
    url: "#",
    color: "from-pink-500 to-pink-600",
  },
];

const Delivery = () => {
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

  return (
    <section
      id="order"
      ref={sectionRef}
      className="section-padding bg-gradient-olive relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Header */}
          <span
            className={`inline-block text-gold font-medium text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Delivery & Takeaway
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cream mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Order <span className="text-gold-gradient">Online</span>
          </h2>
          <p
            className={`text-cream/80 text-lg mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Get your favourite Malaysian dishes delivered straight to your door.
            Order through our delivery partners or pick up in-store.
          </p>

          {/* Main Order Button */}
          <div
            className={`mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <a
              href="#"
              className="inline-block btn-gold text-lg px-12 py-5 shadow-gold animate-pulse hover:animate-none"
            >
              🍜 Order Now
            </a>
          </div>

          {/* Delivery Partners */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-cream/60 text-sm uppercase tracking-widest mb-8">
              Available on
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {partners.map((partner, index) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  className={`group relative bg-cream/10 hover:bg-cream/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                >
                  <div className="text-5xl mb-3 animate-bounce group-hover:animate-none transition-all">
                    {partner.logo}
                  </div>
                  <p className="text-cream font-semibold text-lg">
                    {partner.name}
                  </p>
                  <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-cream/40 group-hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Promo Banner */}
          <div
            className={`mt-16 bg-gradient-gold rounded-2xl p-8 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-olive-dark font-heading font-bold text-2xl md:text-3xl">
                  Free Delivery on First Order!
                </p>
                <p className="text-olive-dark/80 mt-1">
                  Use code <span className="font-bold">PAPPARICH</span> at
                  checkout
                </p>
              </div>
              <a
                href="#"
                className="bg-olive-dark text-cream font-semibold px-8 py-4 rounded-lg hover:bg-olive-light transition-colors whitespace-nowrap"
              >
                Claim Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
