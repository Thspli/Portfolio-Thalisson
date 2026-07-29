export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center sm:px-10">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
        Thalisson Douglas
        <span className="text-emerald-400">.</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl">
        Construo produtos web rápido e sem enrolação.
      </p>

      <p className="mt-3 max-w-md text-sm text-zinc-500 sm:text-base">
        17 anos, full-stack developer. Formado na prática de hackathons —
        onde prazo curto e pressão real ensinam mais rápido que qualquer
        curso.
      </p>
    </section>
  );
}