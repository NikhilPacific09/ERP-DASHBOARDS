import { inventoryStocks } from "@/data/consumablesMockData";

export default function LowStockAlerts() {
  const lowStockItems = inventoryStocks.filter(
    (item) => item.status === "Low"
  );

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-red-600">
          Low Stock Alerts
        </h2>

        <span className="text-sm text-gray-500">
          Items requiring attention
        </span>
      </div>

      {lowStockItems.length === 0 ? (
        <div className="text-green-600 font-medium">
          No low stock items found.
        </div>
      ) : (
        <div className="space-y-4">
          {lowStockItems.map((item) => (
            <div
              key={item.id}
              className="border border-red-200 bg-red-50 rounded-lg p-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.itemName}
                  </h3>

                  <p className="text-sm text-gray-600">
                    Category: {item.category}
                  </p>
                </div>

                <div className="text-sm">
                  <div>
                    Current Stock:
                    <span className="font-semibold text-red-600 ml-2">
                      {item.currentStock}
                    </span>
                  </div>

                  <div>
                    Minimum Stock:
                    <span className="font-semibold ml-2">
                      {item.minStock}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}