import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

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
    <section className="relative py-10 md:py-14 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-[#1f5c40] mb-2">
            Experience <span className="text-gold">PappaRich</span>
          </h2>
          <p className="text-xs md:text-sm text-olive-dark/70 max-w-md mx-auto px-4">
            Authentic Malaysian cuisine crafted with passion
          </p>
        </div>

        {/* Video Grid - Multiple Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-2">
          {/* Main Video */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1f5c40] via-gold to-[#1f5c40] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-auto aspect-video object-cover"
                >
                  <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/35 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-105 border border-white/15"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/35 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-105 border border-white/15"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gold/50 rounded-tl-md" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gold/50 rounded-tr-md" />
              </div>
            </div>
          </div>

          {/* Secondary Video Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold to-[#1f5c40] rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden bg-black aspect-video md:aspect-square">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium">🍜 Our Kitchen</p>
                </div>
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1f5c40] to-gold rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden bg-black aspect-video md:aspect-square">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium">🔥 Fresh & Hot</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Badge */}
        <div className="flex justify-center mt-6">
          <div className="bg-gradient-to-r from-[#1f5c40] to-[#2a7d55] text-white px-4 py-2 rounded-full shadow-md border border-gold/30">
            <div className="flex items-center gap-2">
              <span className="text-gold text-base">🍜</span>
              <p className="font-semibold text-xs">Authentic Malaysian Flavors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
