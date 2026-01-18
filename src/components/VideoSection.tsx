import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-cream via-white to-cream overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1f5c40]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1f5c40]/5 to-transparent" />
      
      {/* Floating Decorations */}
      <div className="absolute top-16 left-8 hidden lg:block animate-pulse">
        <div className="bg-gold text-olive-dark px-4 py-2 rounded-full font-bold text-sm shadow-xl transform -rotate-12">
          🎬 Watch Our Story
        </div>
      </div>
      <div className="absolute bottom-20 right-10 hidden lg:block animate-bounce" style={{ animationDelay: "0.3s" }}>
        <div className="bg-[#1f5c40] text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl border-2 border-gold transform rotate-6">
          ✨ Experience PappaRich
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#1f5c40]/10 text-[#1f5c40] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🎥 Featured Video
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1f5c40] mb-4">
            A Taste of <span className="text-gold">Malaysia</span>
          </h2>
          <p className="text-lg text-olive-dark/70 max-w-2xl mx-auto">
            Discover the passion and artistry behind every dish at PappaRich
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Premium Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1f5c40] via-gold to-[#1f5c40] rounded-3xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            {/* Video Wrapper */}
            <div className="relative rounded-3xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto aspect-video object-cover"
              >
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Play/Pause & Mute Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-gold rounded-tl-xl opacity-80" />
              <div className="absolute top-4 right-4 w-12 h-12 border-r-4 border-t-4 border-gold rounded-tr-xl opacity-80" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-gold rounded-bl-xl opacity-80" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-gold rounded-br-xl opacity-80" />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1f5c40] to-[#2a7d55] text-white px-8 py-4 rounded-full shadow-2xl border-2 border-gold/50 animate-float">
            <div className="flex items-center gap-3">
              <span className="text-gold text-2xl">🍜</span>
              <div>
                <p className="font-bold text-sm">Authentic Malaysian Flavors</p>
                <p className="text-xs text-white/80">Since 2005</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Below Video */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#1f5c40]/10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1f5c40] to-[#2a7d55] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="font-bold text-[#1f5c40] mb-2">Expert Chefs</h3>
            <p className="text-sm text-olive-dark/70">Traditional recipes from skilled Malaysian chefs</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#1f5c40]/10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-bold text-[#1f5c40] mb-2">Fresh Ingredients</h3>
            <p className="text-sm text-olive-dark/70">Quality ingredients sourced daily</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#1f5c40]/10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1f5c40] to-[#2a7d55] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="font-bold text-[#1f5c40] mb-2">Made with Love</h3>
            <p className="text-sm text-olive-dark/70">Every dish crafted with passion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
