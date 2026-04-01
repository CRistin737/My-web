"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";

export type ToastType = "success" | "error";

interface ToastProps {
    visible: boolean;
    type: ToastType;
    onClose: () => void;
}

const CONTENT = {
    success: {
        icon: CheckCircle,
        title: "Mensaje recibido",
        lines: [
            "Tu consulta llegó a nuestro equipo.",
            "Respuesta en menos de 24h — revisa tu email.",
        ],
        accent: "#22c55e",
    },
    error: {
        icon: AlertCircle,
        title: "Error de envío",
        lines: [
            "No pudimos procesar tu mensaje.",
            "Intenta de nuevo o escríbenos por WhatsApp.",
        ],
        accent: "#DC1E1E",
    },
};

export function ToastXVE({ visible, type, onClose }: ToastProps) {
    const c = CONTENT[type];
    const Icon = c.icon;

    useEffect(() => {
        if (!visible) return;
        const t = setTimeout(onClose, 6000);
        return () => clearTimeout(t);
    }, [visible, onClose]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="toast-xve-overlay"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.97 }}
                    transition={{ type: "spring", damping: 26, stiffness: 350 }}
                >
                    {/* Scan line */}
                    <motion.div
                        className="toast-xve-scan"
                        style={{ background: `linear-gradient(90deg, transparent 0%, ${c.accent} 50%, transparent 100%)` }}
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Top accent border */}
                    <div className="toast-xve-accent" style={{ background: c.accent }} />

                    <div className="toast-xve-body">
                        {/* Icon pulse */}
                        <div className="toast-xve-icon-wrap">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.15, type: "spring", damping: 15, stiffness: 400 }}
                            >
                                <Icon size={24} style={{ color: c.accent }} />
                            </motion.div>
                            <motion.div
                                className="toast-xve-icon-ring"
                                style={{ borderColor: c.accent }}
                                initial={{ scale: 0.5, opacity: 1 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            />
                        </div>

                        {/* Text */}
                        <div className="toast-xve-text">
                            <motion.span
                                className="toast-xve-title"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {c.title}
                            </motion.span>
                            {c.lines.map((line, i) => (
                                <motion.span
                                    key={i}
                                    className="toast-xve-line"
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    {line}
                                </motion.span>
                            ))}
                        </div>

                        {/* Close */}
                        <button className="toast-xve-close" onClick={onClose} aria-label="Cerrar">
                            <X size={14} />
                        </button>
                    </div>

                    {/* Auto-close progress bar */}
                    <motion.div
                        className="toast-xve-progress"
                        style={{ background: c.accent }}
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 6, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
