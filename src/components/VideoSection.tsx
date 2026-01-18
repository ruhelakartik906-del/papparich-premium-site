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
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1f5c40] mb-2">
            Experience <span className="text-gold">PappaRich</span>
          </h2>
          <p className="text-sm text-olive-dark/70 max-w-xl mx-auto">
            Authentic Malaysian cuisine crafted with passion
          </p>
        </div>

        {/* Video Container - Compact */}
        <div className="relative max-w-2xl mx-auto">
          {/* Premium Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1f5c40] via-gold to-[#1f5c40] rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Video Wrapper */}
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                autoPlay
                loop
                playsInline
                className="w-full h-auto aspect-video object-cover"
              >
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Compact Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="bg-white/25 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="bg-white/25 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Subtle Corner Accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-gold/60 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-gold/60 rounded-tr-lg" />
            </div>
          </div>

          {/* Compact Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1f5c40] to-[#2a7d55] text-white px-5 py-2 rounded-full shadow-lg border border-gold/40">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">🍜</span>
              <p className="font-semibold text-xs">Authentic Malaysian Flavors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
