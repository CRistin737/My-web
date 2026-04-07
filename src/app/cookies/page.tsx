import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Cookies | XVE Studio",
    description: "Política de Cookies de XVE Studio. Información sobre Google Tag Manager, Google Analytics y almacenamiento local utilizados en xvestudio.com.",
    robots: { index: true, follow: true },
};

export default function PoliticaDeCookies() {
    return (
        <main className="theme-xve" style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "6rem" }}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
                <div className="legal-doc">

                    <p className="legal-meta">Última actualización: 2 de abril de 2026</p>
                    <h1 className="legal-title">Política de Cookies</h1>
                    <p className="legal-subtitle">
                        La presente Política de Cookies describe qué tecnologías de seguimiento utiliza el
                        sitio web <strong>xvestudio.com</strong>, operado por{" "}
                        <strong>Poszy E.I.R.L.</strong> bajo la marca comercial XVE Studio, con qué finalidad
                        se emplean y cómo puede usted gestionarlas o desactivarlas.
                    </p>
                    <p className="legal-lead">
                        Antes de activar cookies no esenciales en su dispositivo, le solicitamos su
                        consentimiento a través del banner que aparece en su primera visita. Puede modificar
                        sus preferencias en cualquier momento.
                    </p>

                    <hr className="legal-divider" />

                    {/* 1 */}
                    <section className="legal-section">
                        <h2>1. ¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que un sitio web almacena en su
                            navegador o dispositivo cuando usted lo visita. Permiten que el sitio recuerde
                            información sobre su visita — como sus preferencias de visualización — lo que
                            facilita una experiencia de navegación más fluida y personalizada en visitas
                            posteriores.
                        </p>
                        <p>
                            Además de las cookies tradicionales, existen otras tecnologías de seguimiento
                            similares, como el almacenamiento local (<em>localStorage</em>) del navegador,
                            que también se describe en esta política.
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="legal-section">
                        <h2>2. Tipos de cookies según su finalidad</h2>

                        <h3>2.1 Cookies estrictamente necesarias</h3>
                        <p>
                            Son indispensables para el funcionamiento básico del sitio web. Sin ellas, algunos
                            servicios y funcionalidades no estarían disponibles. No requieren su consentimiento
                            previo conforme a las normativas de privacidad aplicables.
                        </p>

                        <h3>2.2 Cookies de preferencias (funcionales)</h3>
                        <p>
                            Permiten recordar decisiones que usted ha tomado, como su preferencia de modo
                            oscuro o claro, para ofrecerle una experiencia personalizada.
                        </p>

                        <h3>2.3 Cookies analíticas</h3>
                        <p>
                            Recopilan información de forma agregada sobre cómo los usuarios interactúan con
                            el sitio web, con el fin de medir y mejorar su rendimiento. No identifican a
                            usuarios individuales de forma directa.
                        </p>

                        <h3>2.4 Cookies de marketing o publicidad</h3>
                        <p>
                            <strong>XVE Studio no utiliza cookies de marketing ni publicidad comportamental
                            de terceros</strong> en su sitio web actual. No existen píxeles de seguimiento
                            publicitario ni redes de afiliados en este sitio.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="legal-section">
                        <h2>3. Tecnologías de seguimiento que utilizamos</h2>
                        <p>
                            A continuación se detalla cada tecnología de seguimiento empleada en xvestudio.com,
                            con su propósito, proveedor y duración:
                        </p>

                        {/* Cookie table */}
                        <div className="legal-cookie-table">
                            <div className="legal-cookie-header">
                                <span>Tecnología / Cookie</span>
                                <span>Tipo</span>
                                <span>Finalidad</span>
                                <span>Proveedor</span>
                                <span>Duración</span>
                            </div>

                            <div className="legal-cookie-row">
                                <span data-label="Tecnología"><code>xve-mode</code></span>
                                <span data-label="Tipo">Preferencia (localStorage)</span>
                                <span data-label="Finalidad">Almacena su preferencia de modo de visualización: oscuro o claro. No abandona su dispositivo.</span>
                                <span data-label="Proveedor">Propio (xvestudio.com)</span>
                                <span data-label="Duración">Hasta que limpie el almacenamiento del navegador</span>
                            </div>

                            <div className="legal-cookie-row">
                                <span data-label="Tecnología"><code>cookie_consent</code></span>
                                <span data-label="Tipo">Necesaria (localStorage)</span>
                                <span data-label="Finalidad">Almacena su decisión sobre el uso de cookies (aceptadas o rechazadas) para no mostrar el banner en visitas posteriores.</span>
                                <span data-label="Proveedor">Propio (xvestudio.com)</span>
                                <span data-label="Duración">12 meses</span>
                            </div>

                            <div className="legal-cookie-row">
                                <span data-label="Tecnología">Google Tag Manager</span>
                                <span data-label="Tipo">Analítica (requiere consentimiento)</span>
                                <span data-label="Finalidad">Gestiona y coordina la carga de otras etiquetas de analítica en el sitio web. No recopila datos por sí mismo, sino que habilita a otros scripts autorizados.</span>
                                <span data-label="Proveedor">Google LLC</span>
                                <span data-label="Duración">Sesión / según etiquetas cargadas</span>
                            </div>

                            <div className="legal-cookie-row">
                                <span data-label="Tecnología">Google Analytics 4</span>
                                <span data-label="Tipo">Analítica (requiere consentimiento)</span>
                                <span data-label="Finalidad">Recopila datos estadísticos anonimizados sobre el uso del sitio: páginas visitadas, tiempo de sesión, dispositivo, región geográfica y fuente de tráfico. Usados para mejorar la experiencia del sitio.</span>
                                <span data-label="Proveedor">Google LLC</span>
                                <span data-label="Duración">Hasta 26 meses</span>
                            </div>
                        </div>

                        <p style={{ marginTop: "1.5rem" }}>
                            <strong>Nota importante sobre Google Analytics:</strong> Hemos configurado Google
                            Analytics con anonimización de IP activada. Los datos recopilados son estadísticos
                            y no permiten identificar a usuarios individuales. Google actúa como encargado del
                            tratamiento bajo acuerdo contractual. Puede consultar la{" "}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Política de Privacidad de Google
                            </a>{" "}
                            y la{" "}
                            <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">
                                política de privacidad de datos de Google Analytics
                            </a>.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="legal-section">
                        <h2>4. Almacenamiento Local (localStorage)</h2>
                        <p>
                            El almacenamiento local es una tecnología del navegador similar a las cookies pero
                            con capacidad de almacenamiento mayor y sin fecha de expiración automática.
                            A diferencia de las cookies, los datos en localStorage no se envían al servidor
                            en cada solicitud HTTP — permanecen exclusivamente en su dispositivo.
                        </p>
                        <p>
                            En xvestudio.com utilizamos localStorage para:
                        </p>
                        <ul>
                            <li>
                                <strong>Preferencia de tema (<code>xve-mode</code>):</strong> Guardamos si
                                usted prefiere el modo oscuro o claro para que su elección se mantenga entre
                                sesiones. Este dato es puramente local y no se comparte con ningún servidor.
                            </li>
                            <li>
                                <strong>Consentimiento de cookies (<code>cookie_consent</code>):</strong>{" "}
                                Guardamos su decisión sobre el uso de cookies de analítica para no
                                interrumpir su navegación con el banner en visitas posteriores.
                            </li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="legal-section">
                        <h2>5. Base Jurídica y Consentimiento</h2>
                        <p>
                            El uso de cookies de analítica a través de Google Tag Manager y Google Analytics
                            requiere su consentimiento previo, libre, específico, informado e inequívoco,
                            conforme a los principios establecidos en la <strong>Ley No. 172-13 de Protección
                            Integral de los Datos Personales</strong> de la República Dominicana y el artículo
                            44 de la Constitución dominicana.
                        </p>
                        <p>
                            Al visitar nuestro sitio por primera vez, le presentamos un banner de cookies que
                            le permite:
                        </p>
                        <ul>
                            <li><strong>Aceptar</strong> todas las cookies, incluyendo las analíticas.</li>
                            <li><strong>Rechazar</strong> las cookies no esenciales, en cuyo caso solo se
                            activarán las funcionalidades estrictamente necesarias.</li>
                        </ul>
                        <p>
                            Las cookies estrictamente necesarias y el almacenamiento de preferencias locales
                            no requieren consentimiento, al ser indispensables para el funcionamiento básico
                            del sitio o para recordar decisiones que usted mismo ha tomado.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="legal-section">
                        <h2>6. Cómo Gestionar sus Preferencias de Cookies</h2>

                        <h3>6.1 A través de nuestro sitio</h3>
                        <p>
                            Puede modificar su preferencia de cookies en cualquier momento haciendo clic en
                            el enlace <strong>"Gestionar cookies"</strong> disponible en el pie de página del
                            sitio. Esto restablecerá el banner de consentimiento y le permitirá actualizar
                            su decisión.
                        </p>

                        <h3>6.2 A través de su navegador</h3>
                        <p>
                            Puede configurar su navegador para bloquear o eliminar cookies en cualquier
                            momento. A continuación, enlaces a las instrucciones de los navegadores
                            más comunes:
                        </p>
                        <ul>
                            <li>
                                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                                    Google Chrome
                                </a>
                            </li>
                            <li>
                                <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer">
                                    Mozilla Firefox
                                </a>
                            </li>
                            <li>
                                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                                    Apple Safari
                                </a>
                            </li>
                            <li>
                                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                                    Microsoft Edge
                                </a>
                            </li>
                        </ul>
                        <p>
                            Tenga en cuenta que deshabilitar las cookies puede afectar la funcionalidad
                            de este y otros sitios web que visite.
                        </p>

                        <h3>6.3 Opt-out de Google Analytics</h3>
                        <p>
                            Puede desactivar el seguimiento de Google Analytics en todos los sitios web
                            instalando el{" "}
                            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                                complemento de inhabilitación de Google Analytics para navegadores
                            </a>.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="legal-section">
                        <h2>7. Actualizaciones de esta Política</h2>
                        <p>
                            Poszy E.I.R.L. se reserva el derecho de actualizar esta Política de Cookies
                            cuando sea necesario, ya sea por cambios en las tecnologías utilizadas, en la
                            legislación aplicable o en las prácticas de nuestro sitio. La fecha de la última
                            actualización aparece al inicio de este documento.
                        </p>
                        <p>
                            Si realizamos cambios significativos en las cookies que utilizamos, le informaremos
                            mostrando nuevamente el banner de consentimiento para que pueda actualizar
                            sus preferencias.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="legal-section">
                        <h2>8. Contacto</h2>
                        <p>
                            Para cualquier consulta sobre nuestra Política de Cookies o el tratamiento de
                            sus datos personales, puede contactarnos en:
                        </p>
                        <ul>
                            <li><strong>Correo electrónico:</strong> <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a></li>
                            <li><strong>Teléfono / WhatsApp:</strong> +1 (809) 499-8166</li>
                            <li><strong>Dirección:</strong> Esperanza, Valverde — República Dominicana</li>
                        </ul>
                    </section>

                    <hr className="legal-divider" />

                    <div className="legal-nav-links">
                        <a href="/privacidad">Política de Privacidad</a>
                        <a href="/terminos">Términos y Condiciones</a>
                        <a href="/aviso-legal">Aviso Legal</a>
                        <a href="/">Volver al inicio</a>
                    </div>

                </div>
            </div>
        </main>
    );
}
