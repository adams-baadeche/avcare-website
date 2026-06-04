"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.52, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.458l1.73 1.002a1 1 0 010 1.498l-1.73 1.002-2.43-2.251 2.43-2.251zm-12.427-7.57l10.937 6.333-2.302 2.302-8.635-8.635z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
    </svg>
  );
}

function DisabledStoreButton({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div style={{ cursor: "not-allowed", width: "100%" }}>
      <div
        role="button"
        aria-disabled="true"
        aria-label={`${label} — Coming Soon`}
        className="btn inline-flex items-center justify-center select-none"
        style={{
          width: "100%",
          minHeight: "52px",
          gap: "0.75rem",
          padding: "1.0625rem 2.25rem",
          fontSize: "1.0625rem",
          borderRadius: "var(--radius-lg)",
          border: "1.5px solid var(--brand-border)",
          background: "var(--brand-bg)",
          color: "var(--brand)",
          opacity: 0.65,
          pointerEvents: "none",
          fontWeight: 600,
        }}
      >
        {/* Icon — never shrinks */}
        <span className="shrink-0 flex items-center">{icon}</span>

        {/* Label — truncates before anything else breaks */}
        <span
          className="min-w-0 truncate"
          style={{ letterSpacing: "-0.01em" }}
        >
          {label}
        </span>

        {/* Badge — never shrinks, never wraps */}
        <span
          className="shrink-0"
          style={{
            fontSize: "0.575rem",
            fontWeight: 700,
            color: "#ef4444",
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
            padding: "0.175rem 0.45rem",
            borderRadius: "99px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          Coming soon
        </span>
      </div>
    </div>
  );
}

function DownloadArea({ className = "", label, version }: { className?: string; label: string; version: string }) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Primary CTA — full width */}
      <a
        href="/app-release.apk"
        download
        className="btn-primary"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          width: "100%",
          padding: "1.0625rem 2.25rem",
          fontSize: "1.0625rem",
          fontWeight: 700,
          borderRadius: "var(--radius-lg)",
          letterSpacing: "-0.012em",
          boxShadow: "0 8px 28px rgba(26,92,53,0.28), 0 2px 8px rgba(26,92,53,0.12)",
        }}
      >
        <Download className="w-5 h-5 shrink-0" />
        {label}
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            opacity: 0.85,
            background: "rgba(255,255,255,0.22)",
            padding: "0.15rem 0.5rem",
            borderRadius: "99px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {version}
        </span>
      </a>

      {/* Store buttons — stacked, full width, same size as Download Now */}
      <div className="flex flex-col gap-3">
        <DisabledStoreButton label="Google Play" icon={<GooglePlayIcon />} />
        <DisabledStoreButton label="App Store" icon={<AppleIcon />} />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "68px" }}
    >
      {/* Subtle radial background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 75% 55%, rgba(63,193,122,0.06) 0%, transparent 68%)",
        }}
      />

      <div className="container-max">
        {/* Two-column grid — stacks vertically on mobile (text first, then phone) */}
        <div
          className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center"
          style={{ paddingTop: "clamp(4rem, 8vw, 7rem)" }}
        >
          {/* ── LEFT: Headline + description ── */}
          <div className="flex flex-col items-start" style={{ maxWidth: "560px" }}>
            <motion.h1
              {...fadeUp(0)}
              className="heading-xl mb-6 gradient-text pb-1"
            >
              {t("headline")}
            </motion.h1>

            <motion.p
              {...fadeUp(0.1)}
              className="body-lg"
              style={{ maxWidth: "480px" }}
            >
              {t("subheadline")}
            </motion.p>

            {/* Desktop only: download area inside text column */}
            <motion.div {...fadeUp(0.2)} className="hidden lg:block mt-10 w-full">
              <DownloadArea label={t("cta_primary")} version={t("cta_version")} />
            </motion.div>
          </div>

          {/* ── RIGHT: Phone screenshot ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.25, 0.46, 0.45, 0.94] as any,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow blob */}
            <div
              className="absolute rounded-full blur-3xl pointer-events-none"
              style={{
                width: "140%",
                height: "140%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(63,193,122,0.12) 0%, rgba(26,92,53,0.04) 40%, transparent 70%)",
                zIndex: -1,
              }}
            />

            <div className="relative">
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
              >
                <div className="relative w-full max-w-[260px] md:max-w-[300px] mx-auto">
                  <Image
                    src="/avcare1.jpg"
                    alt="AvCare Application Preview"
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(26,92,53,0.3)] border-[6px] border-[#1a1a1a] object-cover ring-1 ring-white/20"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile only: download area appears after the phone screenshot */}
        <motion.div
          {...fadeUp(0.28)}
          className="lg:hidden flex justify-center"
          style={{
            paddingTop: "2.5rem",
            paddingBottom: "clamp(4rem, 8vw, 7rem)",
          }}
        >
          <DownloadArea className="w-full max-w-sm" label={t("cta_primary")} version={t("cta_version")} />
        </motion.div>

        {/* Desktop bottom whitespace — balances the top padding */}
        <div className="hidden lg:block" style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }} />
      </div>
    </section>
  );
}
