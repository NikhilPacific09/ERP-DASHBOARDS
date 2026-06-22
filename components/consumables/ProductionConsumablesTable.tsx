import { productionConsumables } from "@/data/consumablesMockData";

export default function ProductionConsumablesTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Production Consumables
        </h2>

        <span className="text-sm text-gray-500">
          Daily Production Consumables Tracking
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-3 font-semibold">
                Item
              </th>

              <th className="text-left p-3 font-semibold">
                Department
              </th>

              <th className="text-left p-3 font-semibold">
                Unit
              </th>

              <th className="text-left p-3 font-semibold">
                Daily Consumption
              </th>

              <th className="text-left p-3 font-semibold">
                Current Stock
              </th>

              <th className="text-left p-3 font-semibold">
                Min Stock
              </th>
            </tr>
          </thead>

          <tbody>
            {productionConsumables.map((item) => (
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

                <td className="p-3">
                  {item.unit}
                </td>

                <td className="p-3">
                  {item.dailyConsumption}
                </td>

                <td className="p-3 font-medium">
                  {item.currentStock}
                </td>

                <td className="p-3">
                  {item.minStock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}