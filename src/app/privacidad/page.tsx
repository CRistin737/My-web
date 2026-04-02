import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | XVE Studio",
    description: "Política de Privacidad de XVE Studio, operada por Poszy E.I.R.L. Conforme a la Ley 172-13 de República Dominicana.",
    robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidad() {
    return (
        <main className="theme-xve" style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "6rem" }}>
            <div className="section-container" style={{ maxWidth: "860px" }}>
                <div className="legal-doc">

                    <p className="legal-meta">Última actualización: 2 de abril de 2026</p>
                    <h1 className="legal-title">Política de Privacidad</h1>
                    <p className="legal-subtitle">
                        XVE Studio es una marca comercial operada por <strong>Poszy E.I.R.L.</strong>, empresa
                        debidamente constituida bajo las leyes de la República Dominicana. La presente Política
                        de Privacidad ha sido redactada en cumplimiento de la{" "}
                        <strong>Ley No. 172-13 sobre Protección Integral de los Datos Personales</strong> y del
                        artículo 44 de la Constitución de la República Dominicana, que garantiza el derecho a
                        la intimidad y la protección de los datos personales.
                    </p>
                    <p className="legal-lead">
                        Al utilizar el sitio web <strong>xvestudio.com</strong> y sus formularios de contacto,
                        usted acepta las prácticas descritas en esta política. Le recomendamos leerla
                        detenidamente antes de compartir cualquier información personal con nosotros.
                    </p>

                    <hr className="legal-divider" />

                    {/* 1 */}
                    <section className="legal-section">
                        <h2>1. Identificación del Responsable del Tratamiento</h2>
                        <p>
                            De conformidad con el artículo 5 de la Ley 172-13, el responsable del tratamiento de
                            sus datos personales es:
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
                        <h2>2. Datos Personales que Recopilamos</h2>
                        <p>
                            De conformidad con el principio de minimización de datos establecido en la Ley 172-13,
                            únicamente recopilamos los datos estrictamente necesarios para los fines descritos en
                            esta política. Los datos que tratamos son:
                        </p>

                        <h3>2.1 Datos proporcionados voluntariamente por el usuario</h3>
                        <p>
                            A través del formulario de contacto disponible en nuestro sitio web, recopilamos:
                        </p>
                        <ul>
                            <li><strong>Nombre completo</strong> — para identificarle y dirigirnos a usted de forma personalizada.</li>
                            <li><strong>Dirección de correo electrónico</strong> — para responder a su solicitud de información o cotización.</li>
                            <li><strong>Servicio de interés</strong> — para orientar adecuadamente su consulta hacia el área correspondiente.</li>
                            <li><strong>Mensaje o descripción del proyecto</strong> — para comprender sus necesidades y ofrecer una propuesta adecuada.</li>
                        </ul>
                        <p>
                            <strong>Importante:</strong> No contamos con sistema de registro de usuarios, creación de cuentas ni
                            base de datos de usuarios del sitio web. No almacenamos contraseñas ni información de
                            pagos a través de este sitio.
                        </p>

                        <h3>2.2 Datos recopilados automáticamente</h3>
                        <p>
                            Al navegar por nuestro sitio web, recopilamos automáticamente, a través de herramientas
                            de analítica web, información técnica agregada y anonimizada que incluye:
                        </p>
                        <ul>
                            <li>Páginas visitadas y tiempo de permanencia</li>
                            <li>Tipo de dispositivo, sistema operativo y navegador</li>
                            <li>País o región de origen de la visita (dato geolocalizado de forma genérica)</li>
                            <li>Fuente de tráfico (búsqueda orgánica, redes sociales, acceso directo)</li>
                            <li>Interacciones con elementos de la página (clics, desplazamiento)</li>
                        </ul>
                        <p>
                            Esta información se recopila mediante Google Tag Manager y Google Analytics, y se
                            utiliza exclusivamente para mejorar la experiencia del usuario y la eficacia del sitio
                            web. Consulte nuestra <a href="/cookies">Política de Cookies</a> para más detalles.
                        </p>

                        <h3>2.3 Datos de preferencias del dispositivo</h3>
                        <p>
                            Guardamos en el almacenamiento local de su navegador (<em>localStorage</em>) su
                            preferencia de modo de visualización (oscuro o claro). Esta información nunca
                            abandona su dispositivo y no es transmitida a nuestros servidores.
                        </p>
                    </section>

                    {/* 3 */}
                    <section className="legal-section">
                        <h2>3. Finalidad del Tratamiento</h2>
                        <p>
                            De conformidad con el principio de finalidad establecido en el artículo 6 de la Ley 172-13,
                            sus datos personales son tratados exclusivamente para las siguientes finalidades:
                        </p>
                        <ol>
                            <li>
                                <strong>Atención de consultas y solicitudes de cotización:</strong> Procesamos los
                                datos del formulario de contacto para responder a sus preguntas, enviarle información
                                sobre nuestros servicios y preparar propuestas comerciales a su medida.
                            </li>
                            <li>
                                <strong>Comunicación comercial no invasiva:</strong> Podemos contactarle para dar
                                seguimiento a su consulta o informarle sobre servicios relacionados con su solicitud
                                original. Nunca le añadiremos a listas de correo masivo sin su consentimiento explícito.
                            </li>
                            <li>
                                <strong>Mejora de la experiencia del sitio web:</strong> Los datos analíticos
                                agregados nos permiten identificar áreas de mejora, optimizar el rendimiento y
                                personalizar el contenido del sitio.
                            </li>
                            <li>
                                <strong>Cumplimiento de obligaciones legales:</strong> En los casos en que la
                                legislación dominicana vigente nos obligue a conservar o reportar determinada
                                información.
                            </li>
                        </ol>
                    </section>

                    {/* 4 */}
                    <section className="legal-section">
                        <h2>4. Base Jurídica del Tratamiento</h2>
                        <p>
                            El tratamiento de sus datos personales se fundamenta en las siguientes bases jurídicas,
                            conforme al artículo 5 de la Ley 172-13:
                        </p>
                        <ul>
                            <li>
                                <strong>Consentimiento del interesado:</strong> Al enviar el formulario de contacto,
                                usted otorga su consentimiento expreso para el tratamiento de sus datos con las
                                finalidades indicadas.
                            </li>
                            <li>
                                <strong>Ejecución de una relación precontractual:</strong> El tratamiento es necesario
                                para atender su solicitud de información sobre nuestros servicios y preparar una
                                propuesta comercial.
                            </li>
                            <li>
                                <strong>Interés legítimo:</strong> El análisis estadístico anonimizado del tráfico
                                web constituye un interés legítimo para la mejora de nuestros servicios, sin que
                                dicho interés prevalezca sobre sus derechos fundamentales.
                            </li>
                        </ul>
                    </section>

                    {/* 5 */}
                    <section className="legal-section">
                        <h2>5. Conservación de los Datos</h2>
                        <p>
                            De conformidad con el principio de temporalidad establecido en la Ley 172-13, sus datos
                            personales serán conservados únicamente durante el tiempo necesario para cumplir con las
                            finalidades para las que fueron recopilados:
                        </p>
                        <ul>
                            <li>
                                <strong>Datos del formulario de contacto:</strong> Se conservan durante el tiempo
                                necesario para gestionar su consulta y, de existir relación comercial, durante toda
                                su vigencia más un período adicional de hasta <strong>3 años</strong> contados desde
                                la última interacción, con fines de seguimiento y registro.
                            </li>
                            <li>
                                <strong>Datos analíticos:</strong> Los datos recopilados a través de herramientas de
                                analítica web se rigen por las políticas de retención propias de dichos servicios,
                                generalmente entre 14 y 26 meses.
                            </li>
                            <li>
                                <strong>Preferencias de usuario:</strong> Los datos guardados en <em>localStorage</em>{" "}
                                permanecen en su dispositivo hasta que usted los elimine o borre el almacenamiento del
                                navegador.
                            </li>
                        </ul>
                        <p>
                            Transcurridos estos plazos, los datos serán eliminados o anonimizados de forma segura.
                        </p>
                    </section>

                    {/* 6 */}
                    <section className="legal-section">
                        <h2>6. Compartición de Datos con Terceros</h2>
                        <p>
                            Poszy E.I.R.L. no vende, alquila ni cede sus datos personales a terceros con fines
                            comerciales. No obstante, para la prestación de nuestros servicios utilizamos
                            proveedores de servicios tecnológicos que actúan como encargados del tratamiento,
                            todos ellos sometidos a estrictas obligaciones de confidencialidad y con garantías
                            adecuadas de protección de datos:
                        </p>
                        <ul>
                            <li>
                                <strong>Servicio de envío de correo electrónico:</strong> Los mensajes enviados a
                                través del formulario de contacto son procesados y transmitidos mediante un proveedor
                                de servicios de correo electrónico transaccional, para garantizar su entrega segura
                                y confiable.
                            </li>
                            <li>
                                <strong>Analítica web:</strong> Utilizamos Google Tag Manager y Google Analytics para
                                recopilar datos estadísticos sobre el uso del sitio. Google LLC actúa como encargado
                                del tratamiento. Puede consultar la{" "}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                    Política de Privacidad de Google
                                </a>.
                            </li>
                            <li>
                                <strong>Infraestructura de alojamiento:</strong> El sitio web está alojado en
                                proveedores de infraestructura en la nube que cuentan con certificaciones y estándares
                                de seguridad de la industria.
                            </li>
                        </ul>
                        <p>
                            En todos los casos, únicamente compartimos los datos mínimos imprescindibles para la
                            prestación del servicio correspondiente.
                        </p>
                        <p>
                            Asimismo, podremos divulgar información cuando así lo exija la legislación dominicana
                            vigente, una orden judicial o una autoridad competente.
                        </p>
                    </section>

                    {/* 7 */}
                    <section className="legal-section">
                        <h2>7. Transferencias Internacionales de Datos</h2>
                        <p>
                            El uso de herramientas como Google Analytics puede implicar la transferencia de datos a
                            servidores ubicados fuera de la República Dominicana, particularmente en los Estados
                            Unidos. Dichas transferencias se realizan bajo las garantías y mecanismos contractuales
                            provistos por los respectivos proveedores, en cumplimiento de los estándares
                            internacionales de protección de datos aplicables.
                        </p>
                        <p>
                            Para las transferencias a través de Google, puede consultar sus{" "}
                            <a href="https://business.safety.google/gdpr/" target="_blank" rel="noopener noreferrer">
                                Cláusulas Contractuales Estándar
                            </a>.
                        </p>
                    </section>

                    {/* 8 */}
                    <section className="legal-section">
                        <h2>8. Medidas de Seguridad</h2>
                        <p>
                            De conformidad con el artículo 28 de la Ley 172-13, Poszy E.I.R.L. implementa medidas
                            técnicas y organizativas apropiadas para proteger sus datos personales contra accesos no
                            autorizados, pérdida, alteración o divulgación indebida. Entre estas medidas se incluyen:
                        </p>
                        <ul>
                            <li>Transmisión de datos mediante conexiones cifradas (protocolo HTTPS).</li>
                            <li>Control de acceso restringido a la información de contacto recibida.</li>
                            <li>Empleo de estándares de la industria para la gestión segura de comunicaciones.</li>
                            <li>Proveedores de servicios seleccionados por su cumplimiento en materia de seguridad.</li>
                        </ul>
                        <p>
                            No obstante, ningún sistema de transmisión de datos por internet es completamente
                            infalible. En caso de que usted detecte cualquier uso indebido de su información, le
                            invitamos a contactarnos de inmediato.
                        </p>
                    </section>

                    {/* 9 */}
                    <section className="legal-section">
                        <h2>9. Derechos del Titular de los Datos</h2>
                        <p>
                            De conformidad con los artículos 16 al 20 de la Ley 172-13, usted tiene derecho a:
                        </p>
                        <div className="legal-rights-grid">
                            <div className="legal-right-item">
                                <h4>Derecho de Acceso</h4>
                                <p>Conocer qué datos personales suyos tratamos, para qué finalidad, de qué fuente provienen y a quiénes han sido comunicados.</p>
                            </div>
                            <div className="legal-right-item">
                                <h4>Derecho de Rectificación</h4>
                                <p>Solicitar la corrección de datos inexactos, incompletos o desactualizados que le conciernan.</p>
                            </div>
                            <div className="legal-right-item">
                                <h4>Derecho de Cancelación (Supresión)</h4>
                                <p>Solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad por la que fueron recogidos o cuando retire su consentimiento.</p>
                            </div>
                            <div className="legal-right-item">
                                <h4>Derecho de Oposición</h4>
                                <p>Oponerse al tratamiento de sus datos por motivos relacionados con su situación particular, cuando el tratamiento se base en nuestro interés legítimo.</p>
                            </div>
                            <div className="legal-right-item">
                                <h4>Derecho a la Portabilidad</h4>
                                <p>Recibir sus datos en un formato estructurado y de uso común, o solicitar su transmisión directa a otro responsable, cuando sea técnicamente posible.</p>
                            </div>
                            <div className="legal-right-item">
                                <h4>Derecho a Revocar el Consentimiento</h4>
                                <p>Retirar en cualquier momento el consentimiento otorgado, sin que ello afecte la licitud del tratamiento realizado con anterioridad.</p>
                            </div>
                        </div>
                        <p>
                            Para ejercer cualquiera de estos derechos, puede contactarnos por escrito a{" "}
                            <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a> indicando claramente su
                            solicitud y adjuntando una copia de su documento de identidad. Responderemos en un
                            plazo máximo de <strong>10 días hábiles</strong> contados desde la recepción de su
                            solicitud, conforme a lo establecido en la Ley 172-13.
                        </p>
                    </section>

                    {/* 10 */}
                    <section className="legal-section">
                        <h2>10. Menores de Edad</h2>
                        <p>
                            Nuestros servicios están dirigidos exclusivamente a personas mayores de 18 años. No
                            recopilamos de forma consciente datos personales de menores de edad. Si usted tiene
                            conocimiento de que un menor ha proporcionado datos personales a través de nuestro
                            sitio, le rogamos que nos lo comunique a{" "}
                            <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a> para proceder a su
                            eliminación inmediata.
                        </p>
                    </section>

                    {/* 11 */}
                    <section className="legal-section">
                        <h2>11. Cookies y Tecnologías Similares</h2>
                        <p>
                            Nuestro sitio web utiliza cookies y tecnologías de seguimiento para mejorar la
                            experiencia de navegación y recopilar datos estadísticos. Para información detallada
                            sobre qué cookies utilizamos, con qué finalidad y cómo puede gestionarlas, consulte
                            nuestra <a href="/cookies">Política de Cookies</a>.
                        </p>
                    </section>

                    {/* 12 */}
                    <section className="legal-section">
                        <h2>12. Actualizaciones de esta Política</h2>
                        <p>
                            Poszy E.I.R.L. se reserva el derecho de actualizar esta Política de Privacidad en
                            cualquier momento, con el fin de adaptarla a cambios legislativos, jurisprudenciales,
                            o a las prácticas de tratamiento de datos que puedan evolucionar con el tiempo. Las
                            modificaciones serán publicadas en esta misma página con la fecha de actualización
                            visible. Si los cambios son significativos, le notificaremos de forma destacada en
                            el sitio web o por correo electrónico si disponemos de él.
                        </p>
                        <p>
                            El uso continuado del sitio web tras la publicación de las modificaciones implica su
                            aceptación.
                        </p>
                    </section>

                    {/* 13 */}
                    <section className="legal-section">
                        <h2>13. Legislación Aplicable y Jurisdicción</h2>
                        <p>
                            La presente Política de Privacidad se rige por las leyes de la República Dominicana,
                            en particular por la <strong>Ley No. 172-13 de Protección Integral de los Datos
                            Personales</strong>, la <strong>Ley No. 126-02 de Comercio Electrónico, Documentos
                            y Firmas Digitales</strong>, y el artículo 44 de la{" "}
                            <strong>Constitución de la República Dominicana</strong>.
                        </p>
                        <p>
                            Cualquier controversia derivada de la aplicación de esta política será sometida a los
                            tribunales competentes de la República Dominicana.
                        </p>
                    </section>

                    {/* 14 */}
                    <section className="legal-section">
                        <h2>14. Contacto para Asuntos de Privacidad</h2>
                        <p>
                            Para cualquier consulta, ejercicio de derechos o reclamación relativa a la protección
                            de sus datos personales, puede contactarnos a través de:
                        </p>
                        <ul>
                            <li><strong>Correo electrónico:</strong> <a href="mailto:xvestudio@hotmail.com">xvestudio@hotmail.com</a></li>
                            <li><strong>Teléfono / WhatsApp:</strong> +1 (809) 499-8166</li>
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
                        <a href="/terminos">Términos y Condiciones</a>
                        <a href="/cookies">Política de Cookies</a>
                        <a href="/aviso-legal">Aviso Legal</a>
                        <a href="/">Volver al inicio</a>
                    </div>

                </div>
            </div>
        </main>
    );
}
