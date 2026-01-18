import { useEffect, useRef, useState } from "react";
import nasiKunyit from "@/assets/nasi-kunyit.jpg";
import aisKacang from "@/assets/ais-kacang.jpg";
import nasiGorengAyam from "@/assets/nasi-goreng-ayam.jpg";
import meeGoreng from "@/assets/mee-goreng.jpg";
import deliveryUbereats from "@/assets/delivery-ubereats.jpg";
import foodSpread from "@/assets/food-spread.jpg";

interface DishCard {
  name: string;
  description: string;
  image: string;
  category: string;
}

const dishes: DishCard[] = [
  {
    name: "Nasi Kunyit",
    description:
      "Fragrant turmeric yellow rice with sambal, anchovies, vegetables, and traditional Malaysian sides",
    image: nasiKunyit,
    category: "Signature",
  },
  {
    name: "Nasi Goreng Ayam",
    description:
      "Malaysian fried rice with crispy fried chicken, sunny-side egg, papadum, and sambal",
    image: nasiGorengAyam,
    category: "Rice",
  },
  {
    name: "Mee Goreng Mamak",
    description:
      "Wok-fried yellow noodles with prawns, chilli, onions, and traditional spices",
    image: meeGoreng,
    category: "Noodles",
  },
  {
    name: "Ais Kacang (ABC)",
    description:
      "Shaved ice dessert with red beans, grass jelly, sweet corn, peanuts, and rose syrup",
    image: aisKacang,
    category: "Desserts",
  },
  {
    name: "Nasi Lemak Set",
    description:
      "Classic coconut rice with rendang chicken, egg, anchovies, peanuts, and sambal - delivered fresh",
    image: deliveryUbereats,
    category: "Delivery",
  },
  {
    name: "PappaRich Feast",
    description:
      "A spread of our best dishes - Curry Laksa, Nasi Lemak, Roti Canai, Hainanese Chicken, and more",
    image: foodSpread,
    category: "Sharing",
  },
];

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
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
            Our Specialties
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Featured <span className="text-gold-gradient">Dishes</span>
          </h2>
          <div
            className={`decorative-line mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Discover our most beloved Malaysian classics, prepared with
            authentic recipes and the finest ingredients
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className={`menu-card group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-olive-dark/90 backdrop-blur-sm text-cream px-3 py-1 rounded-full text-xs font-medium">
                  {dish.category}
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 btn-primary"
          >
            View Full Menu & Order
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
