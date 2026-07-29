interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`border border-zinc-800 bg-[#0d0d0d] ${className}`}
    >
      {/* barra de título falsa */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-[#111111] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#39ff88]/60" />
        </div>
        <span className="ml-2 text-xs text-zinc-500">{title}</span>
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </div>
  );
}