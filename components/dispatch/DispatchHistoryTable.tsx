import { DispatchHistoryItem } from "@/types/dispatch";

type DispatchHistoryTableProps = {
  history: DispatchHistoryItem[];
};

export default function DispatchHistoryTable({
  history,
}: DispatchHistoryTableProps) {
  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Dispatch History
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">
                Package
              </th>

              <th className="p-3 text-left">
                Vehicle
              </th>

              <th className="p-3 text-left">
                Driver
              </th>

              <th className="p-3 text-left">
                Destination
              </th>

              <th className="p-3 text-left">
                Dispatch Date
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={`${item.packageCode}-${item.dispatchDate}`}
                className="border-b"
              >
                <td className="p-3">
                  {item.packageCode}
                </td>

                <td className="p-3">
                  {item.vehicleNumber}
                </td>

                <td className="p-3">
                  {item.driverName}
                </td>

                <td className="p-3">
                  {item.destination}
                </td>

                <td className="p-3">
                  {item.dispatchDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}