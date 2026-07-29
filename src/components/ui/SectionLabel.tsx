interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-sm text-emerald-400">{index}</span>
      <span className="h-px w-8 bg-zinc-800" />
      <span className="font-mono text-sm uppercase tracking-widest text-zinc-500">
        {label}
      </span>
    </div>
  );
}