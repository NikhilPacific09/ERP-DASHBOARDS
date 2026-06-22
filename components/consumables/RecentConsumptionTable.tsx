import { recentConsumptions } from "@/data/consumablesMockData";

export default function RecentConsumptionTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Recent Consumption Entries
        </h2>

        <span className="text-sm text-gray-500">
          Latest Consumables Usage
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-3 font-semibold">
                Date
              </th>

              <th className="text-left p-3 font-semibold">
                Department
              </th>

              <th className="text-left p-3 font-semibold">
                Item
              </th>

              <th className="text-left p-3 font-semibold">
                Quantity
              </th>

              <th className="text-left p-3 font-semibold">
                Unit
              </th>
            </tr>
          </thead>

          <tbody>
            {recentConsumptions.map((entry) => (
              <tr
                key={entry.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">
                  {entry.date}
                </td>

                <td className="p-3">
                  {entry.department}
                </td>

                <td className="p-3 font-medium">
                  {entry.itemName}
                </td>

                <td className="p-3">
                  {entry.quantity}
                </td>

                <td className="p-3">
                  {entry.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}