import { CuttingJob } from "@/types/cuttingSupervisor";

interface CompletedJobsTableProps {
  jobs: CuttingJob[];

  onSendToFabrication: (
    jobId: string
  ) => void;
}

export default function CompletedJobsTable({
  jobs,
  onSendToFabrication,
}: CompletedJobsTableProps) {
  const completedJobs =
    jobs.filter(
      (job) =>
        job.status === "Completed"
    );

  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-xl">

      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Completed Jobs
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
              Action
            </th>

          </tr>
        </thead>

        <tbody>

          {completedJobs.map((job) => (
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

                <button
                  onClick={() =>
                    onSendToFabrication(
                      job.id
                    )
                  }
                  className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                >
                  Send To Fabrication
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}