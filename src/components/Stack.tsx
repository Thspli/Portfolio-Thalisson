import SectionLabel from "./ui/SectionLabel";

const SKILLS = [
  { name: "Next.js / React", level: 90 },
  { name: "TypeScript / JavaScript", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Azure", level: 75 },
  { name: "MySQL", level: 78 },
  { name: "Postman / API testing", level: 85 },
];

export default function Stack() {
  return (
    <section className="border-t border-zinc-900 px-6 py-24 sm:px-10 lg:px-8">
      <div className="mx-auto max-w-content">
        <SectionLabel index="02" label="Stack" />

        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
          Ferramentas que uso todo dia, sem enfeite.
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-zinc-300">{skill.name}</span>
                <span className="font-mono text-xs text-zinc-500">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-900">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}