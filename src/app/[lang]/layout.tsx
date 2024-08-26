import type { Metadata } from "next";

import "@/styles/index.scss";
import Navbar from "@/components/Navbar";

import { Locale, i18n } from "@/i18n.config";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DOT Game",
  description: "DOT Game (like DotA 2)",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={""}>
        {/* header hamooon navbare aghaye (Hamed Bahram)ye   [ https://github.com/HamedBahram/next-i18n ] */}
        <Header lang={params.lang} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
