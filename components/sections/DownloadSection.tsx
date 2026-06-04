"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download, Smartphone } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

export default function DownloadSection() {
  const t = useTranslations("download");

  return (
    <section className="section-padding relative overflow-hidden" id="download">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#061810]" />

      {/* Vibrant Animated Gradients (Aurora Effect) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-400/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-max relative z-10 flex flex-col items-center text-center">
        {/* Header */}
        <div className="section-header w-full max-w-2xl mx-auto flex flex-col items-center">
          <motion.span {...fadeUp(0)}>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Smartphone className="w-4 h-4 text-brand-300" />
              {t("badge")}
            </span>
          </motion.span>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-white mt-8 mb-6 drop-shadow-lg"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {t("headline")}
          </motion.h2>

          <motion.p {...fadeUp(0.2)} className="text-lg" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px" }}>
            {t("subheadline")}
          </motion.p>
        </div>

        {/* Download buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col md:flex-row gap-6 justify-center items-center mt-16 mb-10 w-full"
        >
          {/* APK — primary */}
          <a
            href="/app-release.apk"
            download
            className="btn relative group overflow-hidden"
            style={{ 
              background: "#ffffff", 
              color: "var(--brand)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2), 0 0 40px rgba(63, 193, 122, 0.3)",
              padding: "0.875rem 2rem",
              fontSize: "1.05rem"
            }}
          >
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-center gap-2">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              {t("apk")}
            </div>
          </a>

          {/* Google Play — coming soon */}
          <StoreButton icon="playstore" storeName={t("playstore")} status={t("playstore_sub")} />

          {/* App Store — coming soon */}
          <StoreButton icon="appstore" storeName={t("appstore")} status={t("appstore_sub")} />
        </motion.div>

        <motion.p {...fadeUp(0.4)} className="text-center text-sm font-medium tracking-wide mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          {t("note")}
        </motion.p>
      </div>
    </section>
  );
}

function StoreButton({ icon, storeName, status }: { icon: "playstore" | "appstore"; storeName: string; status: string }) {
  return (
    <div
      className="btn relative group overflow-hidden cursor-not-allowed"
      style={{
        background: "rgba(255,255,255,0.06)",
        color: "#ffffff",
        border: "1.5px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        padding: "0.875rem 2rem",
        fontSize: "1.05rem"
      }}
    >
      {/* Content */}
      <div className="flex items-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
        {icon === "playstore" ? (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M3.18 23.18a2 2 0 0 0 2.09-.08l11.16-6.47-2.89-2.88-10.36 9.43zM.91 1.45A2 2 0 0 0 0 3v18a2 2 0 0 0 .91 1.55L12 13 .91 1.45zM22.19 10.5l-2.7-1.57L16.31 12l3.18 3.07 2.72-1.58a2 2 0 0 0 0-3zM5.27.9L16.43 7.36 13.54 10.25 3.18.82A2 2 0 0 1 5.27.9z"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        )}
        {storeName}
      </div>

      {/* Hover Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#3fc17a]">
          {status}
        </span>
      </div>
    </div>
  );
}
