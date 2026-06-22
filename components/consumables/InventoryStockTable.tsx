import { inventoryStocks } from "@/data/consumablesMockData";

export default function InventoryStockTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Inventory Stock
        </h2>

        <span className="text-sm text-gray-500">
          Current Inventory Overview
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-3 font-semibold">
                Item Name
              </th>

              <th className="text-left p-3 font-semibold">
                Category
              </th>

              <th className="text-left p-3 font-semibold">
                Unit
              </th>

              <th className="text-left p-3 font-semibold">
                Current Stock
              </th>

              <th className="text-left p-3 font-semibold">
                Min Stock
              </th>

              <th className="text-left p-3 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryStocks.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">
                  {item.itemName}
                </td>

                <td className="p-3">
                  {item.category}
                </td>

                <td className="p-3">
                  {item.unit}
                </td>

                <td className="p-3 font-medium">
                  {item.currentStock}
                </td>

                <td className="p-3">
                  {item.minStock}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Healthy"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}