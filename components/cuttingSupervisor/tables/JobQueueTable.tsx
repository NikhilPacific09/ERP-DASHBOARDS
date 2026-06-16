import { CuttingJob } from "@/types/cuttingSupervisor";

interface JobQueueTableProps {
  jobs: CuttingJob[];

  onStartJob: (
    jobId: string
  ) => void;

  onUpdateProgress: (
    jobId: string
  ) => void;

  onCompleteJob: (
    jobId: string
  ) => void;
}

export default function JobQueueTable({
  jobs,
  onStartJob,
  onUpdateProgress,
  onCompleteJob,
}: JobQueueTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-xl">

      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Cutting Job Queue
        </h2>
      </div>

      <table className="min-w-full">
        <thead>
          <tr className="bg-slate-100">

            <th className="px-4 py-3 text-left">
              Job ID
            </th>

            <th className="px-4 py-3 text-left">
              Customer
            </th>

            <th className="px-4 py-3 text-left">
              Machine
            </th>

            <th className="px-4 py-3 text-left">
              Operator
            </th>

            <th className="px-4 py-3 text-left">
              Progress
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Action
            </th>

          </tr>
        </thead>

        <tbody>

          {jobs.map((job) => (
            <tr
              key={job.id}
              className="border-t"
            >

              <td className="px-4 py-3">
                {job.id}
              </td>

              <td className="px-4 py-3">
                {job.customerName}
              </td>

              <td className="px-4 py-3">
                {job.machine}
              </td>

              <td className="px-4 py-3">
                {job.operator}
              </td>

              <td className="px-4 py-3">

                <div className="w-40">

                  <div className="mb-1 text-sm">
                    {job.progress}%
                  </div>

                  <div className="h-3 rounded bg-gray-200">

                    <div
                      className="h-3 rounded bg-blue-600"
                      style={{
                        width:
                          `${job.progress}%`,
                      }}
                    />

                  </div>

                </div>

              </td>

              <td className="px-4 py-3">
                {job.status}
              </td>

              <td className="px-4 py-3">

                {job.status ===
                  "Assigned" && (
                  <button
                    onClick={() =>
                      onStartJob(
                        job.id
                      )
                    }
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                  >
                    Start
                  </button>
                )}

                {job.status ===
                  "In Progress" && (
                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        onUpdateProgress(
                          job.id
                        )
                      }
                      className="rounded-lg bg-orange-600 px-4 py-2 text-white"
                    >
                      +25%
                    </button>

                    {job.progress ===
                      100 && (
                      <button
                        onClick={() =>
                          onCompleteJob(
                            job.id
                          )
                        }
                        className="rounded-lg bg-green-600 px-4 py-2 text-white"
                      >
                        Complete
                      </button>
                    )}

                  </div>
                )}

              </td>

            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
}