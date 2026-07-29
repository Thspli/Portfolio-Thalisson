interface TerminalPromptProps {
  command: string;
  className?: string;
}

export default function TerminalPrompt({
  command,
  className = "",
}: TerminalPromptProps) {
  return (
    <p className={`text-sm text-zinc-500 ${className}`}>
      <span className="text-[#0078D4]">thalisson@dev</span>
      <span className="text-zinc-600">:</span>
      <span className="text-[#39ff88]">~</span>
      <span className="text-zinc-600">$</span>{" "}
      <span className="text-zinc-300">{command}</span>
    </p>
  );
}