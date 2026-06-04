"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

export default function VideoSection() {
  const t = useTranslations("video");
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--brand-border), transparent)" }} />

      <div className="container-max flex flex-col items-center">
        {/* Header */}
        <div className="section-header w-full">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)}>{t("subheadline")}</motion.p>
        </div>

        {/* Video frame */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative w-full max-w-3xl mx-auto"
          style={{ alignSelf: "center" }}
        >
          {/* Soft glow ring */}
          <div
            className="absolute -inset-3 rounded-3xl blur-2xl opacity-25 pointer-events-none"
            style={{ background: "linear-gradient(135deg, var(--brand), #3fc17a)" }}
          />

          <div
            className="relative rounded-2xl overflow-hidden aspect-video"
            style={{ background: "#0a0f0d", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          >
            {!playing ? (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                onClick={() => setPlaying(true)}
              >
                {/* Bg gradient */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, #0d2016, #1a3d26, #0d2016)" }} />

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none" style={{ opacity: 0.04 }}>
                  <span className="font-black text-white" style={{ fontSize: "clamp(6rem, 18vw, 14rem)", letterSpacing: "-0.05em" }}>AV</span>
                </div>

                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 flex flex-col items-center gap-4"
                >
                  <motion.div
                    animate={{ boxShadow: ["0 0 0 0 rgba(63,193,122,0.4)", "0 0 0 22px rgba(63,193,122,0)", "0 0 0 0 rgba(63,193,122,0)"] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--brand), #3fc17a)" }}
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-0.5" />
                  </motion.div>
                  <span
                    className="text-sm font-semibold px-4 py-1.5 rounded-full"
                    style={{ background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
                  >
                    {t("play")}
                  </span>
                </motion.div>

                {/* Corner info */}
                <div className="absolute bottom-4 left-5 text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>AVCARE — Démo 2025</div>
                <div className="absolute bottom-4 right-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>2:47</div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "#0a0f0d" }}>
                <p className="text-4xl mb-3">🎬</p>
                <p className="text-base font-semibold text-white mb-1">Vidéo à venir</p>
                <p className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Remplacez ceci par votre lien YouTube</p>
                <button
                  onClick={() => setPlaying(false)}
                  className="btn-primary text-sm"
                >
                  ← Retour
                </button>
              </div>
            )}
          </div>

          <p className="text-center text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            📹 Vidéo promotionnelle AvCare — Disponible prochainement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
