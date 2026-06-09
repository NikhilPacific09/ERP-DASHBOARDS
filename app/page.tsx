export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          ERP Dashboard System
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/dashboard-1-cutting"
            className="rounded-lg bg-blue-600 p-6 text-center text-white shadow hover:bg-blue-700"
          >
            Dashboard 1 — Cutting
          </a>

          <a
            href="/dashboard-2-start-session"
            className="rounded-lg bg-green-600 p-6 text-center text-white shadow hover:bg-green-700"
          >
            Dashboard 2 — Start Session
          </a>

          <a
            href="/dashboard-3-manager"
            className="rounded-lg bg-purple-600 p-6 text-center text-white shadow hover:bg-purple-700"
          >
            Dashboard 3 — Manager
          </a>

          <a
            href="/dashboard-4-polishing"
            className="rounded-lg bg-orange-600 p-6 text-center text-white shadow hover:bg-orange-700"
          >
            Dashboard 4 — Polishing
          </a>

          <a
            href="/dashboard-5-sink-cutting"
            className="rounded-lg bg-red-600 p-6 text-center text-white shadow hover:bg-red-700"
          >
            Dashboard 5 — Sink Cutting
          </a>
        </div>
      </div>
    </main>
  );
}