"use client";

import { useRef, useState, CSSProperties, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { SiteData } from "@/content/site-data";

const SHAPES = [
    { w: 130, h: 130, wMobile: 55,  top: "14%",  left: "6%",   rotX: 22,  rotY: 28,  depth: 0.022, delay: 0 },
    { w: 75,  h: 75,  wMobile: 35,  top: "18%",  left: "82%",  rotX: -14, rotY: 22,  depth: 0.04,  delay: 0.15 },
    { w: 55,  h: 55,  wMobile: 25,  top: "60%",  left: "88%",  rotX: 18,  rotY: -22, depth: 0.035, delay: 0.3 },
    { w: 95,  h: 95,  wMobile: 40,  top: "68%",  left: "4%",   rotX: -18, rotY: 14,  depth: 0.018, delay: 0.45 },
    { w: 45,  h: 45,  wMobile: 22,  top: "42%",  left: "76%",  rotX: 12,  rotY: -28, depth: 0.05,  delay: 0.2 },
    { w: 65,  h: 65,  wMobile: 30,  top: "35%",  left: "14%",  rotX: -10, rotY: 20,  depth: 0.03,  delay: 0.35 },
];

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
    }),
};

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [breakpoint]);
    return isMobile;
}

function FloatingShape({ shape, springX, springY, isMobile }: {
    shape: typeof SHAPES[number];
    springX: ReturnType<typeof useSpring>;
    springY: ReturnType<typeof useSpring>;
    isMobile: boolean;
}) {
    const size = isMobile ? shape.wMobile : shape.w;
    const x = useTransform(springX, [0, 1], [-(shape.depth * 600), shape.depth * 600]);
    const y = useTransform(springY, [0, 1], [-(shape.depth * 600), shape.depth * 600]);

    const posStyle: CSSProperties = {
        position: "absolute",
        width: size,
        height: size,
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
            animate={{ opacity: isMobile ? 0.5 : 1, scale: 1 }}
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
    const lastInputRef = useRef<number>(0);
    const startTimeRef = useRef<number>(Date.now());
    const DURATION = 700; // ms each point lives
    const IDLE_THRESHOLD = 1200; // ms before ambient animation kicks in

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isDark = !document.body.hasAttribute("data-mode");
        const now = Date.now();

        // Ambient idle animation — adds points along a lissajous curve so the
        // trail is visible even without mouse/touch input (mobile-friendly)
        const timeSinceInput = now - lastInputRef.current;
        const shouldAmbient = timeSinceInput > IDLE_THRESHOLD;
        if (shouldAmbient) {
            // Use CSS pixel space (canvas backing pixels are scaled by DPR)
            const dpr = window.devicePixelRatio || 1;
            const cssW = canvas.width / dpr;
            const cssH = canvas.height / dpr;
            const t = (now - startTimeRef.current) / 1000;
            const cx = cssW / 2;
            const cy = cssH / 2;
            const rx = cssW * 0.32;
            const ry = cssH * 0.28;
            const px = cx + Math.sin(t * 0.42) * rx;
            const py = cy + Math.cos(t * 0.65) * ry;
            points.current.push({ x: px, y: py, t: now });
            if (points.current.length > 160) points.current.shift();
        }

        // Prune old points
        points.current = points.current.filter(p => now - p.t < DURATION);

        // Use CSS pixel size for clearing (canvas is scaled by DPR via setTransform)
        const dpr = window.devicePixelRatio || 1;
        const cssWidth = canvas.width / dpr;
        const cssHeight = canvas.height / dpr;
        ctx.clearRect(0, 0, cssWidth, cssHeight);

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
    }, [canvasRef]);

    useEffect(() => {
        raf.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(raf.current);
    }, [draw]);

    const addPoint = useCallback((x: number, y: number) => {
        points.current.push({ x, y, t: Date.now() });
        lastInputRef.current = Date.now();
        // Keep max 160 points to avoid memory growth
        if (points.current.length > 160) points.current.shift();
    }, []);

    return { addPoint };
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = ({ content }: { content: SiteData["hero"] }) => {
    const containerRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isMobile = useIsMobile();

    const rawX = useMotionValue(0.5);
    const rawY = useMotionValue(0.5);
    const springX = useSpring(rawX, { stiffness: 60, damping: 20 });
    const springY = useSpring(rawY, { stiffness: 60, damping: 20 });

    const { addPoint } = useTronTrail(canvasRef);

    // Sync canvas size to section size with DPR scaling for sharp rendering on retina
    useEffect(() => {
        const el = containerRef.current;
        const canvas = canvasRef.current;
        if (!el || !canvas) return;
        const sync = () => {
            const dpr = window.devicePixelRatio || 1;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            // Backing store at DPR resolution
            canvas.width  = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            // CSS size stays at logical pixels
            canvas.style.width  = `${w}px`;
            canvas.style.height = `${h}px`;
            // Scale the context so we draw in CSS pixel coords
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.scale(dpr, dpr);
            }
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

    // Touch support — phones/tablets get the trail when finger drags across the hero
    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        if (!touch) return;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        rawX.set((touch.clientX - rect.left) / rect.width);
        rawY.set((touch.clientY - rect.top) / rect.height);
        addPoint(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        if (!touch) return;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        addPoint(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    return (
        <section
            ref={containerRef}
            className="hero-section"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
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
                <FloatingShape key={i} shape={shape} springX={springX} springY={springY} isMobile={isMobile} />
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
                        Diseño web · Esperanza, Valverde RD
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
                        style={{ display: "block" }}
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
                    <a href="#contact" className="btn-primary">
                        {content.ctaSecondary} <ArrowRight size={16} />
                    </a>
                    <a href="#work" className="btn-secondary">
                        {content.ctaPrimary}
                    </a>
                </motion.div>
            </div>

            {/* Scroll hint */}
        </section>
    );
};
