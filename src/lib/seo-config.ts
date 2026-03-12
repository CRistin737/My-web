import { Metadata } from 'next';

/**
 * RD SEO Configuration System
 * Designed to maximize visibility in Dominican Republic (Google.com.do)
 */

interface SEOProps {
    businessName?: string;
    description?: string;
    keywords?: string[];
    url?: string;
    image?: string;
    location?: string; // e.g., "Santo Domingo, República Dominicana"
}

export const defaultSEO = {
    businessName: "Master Landing Template",
    description: "Plantilla profesional para embudos de venta y landing pages de alta conversión en República Dominicana.",
    url: "https://tudominio.com",
    image: "https://tudominio.com/og-image.jpg",
    location: "Santo Domingo, República Dominicana"
};

export function constructMetadata({
    businessName = defaultSEO.businessName,
    description = defaultSEO.description,
    keywords = [],
    url = defaultSEO.url,
    image = defaultSEO.image,
    location = defaultSEO.location
}: SEOProps): Metadata {
    return {
        title: {
            default: `${businessName} | ${location}`,
            template: `%s | ${businessName}`
        },
        description: description,
        keywords: [
            "República Dominicana",
            "Santo Domingo",
            location,
            ...keywords
        ],
        openGraph: {
            type: 'website',
            locale: 'es_DO',
            url: url,
            title: businessName,
            description: description,
            siteName: businessName,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: businessName,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: businessName,
            description: description,
            images: [image],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        // GeoTags for Local SEO in RD
        other: {
            "geo.region": "DO",
            "geo.placename": location,
        },
        icons: {
            icon: '/image/xve-logo.ico',
        }
    };
}

export function generateJsonLd(seo: SEOProps) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": seo.businessName || defaultSEO.businessName,
        "image": seo.image || defaultSEO.image,
        "description": seo.description || defaultSEO.description,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": seo.location || defaultSEO.location,
            "addressCountry": "DO"
        },
        "url": seo.url || defaultSEO.url,
        "priceRange": "$$"
    };
}
