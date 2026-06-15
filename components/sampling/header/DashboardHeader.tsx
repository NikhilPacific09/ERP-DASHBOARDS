export default function DashboardHeader() {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-xl">
      <div className="p-8 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Sampling Coordinator Dashboard
            </h1>

            <p className="mt-3 text-blue-100">
              Manage inventory allocation,
              stock verification and sample
              request workflow.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Workflow Status
              </p>

              <p className="mt-1 font-semibold">
                Active
              </p>
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-blue-100">
                Department
              </p>

              <p className="mt-1 font-semibold">
                Sampling
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}