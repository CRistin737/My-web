/**
 * ContactForm
 *
 * Summary: Contact section with a POST form that sends to /api/contact.
 *          Displays a toast notification on success or error.
 *
 * Architecture:
 *   - Controlled submit via handleSubmit; fields read from the DOM via namedItem
 *   - Toast state is local; closed via useCallback to avoid re-render churn
 *   - Layout classes defined in xve.css (.contact-*, .contact-submit-row)
 *
 * Responsive: Mobile-first. Name/email 1-col → 2-col at 768px (CSS grid).
 *             Submit row stacks vertically at <480px via .contact-submit-row.
 */
"use client";

import { useState, useCallback } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { ToastXVE, type ToastType } from "@/components/ui/toast-xve";

const SERVICES = [
    { group: "Diseño Web", items: ["Básico", "Profesional", "Completo", "Software a Medida"] },
    { group: "Mantenimiento", items: ["ESENCIAL", "CRECIMIENTO", "ÉLITE", "Por Demanda"] },
];

export const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [toast, setToast] = useState<{ visible: boolean; type: ToastType }>({ visible: false, type: "success" });

    const closeToast = useCallback(() => setToast(prev => ({ ...prev, visible: false })), []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            service: selectedService || "No especificado",
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error();
            setToast({ visible: true, type: "success" });
            form.reset();
            setSelectedService("");
        } catch {
            setToast({ visible: true, type: "error" });
        } finally {
            setSubmitting(false);
        }
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
                        <div className="contact-name-email-grid">
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <label htmlFor="name" className="contact-label">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
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
                                    name="email"
                                    required
                                    placeholder="tu@email.com"
                                    className="contact-input"
                                />
                            </div>
                        </div>

                        <div className="contact-service-picker">
                            <span className="contact-label">Servicio de interés</span>
                            {SERVICES.map((group) => (
                                <div key={group.group} className="contact-chip-group">
                                    <span className="contact-chip-group-label">{group.group}</span>
                                    <div className="contact-chips">
                                        {group.items.map((item) => {
                                            const value = `${group.group} — ${item}`;
                                            const active = selectedService === value;
                                            return (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    className={`contact-chip ${active ? "contact-chip--active" : ""}`}
                                                    onClick={() => setSelectedService(active ? "" : value)}
                                                >
                                                    {item}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
                            <label htmlFor="message" className="contact-label">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Cuéntanos sobre tu proyecto o negocio..."
                                className="contact-input"
                                style={{ resize: "none" }}
                            />
                        </div>

                        <div className="contact-submit-row">
                            <span className="contact-privacy">* Respetamos tu privacidad. Sin spam.</span>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary"
                            >
                                {submitting ? "Enviando..." : "Enviar Mensaje"}
                                {!submitting && <Send size={15} />}
                            </button>
                        </div>
                    </motion.form>

                    <ToastXVE visible={toast.visible} type={toast.type} onClose={closeToast} />
                </div>
            </div>
        </section>
    );
};
