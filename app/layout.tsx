import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVCARE",
  description: "AVCARE - Votre compagnon de récupération AVC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
