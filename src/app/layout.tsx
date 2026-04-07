import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./styles/xve.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

import { constructMetadata, generateJsonLd } from "@/lib/seo-config";
import { GoogleAnalytics, GTMNoScript } from "@/components/analytics/GoogleAnalytics";
import { CookieBanner } from "@/components/blocks/CookieBanner";
import { CustomCursor } from "@/components/cursor/CustomCursor";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = generateJsonLd();

  return (
    <html lang="es" data-mode="light">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased theme-xve`} data-mode="light">
        <GTMNoScript />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <GoogleAnalytics />
        <CustomCursor />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
