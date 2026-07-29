export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-zinc-900 px-6 py-20 sm:px-10 lg:px-8"
    >
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm text-emerald-400">
              Disponível para novos projetos
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              Vamos construir algo juntos.
            </h2>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:thalisson@email.com"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-zinc-600">
          © 2026 Thalisson Douglas — feito com Next.js e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}