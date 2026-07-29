"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";

export type TabId = "sobre" | "projetos" | "contato";

const SECRET_COMMAND = "liberar";

const COMMANDS: { id: TabId; index: string; label: string }[] = [
  { id: "sobre", index: "01", label: "Sobre mim" },
  { id: "projetos", index: "02", label: "Meus projetos" },
  { id: "contato", index: "03", label: "Contato" },
];

interface TerminalProps {
  content: Record<TabId, ReactNode>;
}

interface HistoryLine {
  id: number;
  node: ReactNode;
}

let lineCounter = 0;
function nextLineId() {
  lineCounter += 1;
  return lineCounter;
}

/** `visitante@thalisson-os:~$ ` — reaproveitado tanto no prompt vivo quanto no eco do histórico. */
function PromptLabel() {
  return (
    <>
      <span className="text-emerald-400">visitante@thalisson-os</span>
      <span className="text-zinc-600">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-zinc-600">$</span>
    </>
  );
}

export default function Terminal({ content }: TerminalProps) {
  const [history, setHistory] = useState<HistoryLine[]>(() => [
    { id: nextLineId(), node: <p className="text-zinc-400">Thalisson OS [Versão 1.0.0]</p> },
    {
      id: nextLineId(),
      node: (
        <p className="text-zinc-400">
          Acesso restrito. Digite <span className="text-emerald-400">&apos;liberar&apos;</span>{" "}
          para iniciar a sessão.
        </p>
      ),
    },
  ]);
  const [value, setValue] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [history, isUnlocked]);

  function pushLine(node: ReactNode) {
    setHistory((prev) => [...prev, { id: nextLineId(), node }]);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const raw = value;
    const attempt = raw.trim().toLowerCase();
    if (!attempt) return;

    // ecoa a linha digitada no histórico, como um terminal real faria
    pushLine(
      <p className="text-zinc-300">
        <PromptLabel /> {raw}
      </p>
    );
    setValue("");

    if (attempt === SECRET_COMMAND) {
      pushLine(
        <p>
          <span className="text-zinc-400">Autenticando... </span>
          <span className="font-semibold text-emerald-400">Acesso Concedido.</span>{" "}
          <span className="text-zinc-500">Carregando interface...</span>
        </p>
      );
      setTimeout(() => setIsUnlocked(true), 700);
    } else {
      pushLine(
        <p className="text-red-400/80">
          bash: {raw}: comando não encontrado. Digite{" "}
          <span className="text-emerald-400">&apos;liberar&apos;</span> para continuar.
        </p>
      );
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  function runCommand(id: TabId) {
    setActiveTab((current) => (current === id ? null : id));
  }

  return (
    <section className="mx-auto max-w-content px-6 sm:px-10 lg:px-8">
      {/* janela de terminal */}
      <div className="mx-auto flex min-h-[450px] w-full max-w-4xl flex-col rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
        {/* cabeçalho estilo macOS */}
        <div className="flex items-center border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <p className="flex-1 text-center font-mono text-xs text-zinc-500">
            bash — root@thalisson-server
          </p>
          {/* espaçador que equilibra a largura dos 3 botões, mantendo o título centralizado de verdade */}
          <div className="w-[52px]" aria-hidden="true" />
        </div>

        {/* corpo do terminal */}
        <div
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 space-y-1.5 overflow-y-auto p-5 font-mono text-sm leading-relaxed sm:p-6"
        >
          {history.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              {line.node}
            </motion.div>
          ))}

          {!isUnlocked && (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <PromptLabel />
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Linha de comando"
                className="flex-1 bg-transparent text-zinc-100 caret-emerald-400 outline-none"
              />
            </form>
          )}

          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              role="tablist"
              aria-label="Navegação do portfólio"
              className="mt-3 flex flex-col gap-2"
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
                    className={`text-left transition-colors duration-150 ${
                      isActive
                        ? "text-emerald-400"
                        : "text-zinc-400 hover:text-emerald-400"
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
            </motion.div>
          )}
        </div>
      </div>

      {/* output — conteúdo da aba ativa, abaixo da janela de terminal */}
      {isUnlocked && activeTab && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-10"
        >
          {content[activeTab]}
        </motion.div>
      )}
    </section>
  );
}