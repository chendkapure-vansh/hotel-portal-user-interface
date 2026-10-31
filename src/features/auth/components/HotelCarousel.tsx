import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HOTEL_INFO } from "@/constants"

// High-resolution photos of luxury hotel rooms
const CAROUSEL_SLIDES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    title: "Presidential Royal Suite",
    caption: "Panoramic views and personalized butler service",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    title: "Executive Deluxe Room",
    caption: "Modern comfort tailored for memorable getaways",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    title: "Oceanfront Garden Villa",
    caption: "Direct tropical access and private plunge pool",
  },
]

/**
 * Right-side image carousel for the auth pages with slow crossfade effect
 */
export function HotelCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0)

  // Automatically switch slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentSlide = CAROUSEL_SLIDES[currentSlideIndex]

  return (
    <div className="relative w-full h-full min-h-[550px] lg:min-h-[640px] rounded-r-3xl overflow-hidden bg-slate-900 select-none">
      {/* Background Images with crossfade animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSlide.url})` }}
        >
          {/* Subtle dark gradient overlay to ensure header and captions are crisp */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Top Header Navigation Overlay matching style reference */}
      <div className="relative z-10 flex items-center justify-between p-8 text-white">
        <div className="flex items-center gap-6 text-xs font-semibold tracking-wider">
          <span className="cursor-pointer border-b-2 border-[#C0E72B] pb-1 text-[#C0E72B]">
            Portal
          </span>
          <span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            Suites
          </span>
          <span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            Amenities
          </span>
          <span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            About
          </span>
        </div>

        {/* Brand mark */}
        <div className="text-right">
          <div className="text-xl font-extrabold tracking-tight text-[#C0E72B] drop-shadow-sm">
            {HOTEL_INFO.name}
          </div>
          <div className="text-[10px] tracking-widest uppercase opacity-80 font-medium">
            Resort & Suites
          </div>
        </div>
      </div>

      {/* Bottom slide info & pagination dots */}
      <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between text-white">
        <div>
          <h3 className="text-lg font-bold drop-shadow-md">{currentSlide.title}</h3>
          <p className="text-xs text-slate-200/90 drop-shadow-sm max-w-xs">
            {currentSlide.caption}
          </p>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center gap-2">
          {CAROUSEL_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 transition-all rounded-full ${
                index === currentSlideIndex
                  ? "w-7 bg-[#C0E72B]"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
