import { CuttingRecord } from "@/types/cutting";

type CuttingTableProps = {
  records: CuttingRecord[];
  onView: (record: CuttingRecord) => void;
  onEdit: (record: CuttingRecord) => void;
};

export default function CuttingTable({
  records,
  onView,
  onEdit,
}: CuttingTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-slate-700 text-white">
            <th className="border p-3">Piece ID</th>
            <th className="border p-3">Project</th>
            <th className="border p-3">Length</th>
            <th className="border p-3">Width</th>
            <th className="border p-3">Shape Type</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Start Time</th>
            <th className="border p-3">End Time</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td
                colSpan={9}
                className="p-6 text-center text-gray-500"
              >
                No records found
              </td>
            </tr>
          ) : (
            records.map((record) => (
              <tr
                key={record.pieceId}
                className="hover:bg-slate-50"
              >
                <td className="border p-3">
                  {record.pieceId}
                </td>

                <td className="border p-3">
                  {record.project}
                </td>

                <td className="border p-3">
                  {record.length}
                </td>

                <td className="border p-3">
                  {record.width}
                </td>

                <td className="border p-3">
                  {record.shapeType}
                </td>

                <td className="border p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      record.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>

                <td className="border p-3">
                  {record.startTime}
                </td>

                <td className="border p-3">
                  {record.endTime}
                </td>

                <td className="border p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onView(record)}
                      className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                    >
                      View
                    </button>

                    <button
                      onClick={() => onEdit(record)}
                      className="rounded bg-gray-600 px-3 py-1 text-white hover:bg-gray-700"
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}