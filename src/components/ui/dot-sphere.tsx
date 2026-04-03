"use client";

import { useEffect, useRef } from "react";

interface DotSphereProps {
    dotGap?: number;
    sphereRadius?: number;
    dotRadiusMax?: number;
    speed?: number;
    followMouse?: boolean;
}

class Ease {
    value: number;
    begin: number;
    end: number;
    pow: number;
    maxDuration: number;
    time: number;
    duration: number;

    constructor(value: number, pow: number, duration: number, timeBegin: number) {
        this.value = this.begin = this.end = value;
        this.pow = pow;
        this.maxDuration = duration;
        this.time = timeBegin;
        this.duration = 0;
        this.init();
    }

    init() {
        this.begin = this.end;
        this.end = Math.random();
        this.time = 0;
        this.duration = Math.sqrt(Math.abs(this.end - this.begin)) * this.maxDuration;
    }

    update(timeChange = 1) {
        let timeRatio = this.time / this.duration;
        if (timeRatio < 0.5) {
            timeRatio = 0.5 * Math.pow(timeRatio * 2, this.pow);
        } else {
            timeRatio = 1 - 0.5 * Math.pow((1 - timeRatio) * 2, this.pow);
        }
        this.value = this.begin + timeRatio * (this.end - this.begin);
        this.time += timeChange;
        if (this.time > this.duration) this.init();
    }
}

export function DotSphere({
    dotGap = 18,
    sphereRadius = 180,
    dotRadiusMax = 2.5,
    speed = 0.12,
    followMouse = false,
}: DotSphereProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stateRef = useRef({
        center: { x: 0, y: 0 },
        windowSize: { w: 0, h: 0 },
        circleNumber: { x: 0, y: 0 },
        posStart: { x: 0, y: 0 },
        easeX: new Ease(0.5, 2, 60, 0),
        easeY: new Ease(0.5, 2, 60, 0),
        animationId: 0,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const state = stateRef.current;

        const isDark = () => !document.body.hasAttribute("data-mode");

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const w = parent.clientWidth;
            const h = parent.clientHeight;
            canvas.width = w;
            canvas.height = h;
            state.windowSize = { w, h };
            state.center = { x: w / 2, y: h / 2 };
            state.circleNumber = {
                x: Math.floor(w / dotGap) + 2,
                y: Math.floor(h / dotGap) + 1,
            };
            state.posStart = {
                x: Math.round((w - (state.circleNumber.x - 1) * dotGap) / 2),
                y: Math.round((h - (state.circleNumber.y - 1) * dotGap) / 2),
            };
        };

        const draw = () => {
            state.animationId = requestAnimationFrame(draw);

            if (!followMouse) {
                state.easeX.update(speed);
                state.easeY.update(speed);
                state.center.x = state.easeX.value * state.windowSize.w;
                state.center.y = state.easeY.value * state.windowSize.h;
            }

            const dark = isDark();
            ctx.clearRect(0, 0, state.windowSize.w, state.windowSize.h);

            for (let i = 0; i < state.circleNumber.x; i++) {
                for (let j = 0; j < state.circleNumber.y; j++) {
                    const gapX = j % 2 === 0 ? -dotGap / 2 : 0;
                    const x = state.posStart.x + gapX + i * dotGap;
                    const y = state.posStart.y + j * dotGap;
                    const dx = x - state.center.x;
                    const dy = y - state.center.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance <= sphereRadius) {
                        const alpha = 1 - distance / sphereRadius;
                        const radius = dotRadiusMax * alpha;

                        ctx.save();
                        ctx.globalAlpha = alpha * 0.4;
                        ctx.beginPath();
                        ctx.fillStyle = dark
                            ? `rgba(220, 30, 30, ${alpha})`
                            : `rgba(220, 30, 30, ${alpha * 0.7})`;
                        ctx.arc(x, y, radius, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.closePath();
                        ctx.restore();
                    }
                }
            }
        };

        const onMouse = (e: MouseEvent) => {
            if (!followMouse) return;
            const rect = canvas.getBoundingClientRect();
            state.center.x = e.clientX - rect.left;
            state.center.y = e.clientY - rect.top;
        };

        resize();
        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", onMouse);
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", onMouse);
            cancelAnimationFrame(state.animationId);
        };
    }, [dotGap, sphereRadius, dotRadiusMax, speed, followMouse]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: followMouse ? "auto" : "none",
                zIndex: 1,
            }}
        />
    );
}
