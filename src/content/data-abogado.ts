
import { type SiteData } from "@/content/site-data";

export const lawyerData: SiteData = {
    general: {
        appName: "Justicia",
        logoText: "Santos & Asociados",
        whatsappLink: "https://wa.me/1234567890",
        email: "contacto@santoslegal.com",
        phone: "+1 (809) 555-0199",
        address: "Torre Empresarial, Piso 12, Santo Domingo",
        socials: {
            instagram: "#",
            twitter: "#",
            linkedin: "#",
            facebook: "#",
        }
    },
    navigation: [
        { label: "Áreas de Práctica", href: "#services" },
        { label: "Nuestros Abogados", href: "#work" },
        { label: "La Firma", href: "#about" },
    ],
    hero: {
        title: {
            line1: "Protegemos tu patrimonio y",
            highlight: "libertad con experiencia."
        },
        subtitle: "Más de 20 años litigando casos complejos en derecho corporativo y civil.",
        ctaPrimary: "Consulta Gratuita",
        ctaSecondary: "Conocer Equipo",
        visualText: "Foto Abogados / Estautua Justicia"
    },
    logos: {
        label: "Reconocidos por:",
        list: ["Legal500", "Chambers", "Colegio Abogados", "Forbe", "Noticias SIN", "Diario Libre"]
    },
    features: {
        heading: "Áreas de Práctica",
        subheading: "Especialización absoluta en los campos que importan.",
        items: [
            {
                icon: "Scale",
                title: "Derecho Corporativo",
                desc: "Fusiones, adquisiciones y estructuración de empresas para el éxito comercial."
            },
            {
                icon: "Gavel",
                title: "Litigios Civiles",
                desc: "Defensa agresiva en tribunales para proteger tus intereses y propiedades."
            },
            {
                icon: "FileText",
                title: "Propiedad Intelectual",
                desc: "Registro de marcas y patentes para blindar tus activos intangibles."
            }
        ]
    },
    testimonials: {
        heading: "Casos de Éxito",
        items: [
            {
                text: "Recuperaron las propiedades de mi familia en tiempo récord. Su estrategia fue impecable.",
                author: "Roberto M.",
                role: "Empresario Inmobiliario",
                initial: "RM"
            },
            {
                text: "Nos asesoraron en la fusión de nuestras empresas. Todo salió perfecto y sin contingencias legales.",
                author: "Laura V.",
                role: "CEO TechGroup",
                initial: "LV"
            },
            {
                text: "Excelente trato y profesionalismo. Me sentí respaldado en todo momento durante el juicio.",
                author: "Juan P.",
                role: "Cliente Civil",
                initial: "JP"
            }
        ]
    },
    pricing: {
        heading: "Planes de Asesoría",
        subheading: "Transparencia total en nuestros honorarios.",
        items: [
            {
                name: "Consulta Inicial",
                price: "$150",
                desc: "Evaluación completa de tu caso por un socio senior.",
                features: ["Revisión de Documentos", "Estrategia Legal", "Presupuesto Claro", "Confidencialidad"],
                cta: "Agendar Cita",
                isFeatured: false
            },
            {
                name: "Iguala Mensual",
                price: "$850",
                desc: "Protección legal continua para tu pequeña empresa.",
                features: ["Contratos Ilimitados", "Consultas Telefónicas", "Defensa Laboral", "Revisión Fiscal"],
                cta: "Solicitar Propuesta",
                isFeatured: true,
                badge: "Más Popular"
            },
            {
                name: "Defensa Penal",
                price: "A Cotizar",
                desc: "Representación experta en casos de alta complejidad.",
                features: ["Equipo Dedicado", "Investigación Privada", "Disponibilidad 24/7", "Estrategia Mediática"],
                cta: "Contactar Emergencia",
                isFeatured: false
            }
        ]
    },
    faq: {
        heading: "Dudas Legales Comunes",
        items: [
            {
                q: "¿Cobran por la primera consulta?",
                a: "Sí, nuestros socios dedican tiempo valioso para analizar tu caso. Si nos contratas, ese monto se descuenta del total."
            },
            {
                q: "¿Trabajan casos de divorcio?",
                a: "Nos enfocamos principalmente en derecho corporativo y civil, pero podemos referirte a especialistas en familia de confianza."
            },
            {
                q: "¿Tienen facilidades de pago?",
                a: "Entendemos que los procesos legales son costosos. Ofrecemos planes de cuotas para casos que lo ameriten."
            },
            {
                q: "¿Pueden representarme fuera de la capital?",
                a: "Tenemos licencia nacional y litigamos en todos los tribunales de la República Dominicana."
            }
        ]
    },
    cta: {
        heading: "¿Necesitas representación?",
        text: "El tiempo es clave en los procesos legales. No esperes a que sea tarde.",
        button: "Contactar Ahora"
    },
    footer: {
        brand: {
            name: "SANTOS & ASOC.",
            tagline: "Justicia, Ética y Resultados probados."
        },
        copyright: "© 2024 Santos & Asociados. Todos los derechos reservados.",
        designer: {
            name: "Cristian Santos",
            url: "https://www.instagram.com/cris_dev0/"
        }
    }
};
