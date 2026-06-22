interface DashboardHeaderProps {
  onAddInventory?: () => void;
  onAddConsumption?: () => void;
}

export default function DashboardHeader({
  onAddInventory,
  onAddConsumption,
}: DashboardHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Consumables Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Monitor Direct Materials, Production Consumables,
            Polishing Consumables and Film Roll Consumption.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={onAddInventory}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add Inventory
          </button>

          <button
            onClick={onAddConsumption}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add Consumption
          </button>

          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}