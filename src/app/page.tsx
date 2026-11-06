export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-4 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Jorge Bastos</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Full stack developer. This site is under construction: career and side
        projects are coming soon.
      </p>
      <p>
        <a
          className="font-medium underline underline-offset-4"
          href="https://github.com/jbastos92"
        >
          GitHub
        </a>
      </p>
    </main>
  );
}
