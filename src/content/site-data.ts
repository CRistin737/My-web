
export const siteData = {
    general: {
        appName: "XVE Studio",
        logoText: "XVE Studio",
        whatsappLink: "https://wa.me/18094998166",
        email: "xvestudio@hotmail.com",
        phone: "+1 (809) 499-8166",
        address: "Esperanza, Valverde — República Dominicana",
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
        { label: "Precios", href: "#pricing" },
        { label: "Contacto", href: "#contact" },
    ],
    hero: {
        title: {
            line1: "Tu negocio merece",
            highlight: "una web que venda.",
        },
        subtitle: "Diseñamos páginas web profesionales para negocios en Esperanza, Santiago, Mao y Navarrete. Rápidas, modernas y hechas para convertir visitantes en clientes.",
        ctaPrimary: "Ver Proyectos",
        ctaSecondary: "Consulta Gratis",
        visualText: "3D Asset"
    },
    logos: {
        label: "Tecnologías que dominamos:",
        list: ["Next.js", "React", "Three.js", "Framer Motion", "TypeScript", "Tailwind CSS", "Node.js", "Figma", "Supabase", "Vercel"]
    },
    features: {
        heading: "Servicios de diseño web",
        subheading: "Todo lo que tu negocio necesita para destacar en internet. Sin plantillas genéricas — cada proyecto se construye desde cero.",
        items: [
            {
                icon: "Globe",
                title: "Diseño de Páginas Web",
                desc: "Creamos tu página web desde cero, con diseño profesional, adaptada a móviles y optimizada para que tus clientes te encuentren en Google."
            },
            {
                icon: "Box",
                title: "Animaciones 3D",
                desc: "Dale vida a tu sitio con efectos visuales que ningún competidor tiene. Tu website se va a ver diferente a todo lo demás."
            },
            {
                icon: "ShoppingCart",
                title: "Tienda Online",
                desc: "Vende tus productos por internet con una tienda online completa — pasarela de pago, inventario y panel para que manejes todo tú mismo."
            },
            {
                icon: "Code2",
                title: "Software a Medida",
                desc: "¿Necesitas un sistema para tu negocio? Creamos CRMs, dashboards y aplicaciones que automatizan lo que hoy haces manual."
            },
            {
                icon: "BarChart3",
                title: "SEO y Posicionamiento",
                desc: "Que cuando alguien busque tu servicio en Google, tu negocio sea el primero que aparezca. Así de simple."
            },
            {
                icon: "Wrench",
                title: "Mantenimiento Web",
                desc: "Tu página siempre actualizada, rápida y funcionando. Soporte técnico cuando lo necesites, sin complicaciones."
            }
        ]
    },
    about: {
        heading: "Somos XVE Studio",
        subheading: "La agencia de diseño web de Esperanza que trabaja con negocios en Santiago, Mao, Navarrete y toda la Línea Noroeste.",
        description: "Desde Esperanza, Valverde, creamos páginas web de nivel internacional para negocios locales. Ya sean restaurantes, clínicas, empresas o profesionales independientes — diseñamos sitios que no solo se ven bien, sino que traen clientes de verdad. Más de 8 años de experiencia nos respaldan.",
        stats: [
            { value: "8+", label: "Años de experiencia" },
            { value: "50+", label: "Proyectos entregados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "3×", label: "Más conversiones promedio" },
        ]
    },
    work: {
        heading: "Trabajo que habla por sí solo",
        items: [
            {
                id: "logistic-pro",
                title: "LogisticPro RD",
                client: "Distribuidora Nacional S.A.",
                category: "Software a Medida",
                tags: ["Next.js", "Node.js", "PostgreSQL", "Dashboard"],
                year: "2024",
                gradient: "radial-gradient(ellipse at 20% 30%, rgba(220,30,30,0.55) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(120,10,10,0.3) 0%, transparent 50%), #0b0303",
                mockType: "dashboard",
                business: "Empresa dominicana líder en distribución de productos de consumo masivo, con operaciones activas en 15 provincias del país.",
                challenge: "Gestión manual de rutas, inventario disperso en Excel y falta de visibilidad para la gerencia sobre el estado de entregas en tiempo real.",
                solution: [
                    "Sistema de gestión de rutas y entregas en tiempo real",
                    "Panel de control gerencial con KPIs y alertas",
                    "App web para conductores (offline-first)",
                    "Integración con sistema de facturación existente",
                    "Reportes automáticos de rendimiento por zona",
                ],
                results: "Reducción del 40% en tiempo de entrega, visibilidad total de la cadena logística y ahorro de 12 horas semanales en gestión manual.",
            },
            {
                id: "vs-fashion",
                title: "VS Fashion Store",
                client: "VS Fashion RD",
                category: "E-commerce",
                tags: ["Next.js", "Stripe", "Sanity CMS", "SEO"],
                year: "2024",
                gradient: "radial-gradient(ellipse at 80% 20%, rgba(220,30,30,0.4) 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(180,20,20,0.25) 0%, transparent 45%), #08080c",
                mockType: "ecommerce",
                business: "Marca de moda femenina con más de 500 productos, ventas en tienda física y la necesidad urgente de expandirse al canal digital.",
                challenge: "Sin presencia online estructurada, ventas limitadas a Instagram DMs y sin capacidad de procesar pagos digitales de forma segura.",
                solution: [
                    "Tienda online con catálogo de +500 productos",
                    "Pasarela de pago (Stripe + transferencia local)",
                    "Panel CMS para gestión de productos e inventario",
                    "SEO On-Page + integración con Meta Pixel",
                    "Sistema de cupones y descuentos automáticos",
                ],
                results: "Primeras ventas online en 48h del lanzamiento. +120% en ingresos el primer trimestre. Reducción del 70% en tiempo de gestión de pedidos.",
            },
            {
                id: "rm-constructora",
                title: "RM Construcciones",
                client: "RM Construcciones & Diseño",
                category: "Web Corporativa + 3D",
                tags: ["Next.js", "Three.js", "Framer Motion", "SEO"],
                year: "2024",
                gradient: "linear-gradient(160deg, rgba(220,30,30,0.3) 0%, transparent 40%), radial-gradient(ellipse at 70% 70%, rgba(180,20,20,0.3) 0%, transparent 50%), #050a08",
                mockType: "corporate",
                business: "Empresa constructora con 15 años en el mercado dominicano, especializada en residencias de lujo y proyectos comerciales de gran escala.",
                challenge: "Sitio web antiguo, sin mobile-responsive, que no reflejaba el nivel premium de sus proyectos y perdía leads ante la competencia.",
                solution: [
                    "Web corporativa premium totalmente responsive",
                    "Visualizador 3D interactivo de proyectos inmobiliarios",
                    "Galería de proyectos con filtros por categoría",
                    "Formulario de cotización con respuesta automática",
                    "Optimización SEO para búsquedas locales",
                ],
                results: "Triplicaron las consultas digitales en el primer mes. Reducción del 80% en tiempo de presentación de proyectos a clientes.",
            },
            {
                id: "el-bohio",
                title: "El Bohío Restaurant",
                client: "El Bohío Gastrobar",
                category: "Landing Page + Reservas",
                tags: ["Next.js", "Animaciones", "WhatsApp API", "SEO Local"],
                year: "2023",
                gradient: "radial-gradient(ellipse at 50% 0%, rgba(220,30,30,0.35) 0%, transparent 55%), radial-gradient(ellipse at 20% 100%, rgba(150,15,15,0.3) 0%, transparent 40%), #0a0603",
                mockType: "landing",
                business: "Restaurante gastrobar en Santo Domingo con menú de autor, carta de vinos premium y capacidad para eventos corporativos.",
                challenge: "Dependencia total de redes sociales, sin sistema de reservas, sin visibilidad en Google y pérdida de clientes ante restaurantes con mejor presencia digital.",
                solution: [
                    "Landing page con diseño premium y animaciones únicas",
                    "Sistema de reservas integrado con WhatsApp Business",
                    "Menú digital interactivo actualizable por el cliente",
                    "SEO Local para Google Maps y búsquedas de restaurantes",
                    "Galería curada con optimización de imágenes",
                ],
                results: "+85% en reservas digitales. Aparece en el Top 3 de Google para búsquedas de restaurantes en la zona. Ahorro del 100% en menús impresos.",
            },
            {
                id: "techstart-dr",
                title: "TechStart DR",
                client: "TechStart República Dominicana",
                category: "Startup Landing",
                tags: ["Next.js", "Framer Motion", "Animaciones 3D", "Analytics"],
                year: "2023",
                gradient: "radial-gradient(ellipse at 30% 50%, rgba(220,30,30,0.4) 0%, transparent 55%), radial-gradient(ellipse at 90% 10%, rgba(180,20,20,0.2) 0%, transparent 40%), #05050d",
                mockType: "startup",
                business: "Startup tecnológica de Santo Domingo ofreciendo soluciones SaaS de gestión para PYMEs dominicanas, con ronda de inversión activa.",
                challenge: "Necesitaban una landing page que transmitiera innovación, generara waitlist de usuarios y atrajera a inversores potenciales.",
                solution: [
                    "Landing page con animaciones 3D y micro-interacciones",
                    "Formulario de waitlist con automatización de email",
                    "Panel de analytics personalizado para métricas de conversión",
                    "Sección para inversores con deck embebido",
                    "Performance Score 98/100 en Lighthouse",
                ],
                results: "+2,000 registros en waitlist el primer mes. Consiguieron su primera ronda seed de $150K usando la landing como herramienta de pitch.",
            },
        ]
    },
    testimonials: {
        heading: "Lo que dicen nuestros clientes",
        items: [
            {
                text: "XVE transformó completamente nuestra presencia digital. Las animaciones 3D dejaron a todo el mundo sin palabras. Triplicamos las consultas en el primer mes.",
                author: "Roberto M.",
                role: "CEO, Constructora RM",
                initial: "RM"
            },
            {
                text: "Profesionalismo al máximo nivel. Entregaron antes del plazo, el diseño superó todas mis expectativas y el panel de analytics es increíble.",
                author: "Valeria S.",
                role: "Directora, VS Fashion",
                initial: "VS"
            },
            {
                text: "El software que nos desarrollaron automatizó procesos que antes tomaban horas. ROI positivo desde el primer mes. Altamente recomendados.",
                author: "Carlos P.",
                role: "Gerente, LogiTrack RD",
                initial: "CP"
            }
        ]
    },
    pricing: {
        heading: "Inversión en tu marca",
        subheading: "Planes transparentes. Todo lo que no está incluido se cotiza aparte, sin sorpresas.",
        items: [
            {
                name: "Básico",
                price: "RD$20,000",
                priceEnd: "– 25,000",
                desc: "Ideal para emprendedores que quieren una presencia digital profesional y rápida.",
                features: [
                    "Landing Page de conversión",
                    "Diseño personalizado (sin plantillas)",
                    "Responsive en todos los dispositivos",
                    "SSL + Hosting primer año",
                    "Formulario de contacto",
                    "Entrega en 7 días hábiles",
                ],
                cta: "Empezar Básico",
                isFeatured: false,
                badge: null,
                isSoftware: false,
            },
            {
                name: "Profesional",
                price: "RD$25,000",
                priceEnd: "– 45,000",
                desc: "Para empresas que buscan escalar con una web completa, SEO y automatizaciones.",
                features: [
                    "Web completa (hasta 5 páginas)",
                    "SEO On-Page + Speed Optimization",
                    "Blog o portafolio administrable",
                    "Dominio .com primer año",
                    "WhatsApp Widget + CTAs estratégicos",
                    "Google Analytics integrado",
                    "Entrega en 12 días hábiles",
                ],
                cta: "Elegir Profesional",
                isFeatured: true,
                badge: "Más Popular",
                isSoftware: false,
            },
            {
                name: "Completo",
                price: "RD$45,000",
                priceEnd: "– 150,000",
                desc: "Solución premium con animaciones 3D, integraciones avanzadas y panel de analytics.",
                features: [
                    "E-commerce o web corporativa completa",
                    "Animaciones 3D / interacciones únicas",
                    "Integraciones API (pagos, CRM, etc.)",
                    "Panel de analytics personalizado",
                    "Funciones especiales a medida",
                    "Soporte prioritario 30 días",
                    "Entrega en 20 días hábiles",
                ],
                cta: "Elegir Completo",
                isFeatured: false,
                badge: null,
                isSoftware: false,
            },
            {
                name: "Software a Medida",
                price: "RD$150,000",
                priceEnd: "– 500,000",
                desc: "Aplicaciones web, CRMs, dashboards y sistemas empresariales completamente personalizados.",
                features: [
                    "Análisis de requerimientos incluido",
                    "Arquitectura escalable en la nube",
                    "Panel de administración completo",
                    "Autenticación y roles de usuario",
                    "Integraciones ilimitadas",
                    "Soporte y mantenimiento post-entrega",
                    "Cotización según complejidad",
                ],
                cta: "Solicitar Cotización",
                isFeatured: false,
                badge: "Enterprise",
                isSoftware: true,
            }
        ]
    },
    hosting: {
        heading: "Infraestructura y Soporte",
        subheading: "Tu plataforma web necesita mantenimiento profesional para estar siempre rápida, segura y funcionando. Protege tu inversión.",
        items: [
            {
                name: "Starter",
                price: "RD$1,500",
                priceEnd: "/mes",
                desc: "Tu web siempre online, rápida y protegida. Ideal para landing pages y sitios informativos.",
                features: [
                    "Hosting cloud de alta disponibilidad",
                    "Certificado SSL incluido",
                    "1 correo corporativo (info@tunegocio.com)",
                    "Backup mensual (código + base de datos)",
                    "Monitoreo 24/7 de caídas",
                    "Uptime 99.9% garantizado",
                    "Soporte técnico (respuesta 48h)",
                ],
                cta: "Elegir Starter",
                isFeatured: false,
                badge: null,
                isSoftware: false,
            },
            {
                name: "Growth",
                price: "RD$3,500",
                priceEnd: "/mes",
                desc: "Para negocios en expansión que necesitan actualizaciones, más rendimiento y presencia activa.",
                features: [
                    "Todo lo del plan Starter",
                    "Hosting premium (más RAM/CPU)",
                    "Hasta 3 correos corporativos",
                    "Backups semanales automáticos",
                    "4 cambios de contenido al mes",
                    "Actualización de dependencias críticas",
                    "Soporte por ticket (respuesta 24h)",
                ],
                cta: "Elegir Growth",
                isFeatured: true,
                badge: "Más Popular",
                isSoftware: false,
            },
            {
                name: "Scale",
                price: "RD$6,500",
                priceEnd: "/mes",
                desc: "Tu departamento técnico completo. E-commerce, alto tráfico, SEO y rendimiento máximo.",
                features: [
                    "Todo lo del plan Growth",
                    "Servidor con recursos dedicados",
                    "Hasta 5 correos corporativos",
                    "Backups diarios + protección anti-ataques",
                    "3 horas de programación al mes",
                    "Reporte SEO + rendimiento mensual",
                    "Optimización de velocidad y Core Web Vitals",
                    "Soporte prioritario por WhatsApp (mismo día)",
                ],
                cta: "Elegir Scale",
                isFeatured: false,
                badge: "Todo Incluido",
                isSoftware: false,
            },
            {
                name: "On Demand",
                price: "RD$2,500",
                priceEnd: "/ 2 horas",
                desc: "Sin mensualidad. Nos contactas cuando necesites un cambio y lo ejecutamos.",
                features: [
                    "Bloque de 2 horas de programación",
                    "Cambios de contenido o diseño",
                    "Optimización puntual",
                    "Sin compromiso mensual",
                    "Hosting no incluido (RD$6,000/año aparte)",
                    "Cotización antes de ejecutar",
                    "Pago por adelantado",
                ],
                cta: "Solicitar Servicio",
                isFeatured: false,
                badge: "Flexible",
                isSoftware: true,
            }
        ]
    },
    faq: {
        heading: "Preguntas Frecuentes",
        items: [
            {
                q: "¿Cuánto cuesta hacer una página web en República Dominicana?",
                a: "Nuestros planes van desde RD$14,900 para un sitio básico hasta RD$59,900 para un sitio completo con e-commerce y funciones avanzadas. El precio depende de lo que necesites — la primera consulta es gratis y sin compromiso."
            },
            {
                q: "¿Trabajan con negocios en Santiago, Mao y Navarrete?",
                a: "Sí. Aunque estamos en Esperanza, Valverde, trabajamos con clientes en Santiago, Mao, Navarrete y toda la Línea Noroeste. Todo el proceso se puede hacer remoto por WhatsApp, videollamada o nos reunimos en persona."
            },
            {
                q: "¿Cuánto tiempo tarda en entregarse un proyecto?",
                a: "Depende del plan: Básico 7 días, Profesional 12 días, Completo 20 días. Los proyectos de software se estiman en la consulta inicial. Siempre cumplimos los plazos acordados."
            },
            {
                q: "¿Todo lo que sale del plan se cotiza aparte?",
                a: "Exacto. Los planes cubren lo que se describe. Si necesitas funciones adicionales, páginas extra o integraciones fuera del plan, se cotizan de forma transparente antes de ejecutar. Sin sorpresas."
            },
            {
                q: "¿Puedo administrar el contenido yo mismo?",
                a: "Sí. Los planes Profesional y Completo incluyen un CMS (panel de gestión de contenido) intuitivo para editar textos, imágenes y productos sin saber programar."
            },
            {
                q: "¿Los precios son en pesos dominicanos?",
                a: "Sí, todos los planes están en pesos dominicanos (RD$). Los proyectos de Software a Medida también se cotizan en pesos, ajustando según complejidad y alcance."
            },
            {
                q: "¿Ofrecen mantenimiento después del lanzamiento?",
                a: "Sí. El plan Completo incluye 30 días de soporte post-lanzamiento. Para todos los planes existe la opción de contratar mantenimiento mensual, cotizado aparte según necesidades."
            }
        ]
    },
    cta: {
        heading: "¿Necesitas una página web?",
        text: "Hablemos. La primera consulta es gratis y sin compromiso. Te decimos exactamente qué necesita tu negocio para crecer en internet.",
        button: "Agendar Consulta Gratis"
    },
    footer: {
        brand: {
            name: "XVE STUDIO",
            tagline: "Diseño y desarrollo web de alto impacto para marcas que quieren ser recordadas."
        },
        copyright: "© 2026 XVE Studio. Todos los derechos reservados.",
        designer: {
            name: "Cristian Santos",
            url: "https://www.instagram.com/crissantosjs_/"
        }
    }
};

export type SiteData = typeof siteData;
