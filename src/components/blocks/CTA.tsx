"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { SiteData } from "@/content/site-data";

// ─── Wireframe Cube ──────────────────────────────────────────────────────────
function WireframeCube({ size, rotX, rotY, opacity }: {
    size: number; rotX: number; rotY: number; opacity: number;
}) {
    const faces = [
        { transform: `rotateY(0deg)   translateZ(${size / 2}px)` },
        { transform: `rotateY(180deg) translateZ(${size / 2}px)` },
        { transform: `rotateY(90deg)  translateZ(${size / 2}px)` },
        { transform: `rotateY(-90deg) translateZ(${size / 2}px)` },
        { transform: `rotateX(90deg)  translateZ(${size / 2}px)` },
        { transform: `rotateX(-90deg) translateZ(${size / 2}px)` },
    ];

    return (
        <div style={{
            width: size, height: size,
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            opacity,
        }}>
            {faces.map((f, i) => (
                <div key={i} style={{
                    position: "absolute",
                    width: size, height: size,
                    transformStyle: "preserve-3d",
                    transform: f.transform,
                    border: "1px solid rgba(220,30,30,0.35)",
                    background: "rgba(220,30,30,0.02)",
                    boxSizing: "border-box",
                }} />
            ))}
        </div>
    );
}

function RotatingCube({ size, speed, rotXBase, rotYBase, style }: {
    size: number; speed: number; rotXBase: number; rotYBase: number;
    style?: React.CSSProperties;
}) {
    return (
        <motion.div
            style={{ ...style, perspective: 800, position: "absolute" }}
            animate={{ rotateX: [rotXBase, rotXBase + 360], rotateY: [rotYBase, rotYBase + 360] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
            <WireframeCube size={size} rotX={0} rotY={0} opacity={1} />
        </motion.div>
    );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
export const CTA = ({ content }: { content: SiteData["cta"] }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const rawX = useMotionValue(0.5);
    const rawY = useMotionValue(0.5);
    const springX = useSpring(rawX, { stiffness: 50, damping: 20 });
    const springY = useSpring(rawY, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(springY, [0, 1], [6, -6]);
    const rotateY = useTransform(springX, [0, 1], [-8, 8]);

    const onMouseMove = (e: React.MouseEvent) => {
        const r = sectionRef.current?.getBoundingClientRect();
        if (!r) return;
        rawX.set((e.clientX - r.left) / r.width);
        rawY.set((e.clientY - r.top) / r.height);
    };
    const onMouseLeave = () => { rawX.set(0.5); rawY.set(0.5); };

    return (
        <section
            ref={sectionRef}
            className="cta-section"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            {/* Grid floor */}
            <div className="cta-grid-floor" />

            {/* Cubes — hidden on mobile via CSS */}
            <div className="cta-cube">
                <RotatingCube size={160} speed={18} rotXBase={20}  rotYBase={0}
                    style={{ left: "6%", top: "50%", transform: "translateY(-50%)" }} />
                <RotatingCube size={90}  speed={12} rotXBase={-15} rotYBase={45}
                    style={{ right: "8%", top: "20%" }} />
                <RotatingCube size={60}  speed={22} rotXBase={30}  rotYBase={20}
                    style={{ right: "18%", bottom: "15%" }} />
                <RotatingCube size={110} speed={16} rotXBase={10}  rotYBase={-30}
                    style={{ left: "18%", top: "12%" }} />
            </div>

            {/* Red orb glow */}
            <div className="cta-orb" />

            {/* Content with 3D tilt */}
            <motion.div
                className="cta-content"
                style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* 3D extruded heading */}
                <div className="cta-heading-wrap" style={{ transform: "translateZ(40px)" }}>
                    <h2 className="cta-heading cta-heading--3d">
                        {content.heading}
                    </h2>
                </div>

                <p className="cta-text" style={{ transform: "translateZ(20px)" }}>
                    {content.text}
                </p>

                <div style={{ transform: "translateZ(60px)" }}>
                    <a href="#contact" className="btn-cta-large cta-btn-glow">
                        {content.button} <ArrowRight size={18} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
