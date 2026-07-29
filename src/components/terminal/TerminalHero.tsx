"use client";

import { useEffect, useState } from "react";
import TerminalPrompt from "./TerminalPrompt";

const SUBTITLE =
  "Full-stack dev. Quebra deadline de hackathon há mais tempo que tira carteira de motorista.";

export default function TerminalHero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(SUBTITLE.slice(0, i));
      if (i >= SUBTITLE.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-zinc-800 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <TerminalPrompt command="whoami" />

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tighter text-zinc-100 sm:text-6xl">
          Thalisson Douglas
          <span className="text-[#39ff88]">.</span>
        </h1>

        <p className="mt-2 text-base text-zinc-500 sm:text-lg">
          17 anos de idade
          <span className="text-zinc-700"> · </span>0 anos de paciência pra
          código genérico.
        </p>

        <p className="mt-8 min-h-[3lh] max-w-2xl border-l-2 border-[#39ff88]/40 pl-4 text-base text-zinc-400 sm:text-lg">
          {typed}
          <span
            className={`ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[#39ff88] ${
              done ? "cursor-blink" : ""
            }`}
          />
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {["Next.js", "React", "Node.js", "TypeScript", "Azure", "MySQL"].map(
            (tech) => (
              <span
                key={tech}
                className="border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div className="mt-10">
          <a
            href="#projetos"
            className="inline-block border border-[#39ff88] bg-[#39ff88]/10 px-5 py-3 text-sm font-bold text-[#39ff88] transition-colors hover:bg-[#39ff88] hover:text-[#0a0a0a]"
          >
            $ ls ./projetos --winners
          </a>
        </div>
      </div>
    </section>
  );
}