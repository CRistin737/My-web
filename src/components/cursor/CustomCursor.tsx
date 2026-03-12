"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        setMounted(true);

        const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setVisible(true); };
        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        const checkMode = () => setIsDark(!document.body.hasAttribute("data-mode"));
        checkMode();

        const observer = new MutationObserver(checkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ["data-mode"] });

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("mouseenter", onEnter);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("mouseenter", onEnter);
            observer.disconnect();
        };
    }, []);

    if (!mounted) return null;

    const color = isDark ? "#DC1E1E" : "#0a0a0a";
    const shadow = isDark ? "0 0 8px rgba(220,30,30,0.8)" : "0 0 8px rgba(0,0,0,0.4)";

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: color,
                boxShadow: shadow,
                pointerEvents: "none",
                zIndex: 99999,
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
                opacity: visible ? 1 : 0,
            }}
        />
    );
};
