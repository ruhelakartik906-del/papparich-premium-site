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
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#3d9970] mb-3">
            Experience <span className="text-gold">PappaRich</span>
          </h2>
          <p className="text-sm md:text-base text-olive-dark/70 max-w-lg mx-auto px-4">
            Watch our culinary journey — fresh ingredients, authentic recipes
          </p>
        </div>

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto px-2">
          {/* Main Featured Video - Larger */}
          <div className="col-span-2 row-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3d9970] via-gold to-[#3d9970] rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden bg-black h-full min-h-[280px] md:min-h-[360px]">
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
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <div className="bg-gold/90 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
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

          {/* Video Tile 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gold to-[#3d9970] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold drop-shadow-lg">🍜 Our Kitchen</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Video Tile 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3d9970] to-gold rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold drop-shadow-lg">🔥 Fresh & Hot</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Video Tile 4 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gold via-[#3d9970] to-gold rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold drop-shadow-lg">🥘 Signature Dishes</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Video Tile 5 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3d9970] to-gold rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold drop-shadow-lg">👨‍🍳 Chef's Special</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Video Tile 6 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300 hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gold to-[#3d9970] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold drop-shadow-lg">🍵 Tea Culture</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Video Tile 7 - Only on larger screens */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300 hidden lg:block">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3d9970] via-gold to-[#3d9970] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/restaurant-promo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold drop-shadow-lg">🎉 Happy Customers</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Compact Badge */}
        <div className="flex justify-center mt-8">
          <div className="bg-gradient-to-r from-[#3d9970] to-[#4fb587] text-white px-5 py-2.5 rounded-full shadow-lg border border-gold/40">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">🍜</span>
              <p className="font-semibold text-sm">Authentic Malaysian Flavors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
