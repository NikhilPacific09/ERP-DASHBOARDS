export default function DashboardHeader() {
  return (
    <div className="mb-8 rounded-2xl bg-white p-6 shadow">
      <h1 className="text-4xl font-bold text-slate-800">
        Cutting Supervisor Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Manage cutting requests,
        verify stock, assign operators,
        monitor progress and dispatch
        jobs to production.
      </p>
    </div>
  );
}