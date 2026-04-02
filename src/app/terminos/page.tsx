import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Términos y Condiciones | XVE Studio",
    description: "Términos y Condiciones de uso del sitio web de XVE Studio, operada por Poszy E.I.R.L. Conforme a la Ley 126-02 y el Código Civil de República Dominicana.",
    robots: { index: true, follow: true },
};

export default function TerminosYCondiciones() {
    return (
        <main className="theme-xve" style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "6rem" }}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
                <div className="legal-doc">

                    <p className="legal-meta">Última actualización: 2 de abril de 2026</p>
                    <h1 className="legal-title">Términos y Condiciones de Uso</h1>
                    <p className="legal-subtitle">
                        El presente documento establece los términos y condiciones que rigen el acceso y uso
                        del sitio web <strong>xvestudio.com</strong> (en adelante, "el Sitio"), titularidad de{" "}
                        <strong>Poszy E.I.R.L.</strong>, empresa que opera bajo la marca comercial{" "}
                        <strong>XVE Studio</strong>, con domicilio en Esperanza, Valverde, República Dominicana.
                    </p>
                    <p className="legal-lead">
                        De conformidad con la <strong>Ley No. 126-02 de Comercio Electrónico, Documentos y
                        Firmas Digitales</strong> de la República Dominicana y los principios generales del{" "}
                        <strong>Código Civil Dominicano</strong>, el acceso y uso del Sitio implica la
                        aceptación plena e incondicional de los presentes Términos y Condiciones. Si no está
                        de acuerdo con alguno de ellos, le rogamos que no utilice el Sitio.
                    </p>

                    <hr className="legal-divider" />

                    {/* 1 */}
                    <section className="legal-section">
                        <h2>1. Identificación del Titular</h2>
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
                                <span className="legal-data-label">Domicilio</span>
                                <span className="legal-data-value">Esperanza, Valverde — República Dominicana</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Correo electrónico</span>
                                <span className="legal-data-value">
                                    <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a>
                                </span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Teléfono / WhatsApp</span>
                                <span className="legal-data-value">+1 (809) 499-8166</span>
                            </div>
                            <div className="legal-data-row">
                                <span className="legal-data-label">Sitio web</span>
                                <span className="legal-data-value">
                                    <a href="https://xvestudio.com">https://xvestudio.com</a>
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* 2 */}
                    <section className="legal-section">
                        <h2>2. Objeto del Sitio Web</h2>
                        <p>
                            El Sitio tiene carácter informativo y comercial. Su finalidad es presentar los
                            servicios de diseño y desarrollo web ofrecidos por XVE Studio, incluyendo:
                        </p>
                        <ul>
                            <li>Diseño y desarrollo de sitios web y aplicaciones web</li>
                            <li>Animaciones 3D y experiencias visuales interactivas</li>
                            <li>Desarrollo de tiendas de comercio electrónico (<em>e-commerce</em>)</li>
                            <li>Software a medida: CRMs, dashboards y sistemas empresariales</li>
                            <li>Optimización para motores de búsqueda (SEO)</li>
                            <li>Mantenimiento web y soporte técnico continuo</li>
                        </ul>
                        <p>
                            El Sitio no constituye una plataforma de venta directa de productos o servicios
                            en línea. Las solicitudes de cotización y contratación se gestionan a través del
                            formulario de contacto o por los canales de comunicación directa indicados.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="legal-section">
                        <h2>3. Condiciones de Acceso y Uso</h2>

                        <h3>3.1 Uso permitido</h3>
                        <p>
                            El acceso y la navegación por el Sitio son gratuitos y están disponibles para
                            cualquier persona. El usuario se compromete a utilizar el Sitio de conformidad con
                            la ley, la moral, el orden público y los presentes Términos y Condiciones.
                        </p>

                        <h3>3.2 Usos prohibidos</h3>
                        <p>
                            Queda expresamente prohibido, en cumplimiento de la{" "}
                            <strong>Ley No. 53-07 sobre Crímenes y Delitos de Alta Tecnología</strong>:
                        </p>
                        <ul>
                            <li>Utilizar el Sitio con fines ilegales, fraudulentos o que perjudiquen a terceros.</li>
                            <li>
                                Intentar acceder de forma no autorizada a sistemas, servidores o bases de datos
                                relacionadas con el Sitio.
                            </li>
                            <li>
                                Introducir o transmitir virus, malware, código malicioso u otros elementos
                                informáticos perjudiciales.
                            </li>
                            <li>
                                Reproducir, distribuir, modificar o explotar el contenido del Sitio sin
                                autorización expresa por escrito de Poszy E.I.R.L.
                            </li>
                            <li>
                                Realizar ingeniería inversa, descompilar o desensamblar cualquier elemento
                                del Sitio.
                            </li>
                            <li>
                                Utilizar el Sitio para enviar comunicaciones no solicitadas (<em>spam</em>)
                                o para recopilar datos de terceros sin su consentimiento.
                            </li>
                            <li>
                                Suplantar la identidad de XVE Studio o Poszy E.I.R.L. en cualquier
                                comunicación o medio digital.
                            </li>
                        </ul>

                        <h3>3.3 Requisitos del usuario</h3>
                        <p>
                            El uso del formulario de contacto está dirigido a personas mayores de 18 años con
                            capacidad legal para contratar conforme al Código Civil Dominicano. Al utilizar
                            dicho formulario, el usuario declara cumplir con este requisito.
                        </p>
                    </section>

                    {/* 4 */}
                    <section className="legal-section">
                        <h2>4. Formulario de Contacto y Solicitudes de Servicio</h2>

                        <h3>4.1 Naturaleza de las comunicaciones</h3>
                        <p>
                            El envío de un mensaje a través del formulario de contacto no implica la
                            celebración de ningún contrato de prestación de servicios, ni genera obligación
                            alguna para ninguna de las partes. Constituye únicamente una solicitud de
                            información o cotización.
                        </p>

                        <h3>4.2 Veracidad de la información</h3>
                        <p>
                            El usuario garantiza que la información proporcionada en el formulario de contacto
                            es veraz, completa y actualizada. Poszy E.I.R.L. no se hace responsable de los
                            perjuicios derivados del suministro de datos falsos, inexactos o incompletos.
                        </p>

                        <h3>4.3 Plazo de respuesta</h3>
                        <p>
                            XVE Studio se compromete a responder las solicitudes recibidas en un plazo de{" "}
                            <strong>1 a 3 días hábiles</strong> desde su recepción, salvo circunstancias
                            excepcionales debidamente justificadas.
                        </p>

                        <h3>4.4 Contratación de servicios</h3>
                        <p>
                            La prestación efectiva de servicios estará regida por un contrato independiente
                            suscrito entre Poszy E.I.R.L. y el cliente, que contendrá las condiciones
                            específicas, plazos, precios y alcances acordados. En ausencia de contrato escrito,
                            la confirmación del servicio se realizará mediante comunicación escrita por
                            correo electrónico o aplicación de mensajería, que tendrá valor probatorio
                            conforme a la Ley 126-02.
                        </p>
                    </section>

                    {/* 5 */}
                    <section className="legal-section">
                        <h2>5. Propiedad Intelectual</h2>

                        <h3>5.1 Contenido del Sitio</h3>
                        <p>
                            Todo el contenido del Sitio — incluyendo, sin limitación, textos, gráficos,
                            logotipos, iconos, imágenes, animaciones, código fuente, diseño visual, estructura
                            y arquitectura del sitio — es propiedad exclusiva de Poszy E.I.R.L. o cuenta
                            con las licencias correspondientes, y está protegido por la legislación dominicana
                            e internacional sobre propiedad intelectual y derechos de autor.
                        </p>

                        <h3>5.2 Licencia de uso limitada</h3>
                        <p>
                            El acceso al Sitio no otorga al usuario ningún derecho sobre el contenido más
                            allá de la visualización en el navegador para uso personal y no comercial. Queda
                            expresamente prohibida cualquier reproducción, distribución, transformación o
                            comunicación pública sin autorización previa y por escrito de Poszy E.I.R.L.
                        </p>

                        <h3>5.3 Trabajos realizados para clientes</h3>
                        <p>
                            Los derechos de propiedad intelectual sobre los trabajos desarrollados para
                            clientes se regularán en el contrato de prestación de servicios correspondiente.
                            Como regla general, una vez completado el pago íntegro del proyecto, el cliente
                            adquirirá los derechos patrimoniales sobre los entregables acordados, salvo
                            disposición contraria en el contrato.
                        </p>

                        <h3>5.4 Marca XVE Studio</h3>
                        <p>
                            La denominación "XVE Studio" y su identidad visual constituyen una marca
                            comercial de Poszy E.I.R.L. Su uso no autorizado está expresamente prohibido.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="legal-section">
                        <h2>6. Precios y Condiciones Comerciales</h2>
                        <p>
                            Los precios indicados en el Sitio son orientativos y están expresados en{" "}
                            <strong>pesos dominicanos (RD$)</strong>, salvo indicación en contrario. Dichos
                            precios podrán variar en función de los requerimientos específicos de cada
                            proyecto. El precio definitivo será el acordado entre las partes mediante
                            propuesta comercial formal.
                        </p>
                        <p>
                            Cualquier servicio o funcionalidad que exceda el alcance descrito en los planes
                            publicados será cotizado por separado de forma transparente y con la aprobación
                            previa del cliente. XVE Studio se compromete a no ejecutar trabajos adicionales
                            sin autorización expresa.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="legal-section">
                        <h2>7. Disponibilidad del Sitio y Modificaciones</h2>
                        <p>
                            Poszy E.I.R.L. se esfuerza por mantener el Sitio disponible de forma continua,
                            pero no garantiza la ausencia de interrupciones derivadas de mantenimiento técnico,
                            actualizaciones, fallos en la infraestructura de terceros, o causas de fuerza
                            mayor. Nos reservamos el derecho de modificar, suspender o discontinuar
                            temporalmente el acceso al Sitio sin previo aviso.
                        </p>
                        <p>
                            Asimismo, Poszy E.I.R.L. se reserva el derecho de modificar el contenido del
                            Sitio, los precios orientativos, los servicios ofrecidos y los presentes Términos
                            y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde
                            el momento de su publicación en el Sitio.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="legal-section">
                        <h2>8. Enlaces a Terceros</h2>
                        <p>
                            El Sitio puede contener enlaces a sitios web de terceros (redes sociales,
                            plataformas de mensajería, etc.) que se proporcionan únicamente para conveniencia
                            del usuario. Poszy E.I.R.L. no controla ni es responsable del contenido,
                            prácticas de privacidad ni disponibilidad de dichos sitios externos. La inclusión
                            de un enlace no implica respaldo ni relación comercial con el sitio enlazado.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="legal-section">
                        <h2>9. Limitación de Responsabilidad</h2>
                        <p>
                            En la máxima medida permitida por la legislación dominicana vigente, Poszy E.I.R.L.
                            no será responsable de:
                        </p>
                        <ul>
                            <li>
                                Daños directos, indirectos, incidentales o consecuentes derivados del uso o
                                imposibilidad de uso del Sitio.
                            </li>
                            <li>
                                Errores, omisiones o inexactitudes en el contenido del Sitio, siempre que no
                                sean imputables a dolo o negligencia grave.
                            </li>
                            <li>
                                Interrupciones del Sitio causadas por mantenimiento, actualizaciones o
                                causas ajenas a nuestro control.
                            </li>
                            <li>
                                El contenido de sitios web enlazados desde el Sitio.
                            </li>
                            <li>
                                Daños producidos por el uso no autorizado del Sitio en incumplimiento de
                                los presentes Términos.
                            </li>
                        </ul>
                        <p>
                            La responsabilidad máxima de Poszy E.I.R.L. frente al usuario en relación con
                            el uso del Sitio no excederá, en ningún caso, de las cantidades efectivamente
                            pagadas por el usuario en el contexto de la relación comercial que originó el
                            perjuicio.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="legal-section">
                        <h2>10. Protección de Datos Personales</h2>
                        <p>
                            El tratamiento de los datos personales recopilados a través del Sitio se rige
                            por nuestra <a href="/privacidad">Política de Privacidad</a>, que forma parte
                            integrante de los presentes Términos y Condiciones y ha sido redactada conforme
                            a la <strong>Ley No. 172-13 de Protección Integral de los Datos Personales</strong>{" "}
                            de la República Dominicana.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="legal-section">
                        <h2>11. Cookies</h2>
                        <p>
                            El Sitio utiliza cookies y tecnologías de seguimiento conforme a lo establecido
                            en nuestra <a href="/cookies">Política de Cookies</a>. Al continuar navegando
                            en el Sitio y aceptar el uso de cookies, usted consiente su utilización de
                            acuerdo con dicha política.
                        </p>
                    </section>

                    {/* 12 */}
                    <section className="legal-section">
                        <h2>12. Nulidad Parcial</h2>
                        <p>
                            Si alguna disposición de los presentes Términos y Condiciones fuera declarada
                            nula, inválida o inaplicable por un tribunal competente, dicha declaración no
                            afectará la validez ni la aplicabilidad del resto de las disposiciones, que
                            continuarán en plena vigencia.
                        </p>
                    </section>

                    {/* 13 */}
                    <section className="legal-section">
                        <h2>13. Legislación Aplicable y Jurisdicción</h2>
                        <p>
                            Los presentes Términos y Condiciones se rigen e interpretan conforme a la
                            legislación vigente de la <strong>República Dominicana</strong>, en particular:
                        </p>
                        <ul>
                            <li>Ley No. 126-02 de Comercio Electrónico, Documentos y Firmas Digitales</li>
                            <li>Ley No. 172-13 de Protección Integral de los Datos Personales</li>
                            <li>Ley No. 53-07 sobre Crímenes y Delitos de Alta Tecnología</li>
                            <li>Ley No. 358-05 General de Protección de los Derechos del Consumidor o Usuario</li>
                            <li>Código Civil Dominicano y demás normativa aplicable</li>
                        </ul>
                        <p>
                            Cualquier controversia derivada de la interpretación o aplicación de los presentes
                            Términos será sometida a la jurisdicción de los tribunales competentes de la
                            República Dominicana, renunciando las partes expresamente a cualquier otro fuero
                            que pudiera corresponderles.
                        </p>
                    </section>

                    {/* 14 */}
                    <section className="legal-section">
                        <h2>14. Contacto</h2>
                        <p>
                            Para cualquier consulta relacionada con los presentes Términos y Condiciones,
                            puede contactarnos a través de:
                        </p>
                        <ul>
                            <li><strong>Correo electrónico:</strong> <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a></li>
                            <li><strong>Teléfono / WhatsApp:</strong> +1 (809) 499-8166</li>
                            <li><strong>WhatsApp directo:</strong> <a href="https://wa.me/18094998166" target="_blank" rel="noopener noreferrer">wa.me/18094998166</a></li>
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
                        <a href="/cookies">Política de Cookies</a>
                        <a href="/aviso-legal">Aviso Legal</a>
                        <a href="/">Volver al inicio</a>
                    </div>

                </div>
            </div>
        </main>
    );
}
