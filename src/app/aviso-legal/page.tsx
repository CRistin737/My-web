import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviso Legal | XVE Studio",
    description: "Aviso Legal de XVE Studio, operada por Poszy E.I.R.L. Información sobre el titular del sitio web xvestudio.com y sus condiciones de uso.",
    robots: { index: true, follow: true },
};

export default function AvisoLegal() {
    return (
        <main className="theme-xve" style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "6rem" }}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
                <div className="legal-doc">

                    <p className="legal-meta">Última actualización: 2 de abril de 2026</p>
                    <h1 className="legal-title">Aviso Legal</h1>
                    <p className="legal-subtitle">
                        En cumplimiento de la <strong>Ley No. 126-02 de Comercio Electrónico, Documentos y
                        Firmas Digitales</strong> de la República Dominicana, y de los principios de
                        transparencia e identificación del titular establecidos en dicha normativa, se pone
                        a disposición del usuario la siguiente información legal sobre el sitio web{" "}
                        <strong>xvestudio.com</strong>.
                    </p>

                    <hr className="legal-divider" />

                    {/* 1 */}
                    <section className="legal-section">
                        <h2>1. Datos Identificativos del Titular</h2>
                        <p>
                            El titular y responsable del sitio web <strong>xvestudio.com</strong> es:
                        </p>
                        <div className="legal-data-table">
                            <div className="legal-data-row">
                                <span className="legal-data-label">Razón social</span>
                                <span className="legal-data-value">Poszy E.I.R.L.</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Nombre comercial</span>
                                <span className="legal-data-value">XVE Studio</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Tipo de empresa</span>
                                <span className="legal-data-value">Empresa Individual de Responsabilidad Limitada (E.I.R.L.)</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Domicilio fiscal</span>
                                <span className="legal-data-value">Esperanza, Valverde — República Dominicana</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Correo electrónico</span>
                                <span className="legal-data-value">
                                    <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a>
                                </span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Teléfono</span>
                                <span className="legal-data-value">+1 (809) 499-8166</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">WhatsApp</span>
                                <span className="legal-data-value">
                                    <a href="https://wa.me/18094998166" target="_blank" rel="noopener noreferrer">
                                        wa.me/18094998166
                                    </a>
                                </span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Sitio web</span>
                                <span className="legal-data-value">
                                    <a href="https://xvestudio.com">https://xvestudio.com</a>
                                </span>
                            </div>
                        </div>
                        <p style={{ marginTop: "1.25rem" }}>
                            <em>XVE Studio es una marca comercial operada por Poszy E.I.R.L.</em>
                        </p>
                    </section>

                    {/* 2 */}
                    <section className="legal-section">
                        <h2>2. Objeto y Actividad</h2>
                        <p>
                            XVE Studio es una agencia de diseño y desarrollo web con sede en la República
                            Dominicana, especializada en la creación de experiencias digitales de alta
                            performance. Los servicios ofrecidos incluyen:
                        </p>
                        <ul>
                            <li>Diseño y desarrollo de sitios web y aplicaciones web</li>
                            <li>Animaciones 3D e interacciones visuales avanzadas</li>
                            <li>Desarrollo de plataformas de comercio electrónico</li>
                            <li>Software empresarial a medida (CRMs, dashboards, sistemas de gestión)</li>
                            <li>Optimización para motores de búsqueda (SEO)</li>
                            <li>Mantenimiento web y soporte técnico continuo</li>
                        </ul>
                        <p>
                            El sitio web <strong>xvestudio.com</strong> tiene carácter informativo y
                            comercial, y está dirigido a empresas, emprendedores y profesionales interesados
                            en los servicios descritos.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="legal-section">
                        <h2>3. Condiciones de Uso del Sitio Web</h2>
                        <p>
                            El acceso y uso del sitio web implica la aceptación plena de las condiciones
                            establecidas en los <a href="/terminos">Términos y Condiciones de Uso</a>. Le
                            recomendamos su lectura antes de continuar navegando.
                        </p>
                        <p>
                            El acceso al sitio web es libre y gratuito. No obstante, algunos servicios o
                            funcionalidades pueden requerir el suministro voluntario de datos de contacto
                            a través del formulario habilitado para tal fin.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="legal-section">
                        <h2>4. Propiedad Intelectual y Derechos de Autor</h2>
                        <p>
                            Todos los elementos que componen el sitio web <strong>xvestudio.com</strong>{" "}
                            — incluyendo, sin limitación, el diseño gráfico, la estructura de navegación,
                            el código fuente, los textos, las animaciones, los logotipos y cualquier otro
                            contenido audiovisual — son propiedad exclusiva de <strong>Poszy E.I.R.L.</strong>{" "}
                            o han sido utilizados bajo licencia de sus respectivos titulares.
                        </p>
                        <p>
                            Queda expresamente prohibida la reproducción, distribución, comunicación pública
                            o transformación de cualquier parte del sitio web sin contar con la autorización
                            previa y por escrito de Poszy E.I.R.L. El incumplimiento de esta prohibición
                            podrá dar lugar a las acciones legales pertinentes conforme a la legislación
                            dominicana vigente.
                        </p>
                        <p>
                            La marca y denominación comercial <strong>"XVE Studio"</strong>, así como su
                            identidad visual, son titularidad exclusiva de Poszy E.I.R.L.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="legal-section">
                        <h2>5. Exactitud y Veracidad de la Información</h2>
                        <p>
                            Poszy E.I.R.L. realiza sus mejores esfuerzos para mantener la información
                            publicada en el sitio web actualizada, completa y veraz. No obstante, no se
                            garantiza que dicha información esté libre de errores u omisiones, ni que sea
                            siempre la más actualizada.
                        </p>
                        <p>
                            Los precios, plazos y características de los servicios descritos en el sitio web
                            tienen carácter orientativo. Las condiciones definitivas de cualquier prestación
                            de servicios serán las acordadas formalmente entre las partes mediante propuesta
                            comercial o contrato escrito.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="legal-section">
                        <h2>6. Limitación de Responsabilidad</h2>
                        <p>
                            En la máxima medida permitida por la legislación dominicana, Poszy E.I.R.L. no
                            asume responsabilidad por:
                        </p>
                        <ul>
                            <li>
                                Los daños o perjuicios de cualquier naturaleza derivados del uso del sitio web
                                o de la imposibilidad de acceso al mismo.
                            </li>
                            <li>
                                Los errores o inexactitudes en el contenido publicado, siempre que no sean
                                atribuibles a dolo o negligencia grave.
                            </li>
                            <li>
                                El contenido de sitios web de terceros accesibles mediante enlaces incluidos
                                en el sitio web.
                            </li>
                            <li>
                                Las interrupciones en la disponibilidad del sitio causadas por mantenimiento,
                                actualizaciones o causas de fuerza mayor.
                            </li>
                        </ul>
                    </section>

                    {/* 7 */}
                    <section className="legal-section">
                        <h2>7. Protección de Datos Personales</h2>
                        <p>
                            El tratamiento de los datos personales de los usuarios del sitio web se realiza
                            conforme a lo establecido en nuestra{" "}
                            <a href="/privacidad">Política de Privacidad</a>, redactada en cumplimiento de la{" "}
                            <strong>Ley No. 172-13 de Protección Integral de los Datos Personales</strong> de
                            la República Dominicana y el artículo 44 de la Constitución dominicana, que
                            reconoce el derecho de toda persona a la protección de sus datos personales.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="legal-section">
                        <h2>8. Cookies</h2>
                        <p>
                            El sitio web utiliza cookies y tecnologías de almacenamiento local. La información
                            detallada sobre qué cookies se utilizan, con qué finalidad y cómo puede
                            gestionarlas se encuentra en nuestra <a href="/cookies">Política de Cookies</a>.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="legal-section">
                        <h2>9. Marco Legal Aplicable</h2>
                        <p>
                            El presente Aviso Legal y la relación entre el titular del sitio y sus usuarios
                            se rigen por la legislación vigente de la <strong>República Dominicana</strong>,
                            en particular:
                        </p>
                        <ul>
                            <li>
                                <strong>Ley No. 126-02</strong> — de Comercio Electrónico, Documentos y
                                Firmas Digitales
                            </li>
                            <li>
                                <strong>Ley No. 172-13</strong> — de Protección Integral de los Datos
                                Personales
                            </li>
                            <li>
                                <strong>Ley No. 53-07</strong> — sobre Crímenes y Delitos de Alta Tecnología
                            </li>
                            <li>
                                <strong>Ley No. 358-05</strong> — General de Protección de los Derechos del
                                Consumidor o Usuario
                            </li>
                            <li>
                                <strong>Constitución de la República Dominicana</strong> — artículos 40,
                                44 y 49, relativos a la dignidad humana, la privacidad y la libertad
                                de expresión
                            </li>
                            <li>
                                <strong>Código Civil Dominicano</strong> — en materia de obligaciones y
                                contratos
                            </li>
                        </ul>
                        <p>
                            Cualquier controversia derivada del acceso o uso del sitio web será sometida
                            a los tribunales competentes de la República Dominicana.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="legal-section">
                        <h2>10. Modificaciones del Aviso Legal</h2>
                        <p>
                            Poszy E.I.R.L. se reserva el derecho de modificar el presente Aviso Legal en
                            cualquier momento para adaptarlo a novedades legislativas, jurisprudenciales o
                            cambios en sus actividades. Las modificaciones serán publicadas en esta misma
                            página con la fecha de actualización correspondiente.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="legal-section">
                        <h2>11. Contacto</h2>
                        <p>
                            Para cualquier consulta relacionada con este Aviso Legal o con la actividad de
                            XVE Studio, puede contactarnos a través de los siguientes canales:
                        </p>
                        <ul>
                            <li><strong>Correo electrónico:</strong> <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a></li>
                            <li><strong>Teléfono:</strong> +1 (809) 499-8166</li>
                            <li>
                                <strong>WhatsApp:</strong>{" "}
                                <a href="https://wa.me/18094998166" target="_blank" rel="noopener noreferrer">
                                    wa.me/18094998166
                                </a>
                            </li>
                            <li><strong>Dirección:</strong> Esperanza, Valverde — República Dominicana</li>
                        </ul>
                    </section>

                    <hr className="legal-divider" />

                    <p className="legal-disclaimer">
                        Este documento fue redactado conforme a la legislación dominicana vigente como referencia
                        legal. Se recomienda la revisión por un abogado colegiado en la República Dominicana antes
                        de su publicación definitiva.
                    </p>

                    <div className="legal-nav-links">
                        <a href="/privacidad">Política de Privacidad</a>
                        <a href="/terminos">Términos y Condiciones</a>
                        <a href="/cookies">Política de Cookies</a>
                        <a href="/">Volver al inicio</a>
                    </div>

                </div>
            </div>
        </main>
    );
}
