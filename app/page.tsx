import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          ERP Dashboard System
        </h1>

        {/* Production Dashboards */}
        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">
            Production Dashboards
          </h2>

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

            <a
              href="/dashboard-6-fabrication"
              className="rounded-lg bg-cyan-600 p-6 text-center text-white shadow hover:bg-cyan-700"
            >
              Dashboard 6 — Fabrication
            </a>

            <a
              href="/dashboard-7-packaging"
              className="rounded-lg bg-indigo-600 p-6 text-center text-white shadow hover:bg-indigo-700"
            >
              Dashboard 7 — Packaging
            </a>

            <a
              href="/dashboard-8-dispatch"
              className="rounded-lg bg-emerald-600 p-6 text-center text-white shadow hover:bg-emerald-700"
            >
              Dashboard 8 — Dispatch
            </a>

            <a
              href="/dashboard-9-residuals"
              className="rounded-lg bg-teal-600 p-6 text-center text-white shadow hover:bg-teal-700"
            >
              Dashboard 9 — Residuals
            </a>
          </div>
        </div>

        {/* Project Management */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">
            Project Management
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">
                    Project Code
                  </th>

                  <th className="border p-3 text-left">
                    Customer
                  </th>

                  <th className="border p-3 text-left">
                    Status
                  </th>

                  <th className="border p-3 text-left">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">
                    PRJ-001
                  </td>

                  <td className="border p-3">
                    ABC Builders
                  </td>

                  <td className="border p-3">
                    In Production
                  </td>

                  <td className="border p-3">
                    <Link
  href="/projects/1"
  className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  View Project
</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}