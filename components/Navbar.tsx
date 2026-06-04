"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Globe, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LOCALES: Record<string, string> = { en: "EN", fr: "FR", ar: "AR" };
const LOCALE_LABELS: Record<string, string> = { en: "English", fr: "Français", ar: "العربية" };
const LOCALE_FLAGS: Record<string, string> = { en: "🇬🇧", fr: "🇫🇷", ar: "🇩🇿" };

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState("#");

  const switchLocale = (next: string) => {
    const segs = pathname.split("/").filter(Boolean);
    segs[0] = next;
    router.push("/" + segs.join("/"));
    setLangOpen(false);
  };

  // close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  const links = [
    { label: t("home"), href: "#" },
    { label: t("features"), href: "#features" },
    { label: t("preview"), href: "#preview" },
    { label: t("benefits"), href: "#benefits" },
    { label: t("faq"), href: "#faq" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100"
      style={{ boxShadow: "0 1px 16px rgba(0,0,0,0.05)" }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* ── Logo ── */}
          <a href="#" className="shrink-0 flex items-center">
            <Image
              src="/avcare-logo.png"
              alt="AvCare"
              width={130}
              height={40}
              className="h-9 md:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className="relative px-3 py-2 text-[15px] font-medium rounded-lg transition-colors"
                  style={{
                    color: isActive ? "var(--brand)" : "var(--text-secondary)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? "var(--brand)" : "var(--text-secondary)")}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 inset-x-3.5 h-0.5 rounded-full"
                      style={{ background: "var(--brand)" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-4">

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(v => !v); }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ color: langOpen ? "var(--brand)" : "var(--text-secondary)" }}
              >
                <Globe className="w-4 h-4" />
                <span>{LOCALES[locale]}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-2 p-1.5 bg-white rounded-2xl min-w-[170px] z-50 flex flex-col gap-0.5"
                    style={{ 
                      boxShadow: "0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.04)", 
                      border: "1px solid var(--border-subtle)" 
                    }}
                  >
                    {Object.keys(LOCALES).map(code => {
                      const isActive = locale === code;
                      return (
                        <button
                          key={code}
                          onClick={() => switchLocale(code)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group"
                          style={isActive ? {
                            background: "var(--brand-bg)",
                            color: "var(--brand)",
                            fontWeight: 600,
                          } : {
                            background: "transparent",
                            color: "var(--text-secondary)",
                            fontWeight: 500,
                          }}
                          onMouseEnter={e => {
                            if (!isActive) {
                              e.currentTarget.style.background = "var(--surface-3)";
                              e.currentTarget.style.color = "var(--text-primary)";
                            }
                          }}
                          onMouseLeave={e => {
                            if (!isActive) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "var(--text-secondary)";
                            }
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[18px] drop-shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                              {LOCALE_FLAGS[code]}
                            </span>
                            <span>{LOCALE_LABELS[code]}</span>
                          </div>
                          {isActive && (
                            <motion.div 
                              layoutId="active-lang-dot"
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "var(--brand)" }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <a
              href="#download"
              className="hidden md:inline-flex btn-primary text-sm"
            >
              <Download className="w-4 h-4" />
              {t("download")}
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <div className="container-max py-3 flex flex-col gap-0.5">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center mt-1"
                >
                  <Download className="w-4 h-4" />
                  {t("download")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
