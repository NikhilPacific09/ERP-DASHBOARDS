export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        ERP Dashboard
      </h1>

      <a
        href="/dashboard-1-cutting"
        className="rounded bg-blue-600 px-6 py-3 text-white"
      >
        Cutting Dashboard
      </a>

      <a
        href="/dashboard-2-start-session"
        className="rounded bg-green-600 px-6 py-3 text-white"
      >
        Start Session Dashboard
      </a>
    </main>
  );
}