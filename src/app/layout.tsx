import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./styles/modern.css";
import "./styles/swiss.css";
import "./styles/cyberpunk.css";
import "./styles/neopop.css";
import "./styles/vintage.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

import { constructMetadata, generateJsonLd, defaultSEO } from "@/lib/seo-config";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

export const metadata = constructMetadata({
  businessName: "Master Template",
  description: "Plantilla de aterrizaje optimizada para República Dominicana.",
  image: "https://master-template.com/og.jpg",
  keywords: ["Next.js", "React", "Landing Page", "República Dominicana"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd(defaultSEO);

  return (
    <html lang="en">
      {/* 
        CHANGE THEME HERE:
        Replace 'theme-modern' with one of the following:
        - theme-modern
        - theme-swiss
        - theme-cyberpunk
        - theme-neopop
        - theme-vintage
      */}
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased theme-swiss`}>
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
