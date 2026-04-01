import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./styles/xve.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

import { constructMetadata, generateJsonLd } from "@/lib/seo-config";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export const metadata = constructMetadata({
  businessName: "XVE Studio",
  description: "Diseño y desarrollo web de alto impacto con animaciones 3D para marcas que quieren destacar en República Dominicana.",
  image: "https://xvestudio.com/og.jpg",
  keywords: ["diseño web", "desarrollo web", "animaciones 3D", "agencia digital", "Santo Domingo", "República Dominicana"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd({
    businessName: "XVE Studio",
    description: "Agencia de diseño y desarrollo web especializada en experiencias digitales únicas con animaciones 3D.",
    url: "https://xvestudio.com",
    image: "https://xvestudio.com/og.jpg",
    location: "Santo Domingo, República Dominicana",
  });

  return (
    <html lang="es" data-mode="light">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased theme-xve`} data-mode="light">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
