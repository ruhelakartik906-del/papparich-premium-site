import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best Malaysian food in Canberra! The Nasi Lemak is absolutely authentic and delicious. Staff are always friendly and welcoming.",
    date: "2 weeks ago"
  },
  {
    name: "James L.",
    rating: 5,
    text: "Amazing Char Koay Teow! Reminds me of the street food in Penang. Will definitely be coming back for more!",
    date: "1 month ago"
  },
  {
    name: "Michelle K.",
    rating: 5,
    text: "Perfect Teh Tarik and Roti Canai. The flavors are so authentic, it's like being transported to Malaysia!",
    date: "3 weeks ago"
  },
  {
    name: "David W.",
    rating: 5,
    text: "Family loved the PappaRich Feast! Great portions, excellent quality, and very reasonable prices. Highly recommend!",
    date: "1 week ago"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const Testimonials = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-cream/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#3d9970] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#3d9970] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#3d9970] mb-3">
            What Our <span className="text-[#c9a227]">Customers</span> Say
          </h2>
          <p className="text-sm md:text-base text-olive-dark/70 max-w-lg mx-auto">
            Real reviews from our valued guests
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white rounded-2xl p-6 shadow-lg border border-[#3d9970]/10 group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#3d9970] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#c9a227] text-[#c9a227]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-olive-dark/80 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[#3d9970]/10">
                <div>
                  <p className="font-semibold text-[#3d9970] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-olive-dark/50">{testimonial.date}</p>
                </div>
                <div className="w-8 h-8 bg-[#3d9970]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#3d9970] font-bold text-xs">{testimonial.name[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leave Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/PappaRich+Gungahlin/@-35.1861,149.1332,17z/data=!4m8!3m7!1s0x6b164d2a5b8d6f1d:0x5c8f6d8d8d8d8d8d!8m2!3d-35.1861!4d149.1332!9m1!1b1!16s%2Fg%2F11c5p7q4y8?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3d9970] hover:bg-[#2d7555] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Star className="w-4 h-4" />
            Leave a Review
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
