import { filmRolls } from "@/data/consumablesMockData";

const getUsagePercentage = (
  consumed: number,
  initial: number
) => {
  return (consumed / initial) * 100;
};

export default function FilmRollTrackingTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          Film Roll Tracking
        </h2>

        <span className="text-sm text-gray-500">
          Film Consumption Monitoring
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left p-3 font-semibold">
                Roll Number
              </th>

              <th className="text-left p-3 font-semibold">
                Film Type
              </th>

              <th className="text-left p-3 font-semibold">
                Machine
              </th>

              <th className="text-left p-3 font-semibold">
                Initial Weight
              </th>

              <th className="text-left p-3 font-semibold">
                Layers Used
              </th>

              <th className="text-left p-3 font-semibold">
                Weight / Layer
              </th>

              <th className="text-left p-3 font-semibold">
                Consumed Weight
              </th>

              <th className="text-left p-3 font-semibold">
                Usage Progress
              </th>

              <th className="text-left p-3 font-semibold">
                Balance Weight
              </th>
            </tr>
          </thead>

          <tbody>
            {filmRolls.map((roll) => (
              <tr
                key={roll.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium">
                  {roll.rollNumber}
                </td>

                <td className="p-3">
                  {roll.filmType}
                </td>

                <td className="p-3">
                  {roll.machine}
                </td>

                <td className="p-3">
                  {roll.initialWeight} KG
                </td>

                <td className="p-3">
                  {roll.layersUsed}
                </td>

                <td className="p-3">
                  {roll.weightPerLayer} KG
                </td>

                <td className="p-3 text-blue-600 font-medium">
                  {roll.consumedWeight} KG
                </td>

                <td className="p-3 min-w-45">
                  <div className="w-full">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{
                          width: `${getUsagePercentage(
                            roll.consumedWeight,
                            roll.initialWeight
                          )}%`,
                        }}
                      />
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {getUsagePercentage(
                        roll.consumedWeight,
                        roll.initialWeight
                      ).toFixed(1)}
                      %
                    </p>
                  </div>
                </td>

                <td className="p-3 font-semibold">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      roll.balanceWeight <=
                      roll.initialWeight * 0.2
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {roll.balanceWeight} KG
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