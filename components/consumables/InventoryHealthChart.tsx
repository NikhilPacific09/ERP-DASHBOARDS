"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { inventoryStocks } from "@/data/consumablesMockData";

export default function InventoryHealthChart() {
  const healthyCount = inventoryStocks.filter(
    (item) => item.status === "Healthy"
  ).length;

  const lowCount = inventoryStocks.filter(
    (item) => item.status === "Low"
  ).length;

  const data = [
    {
      name: "Healthy",
      value: healthyCount,
    },
    {
      name: "Low Stock",
      value: lowCount,
    },
  ];

  const COLORS = ["#16a34a", "#dc2626"];

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Inventory Health
      </h2>

      <div className="h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}