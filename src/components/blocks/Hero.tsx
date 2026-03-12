"use client";

import { useRef, CSSProperties, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { SiteData } from "@/content/site-data";

const SHAPES = [
    { w: 130, h: 130, top: "14%",  left: "6%",   rotX: 22,  rotY: 28,  depth: 0.022, delay: 0 },
    { w: 75,  h: 75,  top: "18%",  left: "82%",  rotX: -14, rotY: 22,  depth: 0.04,  delay: 0.15 },
    { w: 55,  h: 55,  top: "60%",  left: "88%",  rotX: 18,  rotY: -22, depth: 0.035, delay: 0.3 },
    { w: 95,  h: 95,  top: "68%",  left: "4%",   rotX: -18, rotY: 14,  depth: 0.018, delay: 0.45 },
    { w: 45,  h: 45,  top: "42%",  left: "76%",  rotX: 12,  rotY: -28, depth: 0.05,  delay: 0.2 },
    { w: 65,  h: 65,  top: "35%",  left: "14%",  rotX: -10, rotY: 20,  depth: 0.03,  delay: 0.35 },
];

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
    }),
};

function FloatingShape({ shape, springX, springY }: {
    shape: typeof SHAPES[number];
    springX: ReturnType<typeof useSpring>;
    springY: ReturnType<typeof useSpring>;
}) {
    const x = useTransform(springX, [0, 1], [-(shape.depth * 600), shape.depth * 600]);
    const y = useTransform(springY, [0, 1], [-(shape.depth * 600), shape.depth * 600]);

    const posStyle: CSSProperties = {
        position: "absolute",
        width: shape.w,
        height: shape.h,
        top: shape.top,
        left: shape.left,
    };

    const rotStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        transform: `perspective(700px) rotateX(${shape.rotX}deg) rotateY(${shape.rotY}deg)`,
        border: "1px solid rgba(220, 30, 30, 0.2)",
        boxShadow: "0 0 20px rgba(220, 30, 30, 0.06), inset 0 0 20px rgba(220, 30, 30, 0.03)",
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shape.delay + 0.5, duration: 1, ease: "easeOut" }}
            style={{ ...posStyle, x, y }}
        >
            <div style={rotStyle} />
        </motion.div>
    );
}

// ─── Tron trail canvas ────────────────────────────────────────────────────────
interface TrailPoint { x: number; y: number; t: number; }

function useTronTrail(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
    const points = useRef<TrailPoint[]>([]);
    const raf = useRef<number>(0);
    const DURATION = 700; // ms each point lives

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isDark = !document.body.hasAttribute("data-mode");
        const now = Date.now();

        // Prune old points
        points.current = points.current.filter(p => now - p.t < DURATION);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (points.current.length < 2) {
            raf.current = requestAnimationFrame(draw);
            return;
        }

        for (let i = 1; i < points.current.length; i++) {
            const prev = points.current[i - 1];
            const curr = points.current[i];
            const life = 1 - (now - curr.t) / DURATION; // 1=fresh → 0=gone
            if (life <= 0) continue;

            const r = isDark ? 220 : 10;
            const g = isDark ? 30  : 10;
            const b = isDark ? 30  : 10;

            // Outer soft glow
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.06 * life})`;
            ctx.lineWidth = 28;
            ctx.lineCap = "round";
            ctx.stroke();

            // Mid glow
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.2 * life})`;
            ctx.lineWidth = 10;
            ctx.stroke();

            // Inner core
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${0.75 * life})`;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Bright centre line
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(curr.x, curr.y);
            ctx.strokeStyle = isDark
                ? `rgba(255,180,180,${0.95 * life})`
                : `rgba(0,0,0,${0.9 * life})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
        }

        raf.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        raf.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(raf.current);
    }, [draw]);

    const addPoint = useCallback((x: number, y: number) => {
        points.current.push({ x, y, t: Date.now() });
        // Keep max 120 points to avoid memory growth
        if (points.current.length > 120) points.current.shift();
    }, []);

    return { addPoint };
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = ({ content }: { content: SiteData["hero"] }) => {
    const containerRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const rawX = useMotionValue(0.5);
    const rawY = useMotionValue(0.5);
    const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
    const springY = useSpring(rawY, { stiffness: 60, damping: 20 });

    const { addPoint } = useTronTrail(canvasRef);

    // Sync canvas size to section size
    useEffect(() => {
        const el = containerRef.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;
        const sync = () => {
            canvas.width  = el.offsetWidth;
            canvas.height = el.offsetHeight;
        };
        sync();
        const ro = new ResizeObserver(sync);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        rawX.set((e.clientX - rect.left) / rect.width);
        rawY.set((e.clientY - rect.top) / rect.height);
        addPoint(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        rawX.set(0.5);
        rawY.set(0.5);
    };

    return (
        <section
            ref={containerRef}
            className="hero-section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Grid background */}
            <div className="hero-bg-grid" />
            <div className="hero-bg-radial" />

            {/* Tron trail canvas — sits above bg, below content */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            />

            {/* 3D Floating Shapes */}
            {SHAPES.map((shape, i) => (
                <FloatingShape key={i} shape={shape} springX={springX} springY={springY} />
            ))}

            {/* Center content */}
            <div className="hero-content-center">
                <motion.div
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="hero-eyebrow">
                        <span className="hero-eyebrow-dot" />
                        Agencia de diseño web · Esperanza, Valverde RD
                    </span>
                </motion.div>

                <motion.h1 className="hero-title">
                    <motion.span
                        custom={1}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: "block" }}
                    >
                        {content.title.line1}
                    </motion.span>
                    <motion.span
                        custom={2}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="hero-highlight"
                    >
                        {content.title.highlight}
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    custom={3}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {content.subtitle}
                </motion.p>

                <motion.div
                    className="hero-actions"
                    custom={4}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <a href="#work" className="btn-primary">
                        {content.ctaPrimary} <ArrowRight size={16} />
                    </a>
                    <a href="#contact" className="btn-secondary">
                        {content.ctaSecondary}
                    </a>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className="hero-scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
};
