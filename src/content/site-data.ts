
export const siteData = {
    general: {
        appName: "Template",
        logoText: "Template",
        whatsappLink: "https://wa.me/1234567890",
        email: "hola@chameleon.agency",
        phone: "+1 (555) 123-4567",
        address: "Miami, FL - USA",
        socials: {
            instagram: "#",
            twitter: "#",
            linkedin: "#",
            facebook: "#",
        }
    },
    navigation: [
        { label: "Servicios", href: "#services" },
        { label: "Proyectos", href: "#work" },
        { label: "Nosotros", href: "#about" },
    ],
    hero: {
        title: {
            line1: "Transformamos ideas en",
            highlight: "negocios digitales rentables."
        },
        subtitle: "Desarrollo web de alto impacto, diseño estratégico y soluciones a medida para escalar tu facturación de manera predecible.",
        ctaPrimary: "Ver Planes",
        ctaSecondary: "Agendar Llamada",
        visualText: "Imagen / 3D Asset"
    },
    logos: {
        label: "Confían en nosotros:",
        list: ["AlphaCorp", "TechFlow", "Nexus Systems", "Global Ventures", "InnovateX", "FutureScale", "BlueWave"]
    },
    features: {
        heading: "¿Por qué elegirnos?",
        subheading: "No solo hacemos webs bonitas, creamos máquinas de ventas.",
        items: [
            {
                icon: "Zap",
                title: "Velocidad Extrema",
                desc: "Optimizamos cada línea de código para cargar en menos de 1 segundo. Google ama la velocidad, y tus clientes también."
            },
            {
                icon: "Shield",
                title: "Seguridad Total",
                desc: "Protección contra ataques DDOS y certificados SSL incluidos en todos nuestros planes. Duerme tranquilo."
            },
            {
                icon: "Smartphone",
                title: "100% Responsive",
                desc: "Tu web se verá perfecta en iPhone, Android, Tablets y cualquier dispositivo existente. Sin excusas."
            }
        ]
    },
    testimonials: {
        heading: "Lo que dicen nuestros clientes",
        items: [
            {
                text: "El mejor servicio que he contratado. Mis ventas subieron un 40% en un mes. La inversión se pagó sola en dos semanas.",
                author: "Carlos D.",
                role: "Dueño de Restaurante",
                initial: "CD"
            },
            {
                text: "Profesionales, rápidos y con un diseño impecable. Superaron mis expectativas por mucho. Recomendados 100%.",
                author: "Ana S.",
                role: "CEO TechStart",
                initial: "AS"
            },
            {
                text: "La atención al cliente es 24/7 real. Solucionaron mis dudas al instante y me guiaron en todo el proceso.",
                author: "Mario R.",
                role: "Consultor Marketing",
                initial: "MR"
            }
        ]
    },
    pricing: {
        heading: "Planes diseñados para crecer",
        subheading: "Sin costos ocultos. Cancela cuando quieras.",
        items: [
            {
                name: "Emprendedor",
                price: "$299",
                desc: "Ideal para comenzar tu presencia digital profesionalmente.",
                features: ["Landing Page Conversión", "Hosting Gratis 1 año", "Soporte por Email", "Certificado SSL"],
                cta: "Elegir Emprendedor",
                isFeatured: false
            },
            {
                name: "Negocio",
                price: "$599",
                desc: "Para empresas que buscan escalar y automatizar ventas.",
                features: ["Web Completa (5 págs)", "SEO Básico & Speed Ops", "Dominio.com Gratis", "Blog Autoadministrable", "Whatsapp Widget"],
                cta: "Elegir Negocio",
                isFeatured: true,
                badge: "Recomendado"
            },
            {
                name: "Corporativo",
                price: "$999",
                desc: "Soluciones robustas y personalizadas para líderes.",
                features: ["E-commerce Completo", "Soporte Prioritario 24/7", "Integración de Pagos", "Diseño UX/UI Premium", "Analytics Avanzado"],
                cta: "Contactar Ventas",
                isFeatured: false
            }
        ]
    },
    faq: {
        heading: "Preguntas Frecuentes",
        items: [
            {
                q: "¿Cuánto tardan en entregar el proyecto?",
                a: "Normalmente entre 5 a 10 días hábiles para sitios corporativos y landing pages. Para E-commerce puede tomar hasta 15 días, dependiendo de la complejidad y cantidad de productos."
            },
            {
                q: "¿El dominio está incluido en el precio?",
                a: "Sí, el primer año de registro de dominio (.com, .net, .org) va por nuestra cuenta en los planes Negocio y Corporativo."
            },
            {
                q: "¿Puedo actualizar los contenidos yo mismo después?",
                a: "Absolutamente. Todos nuestros desarrollos incluyen un panel de administración intuitivo (CMS) para que puedas cambiar textos e imágenes sin saber programar."
            },
            {
                q: "¿Tienen garantía de satisfacción?",
                a: "Sí. Trabajamos con revisiones ilimitadas durante la etapa de diseño hasta que estés 100% feliz con el aspecto visual antes de pasar a programación."
            }
        ]
    },
    cta: {
        heading: "¿Listo para despegar?",
        text: "No dejes pasar más tiempo. Convierte tus visitas en clientes leales hoy mismo con un diseño de primer nivel.",
        button: "Empezar Ahora"
    },
    footer: {
        brand: {
            name: "CHAMELEON",
            tagline: "Creamos experiencias digitales que marcan la diferencia y generan resultados tangibles para tu negocio."
        },
        copyright: "© 2024 Chameleon Agency. Todos los derechos reservados.",
        designer: {
            name: "Cristian Santos",
            url: "https://www.instagram.com/cris_dev0/"
        }
    }
};

export type SiteData = typeof siteData;
