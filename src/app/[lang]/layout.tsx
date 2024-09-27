import type { Metadata } from "next";

import "@/styles/index.scss";
import Navbar from "@/components/Navbar";

import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DOT Game",
  description: "DOT Game (like DotA 2)",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { nav, footer } = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={""}>
        <Navbar nav={nav} lang={params.lang} />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
