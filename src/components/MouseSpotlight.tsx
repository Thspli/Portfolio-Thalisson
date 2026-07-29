"use client";

import { useEffect, useRef } from "react";

/**
 * "Lanterna" que segue o mouse e revela, de forma bem sutil, uma textura em
 * grid de pontos sobre o fundo escuro (bg-zinc-950). Não usa useState: a
 * posição do cursor é escrita direto em variáveis CSS (--mouse-x/--mouse-y)
 * no elemento, agrupada por requestAnimationFrame — evita re-render do React
 * e recalculo de estilo a cada um dos dezenas de eventos de mousemove por
 * segundo, escrevendo no máximo uma vez por frame.
 */
export default function MouseSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function writePosition(x: number, y: number) {
      const el = containerRef.current;
      if (!el) return;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    }

    // ponto de partida: centro da tela, pra não "pular" de um canto assim que o mouse se move
    targetRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    writePosition(targetRef.current.x, targetRef.current.y);

    if (prefersReducedMotion) return; // efeito estático, sem seguir o cursor

    function handleMouseMove(event: MouseEvent) {
      targetRef.current = { x: event.clientX, y: event.clientY };

      // já tem um frame agendado? não empilha outro
      if (frameRef.current !== null) return;

      frameRef.current = requestAnimationFrame(() => {
        writePosition(targetRef.current.x, targetRef.current.y);
        frameRef.current = null;
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      {/* textura fina em grid de pontos — só fica visível dentro do círculo de luz (mask-image) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(228, 228, 231, 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(circle 360px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(circle 360px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
        }}
      />

      {/* a "lanterna" em si — glow emerald sutil que dissipa pra transparente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 500px at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.15), transparent 70%)",
        }}
      />
    </div>
  );
}