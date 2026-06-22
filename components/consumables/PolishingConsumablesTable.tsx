import { polishingConsumables } from "@/data/consumablesMockData";

export default function PolishingConsumablesTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Polishing Consumables
        </h2>

        <span className="text-sm text-gray-500">
          Polishing Department Consumables
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-3 font-semibold">
                Item Name
              </th>

              <th className="text-left p-3 font-semibold">
                Department
              </th>
            </tr>
          </thead>

          <tbody>
            {polishingConsumables.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {item.name}
                </td>

                <td className="p-3">
                  {item.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}