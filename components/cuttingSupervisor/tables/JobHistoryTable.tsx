import { JobHistory } from "@/types/cuttingSupervisor";

interface JobHistoryTableProps {
  history: JobHistory[];
}

export default function JobHistoryTable({
  history,
}: JobHistoryTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-xl">

      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Job History
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
              Completed At
            </th>

          </tr>
        </thead>

        <tbody>
          {history.map((job) => (
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
                {job.completedAt}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}