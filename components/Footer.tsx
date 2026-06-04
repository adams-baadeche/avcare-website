"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const FbIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const IgIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LiIcon  = (p: any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

export default function Footer() {
  const t  = useTranslations("footer");
  const tn = useTranslations("nav");

  const navLinks = [
    { label: tn("features"),  href: "#features"  },
    { label: tn("preview"),   href: "#preview"   },
    { label: tn("benefits"),  href: "#benefits"  },
    { label: tn("partners"),  href: "#partners"  },
    { label: tn("team"),      href: "#team"      },
    { label: tn("faq"),       href: "#faq"       },
    { label: tn("contact"),   href: "#contact"   },
  ];

  const legalLinks = [
    { label: t("privacy"), href: "#" },
    { label: t("terms"),   href: "#" },
  ];

  const socials = [
    { Icon: FbIcon, label: "Facebook" },
    { Icon: TwIcon, label: "Twitter" },
    { Icon: IgIcon, label: "Instagram" },
    { Icon: LiIcon, label: "LinkedIn" },
  ];

  return (
    <footer style={{ background: "#0a0f0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* ── Main content ── */}
      <div className="container-max" style={{ paddingBlock: "clamp(3.5rem,6vw,5rem)" }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand column — spans 2 on sm so it gets its own row */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-white/10">
                <Image
                  src="/avcare-logo.png"
                  alt="AvCare"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-extrabold text-lg tracking-tight" style={{ color: "#3fc17a" }}>
                AvCare
              </p>
            </a>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.38)", maxWidth: "300px" }}
            >
              {t("tagline")}
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center rounded-xl transition-all duration-200"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(63,193,122,0.15)";
                    el.style.color = "#3fc17a";
                    el.style.borderColor = "rgba(63,193,122,0.3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.color = "rgba(255,255,255,0.45)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {t("links_title")}
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#3fc17a")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {t("legal_title")}
            </h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#3fc17a")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact email in legal col */}
            <div className="mt-2 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <a
                href="mailto:avcareapp@gmail.com"
                className="text-sm transition-colors duration-150 break-all"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#3fc17a")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
              >
                avcareapp@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="container-max flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ paddingBlock: "1.25rem" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            {t("copyright")}
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            {t("made_with")}
          </p>
        </div>
      </div>

    </footer>
  );
}
