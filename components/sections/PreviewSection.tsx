"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slideImages = [
  { src: "/splash first download.jpg", emoji: "✨", color: "rgba(16, 185, 129, 0.5)" },
  { src: "/home page after login.jpg", emoji: "🏠", color: "rgba(59, 130, 246, 0.5)" },
  { src: "/avcare-AI ASSISNTANT.jpg", emoji: "🤖", color: "rgba(139, 92, 246, 0.5)" },
  { src: "/avcare-health.jpg", emoji: "📊", color: "rgba(245, 158, 11, 0.5)" },
  { src: "/avcare-test.jpg", emoji: "🧠", color: "rgba(236, 72, 153, 0.5)" },
  { src: "/stroke prevention.jpg", emoji: "🛡️", color: "rgba(14, 165, 233, 0.5)" },
  { src: "/emergency call.jpg", emoji: "🆘", color: "rgba(239, 68, 68, 0.5)" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

export default function PreviewSection() {
  const t = useTranslations("preview");
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = ((page % slideImages.length) + slideImages.length) % slideImages.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentSlide = slideImages[slideIndex];

  const slideLabels = [
    t("slide1"), t("slide2"), t("slide3"), t("slide4"), t("slide5"), t("slide6"), t("slide7")
  ];

  return (
    <section className="section-padding bg-gray-950 relative overflow-hidden" id="preview">
      {/* Dynamic Background Glow */}
      <motion.div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{ 
          background: `radial-gradient(circle at 50% 50%, ${currentSlide.color}, transparent 60%)` 
        }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-brand mb-4 inline-block"
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            {t("headline")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {t("subheadline")}
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6 md:gap-16 w-full justify-center">
            {/* Prev Button */}
            <button
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-20 backdrop-blur-md hidden md:flex"
            >
              <ChevronLeft className="w-7 h-7 -ml-1" />
            </button>

            {/* Phone Container */}
            <div className="relative">
              {/* Device Shadow Glow */}
              <motion.div 
                className="absolute -inset-6 blur-[50px] opacity-60 rounded-full transition-colors duration-1000 z-0"
                style={{ background: currentSlide.color }}
              />

              <div 
                className="phone-frame w-64 md:w-72 lg:w-[320px] bg-black relative z-10 flex flex-col justify-between"
                style={{ 
                  padding: "8px", 
                  aspectRatio: "9/19.5", 
                  borderRadius: "3rem",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30 flex items-center justify-center">
                   <div className="w-12 h-1.5 bg-gray-900 rounded-full"></div>
                </div>

                {/* Screen Mask */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-gray-900" style={{ maskImage: "radial-gradient(white, black)" }}>
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={page}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.3 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                          paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          paginate(-1);
                        }
                      }}
                      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
                      <Image 
                        src={currentSlide.src}
                        alt={`App screen ${slideIndex + 1}`}
                        fill
                        className="object-cover pointer-events-none"
                        priority={slideIndex === 0 || slideIndex === 1}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 z-20 backdrop-blur-md hidden md:flex"
            >
              <ChevronRight className="w-7 h-7 ml-1" />
            </button>
          </div>

          {/* Dots + Labels */}
          <div className="flex flex-col items-center gap-6 mt-12 z-20">
            {/* Label */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={slideIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-white font-semibold text-lg md:text-xl flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <span className="text-2xl">{currentSlide.emoji}</span> 
                <span>{slideLabels[slideIndex]}</span>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-3">
              {slideImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const dir = i > slideIndex ? 1 : -1;
                    setPage([page + (i - slideIndex), dir]);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === slideIndex ? "bg-white w-12" : "bg-white/20 w-2.5 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
