import { Play, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  { src: "/videos/video-1.mp4", label: "🍜 Our Kitchen" },
  { src: "/videos/video-2.mp4", label: "🎬 Featured" },
  { src: "/videos/video-3.mp4", label: "🔥 Fresh & Hot" },
  { src: "/videos/video-4.mp4", label: "🥘 Special Menu" },
  { src: "/videos/video-5.mp4", label: "👨‍🍳 Chef's Choice" },
  { src: "/videos/video-6.mp4", label: "🍛 Authentic Taste" },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (index: number) => {
    setActiveVideo(index);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeVideo !== null) {
        closeVideo();
      }
    };

    if (activeVideo !== null) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  // Autoplay video when modal opens
  useEffect(() => {
    if (activeVideo !== null && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
  }, [activeVideo]);

  const VideoCard = ({ video, index, isCenter = false }: { video: typeof videos[0]; index: number; isCenter?: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [posterUrl, setPosterUrl] = useState<string>("");

    useEffect(() => {
      const videoEl = videoRef.current;
      if (!videoEl) return;

      const generatePoster = () => {
        // Seek to 1.5 seconds to avoid black intro frames
        videoEl.currentTime = 1.5;
      };

      const capturePoster = () => {
        const canvas = document.createElement("canvas");
        canvas.width = videoEl.videoWidth;
        canvas.height = videoEl.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
          setPosterUrl(dataUrl);
        }
        // Reset to beginning after capturing
        videoEl.currentTime = 0;
      };

      videoEl.addEventListener("loadedmetadata", generatePoster);
      videoEl.addEventListener("seeked", capturePoster);

      return () => {
        videoEl.removeEventListener("loadedmetadata", generatePoster);
        videoEl.removeEventListener("seeked", capturePoster);
      };
    }, []);

    return (
      <div className="flex-1">
        <div 
          onClick={() => openVideo(index)}
          className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3d9970] to-[#2d7555] rounded-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
            {/* Poster image overlay */}
            {posterUrl && (
              <img 
                src={posterUrl} 
                alt={video.label}
                className="absolute inset-0 w-full h-full object-cover z-10 group-hover:opacity-0 transition-opacity duration-300"
              />
            )}
            {/* Video as thumbnail (muted, no autoplay) */}
            <video 
              ref={videoRef}
              muted 
              playsInline 
              loop
              preload="metadata"
              className="w-full h-full object-cover"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 z-20">
              <p className="text-white text-sm font-semibold drop-shadow-lg">{video.label}</p>
            </div>
            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="bg-white/25 backdrop-blur-md hover:bg-white/40 text-white p-4 rounded-full transition-all duration-300 group-hover:scale-110 border border-white/20 shadow-lg">
                <Play className="w-8 h-8" fill="white" />
              </div>
            </div>
            {isCenter && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#3d9970] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg z-20">
                🎬 Featured
              </div>
            )}
          </div>
        </div>
      </div>
    );
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

        {/* Video Gallery - First Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto px-2"
        >
          <VideoCard video={videos[0]} index={0} />
          <VideoCard video={videos[1]} index={1} isCenter />
          <VideoCard video={videos[2]} index={2} />
        </motion.div>

        {/* Second Row - 3 More Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row items-stretch gap-4 max-w-5xl mx-auto px-2 mt-4"
        >
          <VideoCard video={videos[3]} index={3} />
          <VideoCard video={videos[4]} index={4} />
          <VideoCard video={videos[5]} index={5} />
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

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeVideo}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                playsInline
                className="w-full rounded-xl shadow-2xl"
              >
                <source src={videos[activeVideo].src} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
