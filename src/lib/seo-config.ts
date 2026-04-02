import { Metadata } from 'next';

const BUSINESS = {
    name: "XVE Studio",
    legalName: "Poszy E.I.R.L.",
    url: "https://xvestudio.com",
    image: "https://xvestudio.com/og.jpg",
    email: "xvestudio@hotmail.com",
    phone: "+18094998166",
    phoneDisplay: "+1 (809) 499-8166",
    whatsapp: "https://wa.me/18094998166",
    address: {
        street: "Esperanza",
        city: "Esperanza",
        region: "Valverde",
        country: "DO",
        full: "Esperanza, Valverde, República Dominicana",
    },
    geo: { lat: 19.3808, lng: -70.8741 },
    priceRange: "$$",
    founding: "2018",
    hours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
};

const LOCAL_KEYWORDS = [
    // Core service
    "diseño web",
    "desarrollo web",
    "páginas web profesionales",
    "crear página web",
    "hacer un website",
    // Location targets
    "diseño web Esperanza",
    "diseño web Santiago",
    "diseño web Mao",
    "diseño web Navarrete",
    "páginas web en Santiago",
    "agencia web Valverde",
    "diseñador web República Dominicana",
    // Natural phrases Dominicans search
    "necesito una página web para mi negocio",
    "cuánto cuesta una página web en RD",
    "quien me hace un website en Santiago",
    "agencia digital Santiago RD",
    "diseño de páginas web para restaurantes",
    "página web para clínica",
    "página web para empresa",
    "tienda online República Dominicana",
    // English terms Dominicans use
    "website design Dominican Republic",
    "landing page",
    "e-commerce",
    // Long tail
    "mejor agencia de diseño web en Santiago",
    "empresa de diseño web en Línea Noroeste",
    "software a medida República Dominicana",
];

interface SEOProps {
    businessName?: string;
    description?: string;
    keywords?: string[];
    url?: string;
    image?: string;
    location?: string;
}

export function constructMetadata({
    businessName = BUSINESS.name,
    description,
    keywords = [],
    url = BUSINESS.url,
    image = BUSINESS.image,
}: SEOProps = {}): Metadata {
    const desc = description ||
        "Diseño y desarrollo de páginas web profesionales en Esperanza, Santiago, Mao y Navarrete. Creamos sitios rápidos, modernos y que convierten visitantes en clientes. Primera consulta gratis.";

    const title = `${businessName} — Diseño Web en Esperanza, Santiago y toda la Línea Noroeste`;

    return {
        title: {
            default: title,
            template: `%s | ${businessName}`
        },
        description: desc,
        keywords: [...LOCAL_KEYWORDS, ...keywords],
        metadataBase: new URL(url),
        alternates: {
            canonical: url,
            languages: { "es-DO": url },
        },
        openGraph: {
            type: 'website',
            locale: 'es_DO',
            url,
            title,
            description: desc,
            siteName: businessName,
            images: [{
                url: image,
                width: 1200,
                height: 630,
                alt: `${businessName} — Agencia de diseño web en República Dominicana`,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: desc,
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
        other: {
            "geo.region": "DO-VAL",
            "geo.placename": "Esperanza, Valverde",
            "geo.position": `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
            "ICBM": `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
        },
        icons: {
            icon: '/image/xve-logo.ico',
        },
    };
}

export function generateJsonLd() {
    return [
        // LocalBusiness — primary schema
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${BUSINESS.url}/#business`,
            "name": BUSINESS.name,
            "legalName": BUSINESS.legalName,
            "description": "Agencia de diseño y desarrollo web en Esperanza, Valverde. Creamos páginas web profesionales, tiendas online y software a medida para negocios en Santiago, Mao, Navarrete y toda la Línea Noroeste de República Dominicana.",
            "url": BUSINESS.url,
            "image": BUSINESS.image,
            "logo": `${BUSINESS.url}/image/xve-logo.ico`,
            "telephone": BUSINESS.phone,
            "email": BUSINESS.email,
            "foundingDate": BUSINESS.founding,
            "priceRange": BUSINESS.priceRange,
            "currenciesAccepted": "DOP, USD",
            "paymentAccepted": "Efectivo, Transferencia Bancaria",
            "openingHours": BUSINESS.hours,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": BUSINESS.address.street,
                "addressLocality": BUSINESS.address.city,
                "addressRegion": BUSINESS.address.region,
                "addressCountry": BUSINESS.address.country,
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": BUSINESS.geo.lat,
                "longitude": BUSINESS.geo.lng,
            },
            "areaServed": [
                { "@type": "City", "name": "Esperanza", "containedInPlace": { "@type": "AdministrativeArea", "name": "Valverde" } },
                { "@type": "City", "name": "Mao", "containedInPlace": { "@type": "AdministrativeArea", "name": "Valverde" } },
                { "@type": "City", "name": "Navarrete", "containedInPlace": { "@type": "AdministrativeArea", "name": "Santiago" } },
                { "@type": "City", "name": "Santiago de los Caballeros", "containedInPlace": { "@type": "AdministrativeArea", "name": "Santiago" } },
                { "@type": "AdministrativeArea", "name": "Línea Noroeste" },
                { "@type": "Country", "name": "República Dominicana" },
            ],
            "knowsAbout": [
                "Diseño web", "Desarrollo web", "Next.js", "React", "Three.js",
                "Animaciones 3D", "E-commerce", "Software a medida", "SEO",
                "Páginas web para restaurantes", "Páginas web para clínicas",
                "Tiendas online", "Aplicaciones web",
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de diseño y desarrollo web",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": { "@type": "Service", "name": "Diseño y Desarrollo Web", "description": "Sitios web únicos, rápidos y optimizados para conversión." },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": { "@type": "Service", "name": "Tienda Online / E-commerce", "description": "Tiendas online con pasarelas de pago y panel de administración." },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": { "@type": "Service", "name": "Software a Medida", "description": "CRMs, dashboards y sistemas que automatizan tu negocio." },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": { "@type": "Service", "name": "SEO y Posicionamiento", "description": "Visibilidad real en Google para negocios en República Dominicana." },
                    },
                ],
            },
            "sameAs": [],
        },
        // WebSite schema for sitelinks search
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": BUSINESS.name,
            "url": BUSINESS.url,
            "description": "Diseño web profesional en Esperanza, Santiago, Mao y Navarrete, República Dominicana.",
            "publisher": { "@id": `${BUSINESS.url}/#business` },
        },
    ];
}
