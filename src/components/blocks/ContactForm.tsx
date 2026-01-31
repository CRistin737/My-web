"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // This would typically connect to Formspree, EmailJS, or your own API
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            setStatus("success"); // Toggle this to 'error' to test error state
        }, 1500);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-heading">Hablemos de tu proyecto</h2>
                    <p className="section-subheading">La primera consulta es totalmente gratis.</p>
                </div>

                <div className="contact-wrapper max-w-2xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                    >
                        {status === "success" ? (
                            <div className="text-center py-12">
                                <div className="flex justify-center mb-4 text-green-600">
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-gray-600">Te responderemos en menos de 24 horas.</p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 underline text-sm"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-bold text-sm uppercase">Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Tu nombre"
                                            className="p-3 border-2 border-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="font-bold text-sm uppercase">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="tu@email.com"
                                            className="p-3 border-2 border-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mb-8">
                                    <label htmlFor="message" className="font-bold text-sm uppercase">Mensaje</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        placeholder="Cuéntanos sobre tu negocio..."
                                        className="p-3 border-2 border-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                                    ></textarea>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">* Respetamos tu privacidad.</span>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="btn-primary flex items-center gap-2 group"
                                    >
                                        {status === "submitting" ? "Enviando..." : "Enviar Mensaje"}
                                        {!status.startsWith("subm") && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </div>

                                {status === "error" && (
                                    <div className="mt-4 flex items-center gap-2 text-red-600 text-sm font-bold">
                                        <AlertCircle size={16} /> Hubo un error. Intenta nuevamente.
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
