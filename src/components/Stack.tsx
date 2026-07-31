"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

interface SkillItem {
  name: string;
  category: string;
}

// Sem níveis, sem porcentagem — a categoria é a única informação
// estrutural que o badge precisa carregar.
const SKILLS: SkillItem[] = [
  { name: "Next.js / React", category: "Front-end" },
  { name: "TypeScript / JavaScript", category: "Linguagem" },
  { name: "Node.js", category: "Back-end" },
  { name: "MySQL", category: "Banco de dados" },
  { name: "Postman / API testing", category: "Testes" },
  { name: "Azure / Vercel", category: "Cloud / Deploy" },
];

export default function Stack() {
  return (
    <section className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="02" label="Stack" />

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
          Ferramentas que uso todo dia, sem enfeite.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
              className="group rounded-md border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-zinc-900/70 hover:shadow-[0_0_24px_-10px_rgba(52,211,153,0.35)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 transition-colors duration-300 group-hover:text-emerald-400/80">
                {skill.category}
              </span>
              <p className="mt-2 text-sm font-medium text-zinc-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}