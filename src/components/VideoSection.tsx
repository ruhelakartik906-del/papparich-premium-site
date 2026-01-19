import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#3d9970] mb-3">
            Experience <span className="text-[#c9a227]">PappaRich</span>
          </h2>
          <p className="text-sm md:text-base text-olive-dark/70 max-w-lg mx-auto px-4">
            Watch our culinary journey — fresh ingredients, authentic recipes
          </p>
        </motion.div>

        {/* Video Gallery - Left | Center (Main) | Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto px-2"
        >
          {/* Left Video */}
          <div className="md:w-1/4 flex">
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3d9970] to-[#2d7555] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[3/4] h-full">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-semibold drop-shadow-lg">🍜 Our Kitchen</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Main Video */}
          <div className="md:w-2/4 flex">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3d9970] via-[#c9a227] to-[#3d9970] rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/5]">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <div className="bg-[#3d9970] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    🎬 Featured
                  </div>
                  <button
                    onClick={toggleMute}
                    className="bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="md:w-1/4 flex">
            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3d9970] to-[#2d7555] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[3/4] h-full">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-semibold drop-shadow-lg">🔥 Fresh & Hot</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <Play className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compact Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <div className="bg-gradient-to-r from-[#3d9970] to-[#4fb587] text-white px-5 py-2.5 rounded-full shadow-lg border border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-lg">🍜</span>
              <p className="font-semibold text-sm">Authentic Malaysian Flavors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
