import { directMaterials } from "@/data/consumablesMockData";

export default function DirectMaterialsTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Direct Materials
        </h2>

        <span className="text-sm text-gray-500">
          Production Raw Materials
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-3 font-semibold">
                Material
              </th>

              <th className="text-left p-3 font-semibold">
                Variant
              </th>

              <th className="text-left p-3 font-semibold">
                Unit
              </th>

              <th className="text-left p-3 font-semibold">
                Daily Consumption
              </th>

              <th className="text-left p-3 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {directMaterials.map((material) => (
              <tr
                key={material.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {material.name}
                </td>

                <td className="p-3">
                  {material.variant || "-"}
                </td>

                <td className="p-3">
                  {material.unit}
                </td>

                <td className="p-3">
                  {material.dailyConsumption}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      material.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {material.status}
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