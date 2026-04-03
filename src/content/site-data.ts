
export const siteData = {
    general: {
        appName: "XVE Studio",
        logoText: "XVE Studio",
        whatsappLink: "https://wa.me/18094998166",
        email: "xvestudio@hotmail.com",
        phone: "+1 (809) 499-8166",
        address: "Esperanza, Valverde — República Dominicana",
        socials: {
            instagram: "https://www.instagram.com/xvestudiooficial?igsh=eTZya2J1NjlicXN3&utm_source=qr",
            twitter: "#",
            linkedin: "#",
            facebook: "https://www.facebook.com/share/17KK8dRSFN/?mibextid=wwXIfr",
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
        subtitle: "Creamos ideas en sitios web unicas, con diseño único y animaciones que elevan tu marca por encima del resto.",
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
                id: "aire-express",
                title: "Aire Express",
                client: "Aire Express SRL",
                category: "Web + Software a Medida",
                tags: ["Next.js", "Tailwind CSS", "Supabase", "Express", "Node.js", "shadcn/ui"],
                year: "2025",
                gradient: "radial-gradient(ellipse at 20% 30%, rgba(0,120,220,0.55) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(0,60,120,0.3) 0%, transparent 50%), #030b18",
                mockType: "dashboard" as const,
                images: [
                    "/image/aire-express-hero.png",
                    "/image/aire-express-servicios.png",
                    "/image/aire-express-membresias.png",
                    "/image/aire-express-productos.png",
                    "/image/aire-express-calculadora.png",
                    "/image/aire-express-nosotros.png",
                    "/image/aire-express-galeria.png",
                    "/image/20260403084056.png",
                    "/image/20260403084126.png",
                    "/image/20260403084306.png",
                ],
                business: "Aire Express es una empresa dominicana especializada en soluciones integrales de climatización para hogares y empresas. Con más de 1,250 instalaciones realizadas y un equipo de técnicos certificados disponibles 24/7, se han posicionado como referentes en el sector de aires acondicionados — ofreciendo desde la venta de equipos de alta eficiencia y la instalación profesional hasta planes de mantenimiento preventivo, limpieza profunda y reparaciones de emergencia en todo el territorio nacional.",
                challenge: "La empresa operaba con procesos completamente manuales: la gestión de citas de servicio se coordinaba por llamadas telefónicas y WhatsApp sin un sistema centralizado, el inventario de piezas y equipos se controlaba en hojas de cálculo propensas a errores y duplicaciones, el catálogo de productos no estaba disponible online para los clientes, y no existía forma de que los clientes cotizaran o agendaran servicios de forma autónoma. La ausencia de una presencia digital profesional limitaba su alcance comercial y generaba pérdida constante de oportunidades de venta frente a competidores con presencia web.",
                solution: [
                    "Sitio web profesional de 7 secciones: landing con estadísticas en vivo, servicios con planes de mantenimiento básico y premium, sistema de membresías anuales, catálogo de equipos con filtros por categoría y búsqueda, calculadora interactiva de BTU, sección institucional y galería de proyectos filtrable por categoría (residencial, comercial, industrial)",
                    "Panel de administración tipo software con dashboard de resumen general — KPIs en tiempo real, servicios cercanos, distribución de servicios por tipo y volumen anual de trabajo",
                    "Sistema completo de gestión de clientes con registro detallado, historial de servicios realizados y seguimiento individualizado de cada cuenta",
                    "Inventario dual: catálogo público de productos para la web con precios, stock y filtros de búsqueda, más un inventario interno separado para piezas, repuestos y materiales del taller",
                    "Módulo de agenda de servicios con estados (pendiente, en progreso, completado), asignación de técnicos, fechas programadas y sistema de notificaciones automáticas",
                    "Calculadora de BTU interactiva que recomienda la capacidad ideal del equipo según dimensiones del espacio, tipo de uso (habitación, oficina, comercio) y carga interna del ambiente",
                    "Autenticación segura con panel de login corporativo, roles de usuario diferenciados y control de acceso por permisos para proteger la información del negocio",
                ],
                results: "Aire Express pasó de operar 100% manual a tener un ecosistema digital completo. El catálogo online genera cotizaciones automáticas las 24 horas, la agenda de servicios eliminó los conflictos de horarios y las citas perdidas, el inventario dual redujo las pérdidas de stock en un 60%, y la calculadora de BTU se convirtió en una herramienta de venta que los clientes usan antes de solicitar servicio — aumentando las conversiones y posicionando a la empresa como la opción más profesional del mercado.",
            },
            {
                id: "logistic-pro",
                title: "LogisticPro RD",
                client: "Distribuidora Nacional S.A.",
                category: "Software a Medida",
                tags: ["Next.js", "Node.js", "PostgreSQL", "Dashboard"],
                year: "2024",
                gradient: "radial-gradient(ellipse at 20% 30%, rgba(220,30,30,0.55) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(120,10,10,0.3) 0%, transparent 50%), #0b0303",
                mockType: "dashboard" as const,
                images: [] as string[],
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
        ]
    },
    testimonials: {
        heading: "Lo que dicen nuestros clientes",
        items: [
            {
                text: "XVE transformó nuestra presencia online. La pagina web y el panel donde gestionamos nuestra agenda y inventario es unico y funcional, dejaron a todo el mundo sin palabras. Triplicamos la eficiencia en el primer mes.",
                author: "Felix Dominguez",
                role: "Propietario, Aire express",
                initial: "AE"
            },

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
                    "Dominio .com gratis primer año",
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
                    " SSL + Hosting gratis primer año",
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
        subheading: "Tu web necesita mantenimiento para seguir generando clientes. Elige el plan que se ajuste a tu negocio.",
        items: [
            {
                name: "ESENCIAL",
                price: "RD$950",
                priceEnd: "/mes",
                desc: "Landing pages, páginas informativas y sitios de una sola página. Lo esencial para estar online.",
                features: [
                    "Dominio .com incluido",
                    "Hosting cloud (99.9% uptime)",
                    "Certificado SSL incluido",
                    "1 correo corporativo profesional",
                    "Backup mensual completo",
                    "Monitoreo de caídas 24/7",
                    "Soporte técnico por WhatsApp",
                ],
                cta: "Elegir ESENCIAL",
                isFeatured: false,
                badge: null,
                isSoftware: false,
            },
            {
                name: "CRECIMIENTO",
                price: "RD$2,100",
                priceEnd: "/mes",
                desc: "Sitios con animaciones, múltiples páginas y contenido dinámico que necesitan rendimiento real.",
                features: [
                    "Dominio .com incluido",
                    "Todo lo del plan Starter",
                    "Hosting premium (más velocidad)",
                    "Hasta 3 correos corporativos",
                    "Backups semanales automáticos",
                    "4 actualizaciones de contenido al mes",
                    "Optimización de velocidad trimestral",
                    "Soporte prioritario (respuesta 24h)",
                ],
                cta: "Elegir CRECIMIENTO",
                isFeatured: true,
                badge: "Más Popular",
                isSoftware: false,
            },
            {
                name: "ÉLITE",
                price: "RD$3,500",
                priceEnd: "/mes",
                desc: "E-commerce, software a medida y plataformas con alto tráfico. Tu equipo técnico completo.",
                features: [
                    "Dominio .com incluido",
                    "Todo lo del plan Growth",
                    "Servidor con recursos dedicados",
                    "Hasta 5 correos corporativos",
                    "Backups diarios + protección anti-ataques",
                    "3 horas de desarrollo al mes",
                    "Reporte SEO + Core Web Vitals mensual",
                    "Optimización continua de rendimiento",
                    "Soporte VIP por WhatsApp (mismo día)",
                ],
                cta: "Elegir ÉLITE",
                isFeatured: false,
                badge: "Todo Incluido",
                isSoftware: false,
            },
            {
                name: "Por Demanda",
                price: "RD$2,000",
                priceEnd: "/ 2 horas",
                desc: "Sin mensualidad. Nos contactas, cotizamos y ejecutamos. Simple.",
                features: [
                    "Bloque de 2 horas de trabajo",
                    "Cambios de contenido o diseño",
                    "Corrección de errores puntuales",
                    "Sin compromiso mensual",
                    "Dominio y hosting no incluido",
                    "Cotización transparente antes de ejecutar",
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
                q: "¿Cuánto cuesta una página web con XVE Studio?",
                a: "Trabajamos con rangos claros según el tipo de proyecto: Básico desde RD$20,000 a RD$25,000, Profesional desde RD$25,000 a RD$45,000 y Completo desde RD$45,000 a RD$150,000. Si necesitas software a medida, los proyectos arrancan desde RD$150,000. La primera consulta es gratis y te decimos qué opción sí encaja con tu negocio."
            },
            {
                q: "¿Qué incluye el precio y qué se cotiza aparte?",
                a: "Cada plan incluye exactamente lo que aparece en su alcance: diseño, desarrollo y entregables definidos. Si necesitas páginas extra, integraciones especiales, funciones fuera del plan, carga masiva de contenido o cambios nuevos después de aprobar el alcance, te lo cotizamos aparte antes de ejecutar. Sin cargos sorpresa."
            },
            {
                q: "¿En cuánto tiempo entregan una web?",
                a: "Los tiempos base son claros: 7 días hábiles para el plan Básico, 12 días hábiles para el Profesional y 20 días hábiles para el Completo. En software a medida el tiempo se estima según el alcance. El plazo final se confirma cuando revisamos contenido, funciones y materiales del proyecto."
            },
            {
                q: "¿Dominio, hosting y mantenimiento están incluidos?",
                a: "Depende del plan. El Básico incluye Dominio .com gratis el primer año. El Profesional incluye SSL + Hosting gratis primer año. Después del lanzamiento puedes continuar con mantenimiento desde RD$950/mes, RD$2,100/mes o RD$3,500/mes, según el nivel de soporte, velocidad y actualizaciones que necesite tu sitio."
            },
            {
                q: "¿Puedo editar el contenido yo mismo después de lanzar la web?",
                a: "Sí. Cuando el proyecto lo requiere, entregamos un panel administrable para que puedas cambiar textos, imágenes, entradas de blog, portafolio o productos sin depender de nosotros para cada ajuste. Si tu proyecto es una landing simple, también podemos dejarla administrable si entra en el alcance o cotizarlo aparte."
            },
            {
                q: "¿Trabajan solo en Esperanza o también en Santiago, Mao y Navarrete?",
                a: "Estamos en Esperanza, Valverde, pero trabajamos con negocios de Santiago, Mao, Navarrete y toda la Línea Noroeste. La mayoría de los proyectos se manejan por WhatsApp, correo y videollamada, así que podemos trabajar contigo aunque no estemos en la misma ciudad."
            },
            {
                q: "¿Qué pasa después del lanzamiento? ¿Dan soporte real?",
                a: "Sí. El plan Completo incluye 30 días de soporte prioritario después de publicar. Además ofrecemos planes de mantenimiento mensuales y servicio por demanda desde RD$2,000 por bloque de 2 horas para cambios, correcciones puntuales, mejoras y soporte técnico continuo."
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
