import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

type Locale = "en" | "fr" | "ar";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "AVCARE — Your Stroke Recovery Companion",
    fr: "AVCARE — Votre Compagnon de Récupération AVC",
    ar: "رعايتي — رفيقك في التعافي من السكتة الدماغية",
  };

  const descriptions: Record<string, string> = {
    en: "AVCARE helps stroke patients recover faster with medication reminders, caregiver chat, health tests, and emergency alerts. Available in Algeria.",
    fr: "AVCARE aide les patients AVC à récupérer plus rapidement avec des rappels de médicaments, chat aidant, tests santé et alertes d'urgence. Disponible en Algérie.",
    ar: "رعايتي يساعد مرضى السكتة الدماغية على التعافي بشكل أسرع مع تذكيرات الدواء ومحادثة مقدم الرعاية واختبارات الصحة وتنبيهات الطوارئ. متاح في الجزائر.",
  };

  return {
    title: titles[locale] || titles.fr,
    description: descriptions[locale] || descriptions.fr,
    keywords: ["AVC", "stroke", "recovery", "AVCARE", "Algeria", "health app", "rééducation", "سكتة دماغية"],
    authors: [{ name: "AVCARE Team" }],
    openGraph: {
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      type: "website",
      locale: locale === "ar" ? "ar_DZ" : locale === "fr" ? "fr_DZ" : "en_US",
      siteName: "AVCARE",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
