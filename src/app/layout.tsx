import type { Metadata } from "next";

import "@/styles/index.scss";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "DOT Game",
  description: "DOT Game (like DotA 2)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
