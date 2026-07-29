"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type TabId = "sobre" | "projetos" | "contato";

const COMMANDS: { id: TabId; index: string; label: string }[] = [
  { id: "sobre", index: "01", label: "Descobrir quem eu sou" },
  { id: "projetos", index: "02", label: "Explorar meus projetos" },
  { id: "contato", index: "03", label: "Iniciar contato" },
];

interface TerminalTabsProps {
  content: Record<TabId, React.ReactNode>;
}

export default function TerminalTabs({ content }: TerminalTabsProps) {
  // null = nenhum item selecionado ainda — estado inicial minimalista
  const [activeTab, setActiveTab] = useState<TabId | null>(null);

  function runCommand(id: TabId) {
    // clicar de novo no item ativo desmarca a seleção
    setActiveTab((current) => (current === id ? null : id));
  }

  return (
    <section className="mx-auto max-w-content px-6 sm:px-10 lg:px-8">
      {/* menu de boot */}
      <div className="flex flex-col items-center gap-8 pb-20 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-600 sm:text-sm">
          [ Acesso liberado: selecione um diretório ]
        </p>

        <div
          role="tablist"
          aria-label="Navegação do portfólio"
          className="flex flex-col items-center gap-5"
        >
          {COMMANDS.map((cmd) => {
            const isActive = activeTab === cmd.id;
            return (
              <button
                key={cmd.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => runCommand(cmd.id)}
                className={`font-mono text-base transition-colors duration-150 sm:text-lg ${
                  isActive
                    ? "text-emerald-400"
                    : "text-zinc-500 hover:text-emerald-400"
                }`}
              >
                [{cmd.index}] {cmd.label}
                {isActive && (
                  <span aria-hidden="true" className="ml-2 animate-pulse">
                    _
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* área de output — só renderiza o conteúdo da aba ativa */}
      <AnimatePresence mode="wait">
        {activeTab && (
          <motion.div
            key={activeTab}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {content[activeTab]}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}