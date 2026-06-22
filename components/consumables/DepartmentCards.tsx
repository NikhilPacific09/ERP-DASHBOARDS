import { departmentMappings } from "@/data/consumablesMockData";

export default function DepartmentCards() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          Department Consumables Mapping
        </h2>

        <span className="text-sm text-gray-500">
          Consumables used by each department
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {departmentMappings.map((department) => (
          <div
            key={department.department}
            className="border rounded-xl p-4 bg-gray-50"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-3">
              {department.department}
            </h3>

            <div className="flex flex-wrap gap-2">
              {department.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}