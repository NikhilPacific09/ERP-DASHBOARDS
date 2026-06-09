export default function QuickActions() {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <button className="rounded-lg bg-blue-600 p-4 font-semibold text-white hover:bg-blue-700">
          New Project
        </button>

        <button className="rounded-lg bg-green-600 p-4 font-semibold text-white hover:bg-green-700">
          Projects
        </button>

        <button className="rounded-lg bg-yellow-600 p-4 font-semibold text-white hover:bg-yellow-700">
          Packaging
        </button>

        <button className="rounded-lg bg-purple-600 p-4 font-semibold text-white hover:bg-purple-700">
          Dispatch
        </button>
      </div>
    </div>
  );
}