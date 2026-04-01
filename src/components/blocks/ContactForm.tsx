"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-label">Contacto</span>
                    <h2 className="section-heading">Hablemos de tu proyecto</h2>
                    <p className="section-subheading">La primera consulta es totalmente gratis. Sin compromiso.</p>
                </div>

                <div className="contact-wrapper" style={{ maxWidth: "680px", margin: "0 auto" }}>
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="contact-form-box"
                    >
                        {status === "success" ? (
                            <div className="contact-success">
                                <div className="contact-success-icon">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                                    ¡Mensaje enviado!
                                </h3>
                                <p style={{ color: "var(--text-2)", marginBottom: "1.5rem" }}>
                                    Te respondemos en menos de 24 horas.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    style={{ color: "var(--red)", textDecoration: "underline", fontSize: "0.875rem" }}
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="contact-name-email-grid">
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        <label htmlFor="name" className="contact-label">Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Tu nombre"
                                            className="contact-input"
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        <label htmlFor="email" className="contact-label">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="tu@email.com"
                                            className="contact-input"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                                    <label htmlFor="service" className="contact-label">Servicio de interés</label>
                                    <select id="service" className="contact-input">
                                        <option value="">Seleccionar servicio...</option>
                                        <option>Plan Básico</option>
                                        <option>Plan Profesional</option>
                                        <option>Plan Completo</option>
                                        <option>Software a Medida</option>
                                        <option>Otro / Consulta general</option>
                                    </select>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                                    <label htmlFor="message" className="contact-label">Mensaje</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        placeholder="Cuéntanos sobre tu proyecto o negocio..."
                                        className="contact-input"
                                        style={{ resize: "none" }}
                                    />
                                </div>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                                    <span className="contact-privacy">* Respetamos tu privacidad. Sin spam.</span>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="btn-primary"
                                    >
                                        {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                                        {status !== "submitting" && <Send size={15} />}
                                    </button>
                                </div>

                                {status === "error" && (
                                    <div className="contact-error">
                                        <AlertCircle size={16} />
                                        Hubo un error. Intenta nuevamente.
                                    </div>
                                )}
                            </>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
