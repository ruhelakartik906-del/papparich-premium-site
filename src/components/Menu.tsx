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
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
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
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
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
              className={`group relative bg-card rounded-2xl overflow-hidden transition-all duration-700 
                border border-border hover:border-accent hover:shadow-elevated
                transform hover:-translate-y-3 hover:scale-[1.02] ${
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
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-olive-dark/90 backdrop-blur-sm text-cream px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                  transform transition-all duration-500 group-hover:bg-accent group-hover:text-olive-dark group-hover:scale-105">
                  {dish.category}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/90 via-olive-dark/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* View Button on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center 
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold 
                    shadow-gold transform hover:scale-105 transition-transform">
                    View Dish
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-card to-card/80">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 
                  group-hover:text-gold transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold-light to-accent 
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-3 btn-primary text-lg px-10 py-4 
              relative overflow-hidden"
          >
            <span className="relative z-10">View Full Menu & Order</span>
            <svg
              className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
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
            {/* Button Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;