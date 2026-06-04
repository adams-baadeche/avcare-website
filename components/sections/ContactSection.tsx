"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Clock } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as any },
});

const FbIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const IgIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LiIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export default function ContactSection() {
  const t = useTranslations("contact");

  const cards = [
    {
      Icon: Mail,
      label: t("email_direct"),
      value: "avcareapp@gmail.com",
      href: "mailto:avcareapp@gmail.com",
      accent: "var(--brand)",
      bg: "var(--brand-bg)",
      border: "var(--brand-border)",
    },
    {
      Icon: Clock,
      label: t("hours_label"),
      value: t("hours_value"),
      href: null,
      accent: "#2563eb",
      bg: "#eff6ff",
      border: "#bfdbfe",
    },
    {
      Icon: MapPin,
      label: t("location_label"),
      value: t("address"),
      href: null,
      accent: "#d97706",
      bg: "#fffbeb",
      border: "#fde68a",
    },
  ];

  const socials = [
    { Icon: FbIcon, label: "Facebook" },
    { Icon: TwIcon, label: "Twitter / X" },
    { Icon: IgIcon, label: "Instagram" },
    { Icon: LiIcon, label: "LinkedIn" },
  ];

  return (
    <section className="section-padding" style={{ background: "var(--surface-2)" }} id="contact">
      <div className="container-max">

        {/* Section header */}
        <div className="section-header">
          <motion.span {...fadeUp(0)} className="badge">{t("badge")}</motion.span>
          <motion.h2 {...fadeUp(0.07)} className="heading-lg">{t("headline")}</motion.h2>
          <motion.p {...fadeUp(0.14)} className="body-lg" style={{ maxWidth: "460px" }}>
            {t("subheadline")}
          </motion.p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {cards.map(({ Icon, label, value, href, accent, bg, border }, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08 + 0.15)}
              className="bg-white rounded-2xl flex flex-col items-center text-center gap-5 card-hover"
              style={{
                border: "1px solid var(--border)",
                padding: "2.25rem 1.75rem",
              }}
            >
              <div
                className="flex items-center justify-center shrink-0 rounded-2xl"
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  background: bg,
                  border: `1px solid ${border}`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>

              <div className="flex flex-col gap-1">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="heading-md transition-opacity hover:opacity-70 break-all"
                    style={{ color: "var(--text-primary)", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className="heading-md"
                    style={{ color: "var(--text-primary)", fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
                  >
                    {value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-col items-center gap-5"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            {t("social_label")}
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="flex items-center justify-center rounded-xl transition-all duration-200"
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  background: "var(--brand-bg)",
                  color: "var(--brand)",
                  border: "1px solid var(--brand-border)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--brand)";
                  el.style.color = "#fff";
                  el.style.borderColor = "var(--brand)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--brand-bg)";
                  el.style.color = "var(--brand)";
                  el.style.borderColor = "var(--brand-border)";
                }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
