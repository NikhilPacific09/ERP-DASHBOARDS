"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const departmentData = [
  {
    department: "Mixer",
    consumption: 320,
  },
  {
    department: "Dist.",
    consumption: 220,
  },
  {
    department: "Press",
    consumption: 80,
  },
  {
    department: "LB",
    consumption: 120,
  },
  {
    department: "Raw Mat.",
    consumption: 150,
  },
  {
    department: "Silos",
    consumption: 100,
  },
];

export default function DepartmentConsumptionChart() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Department-wise Consumption
      </h2>

      <div className="h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={departmentData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="department"
              interval={0}
              tick={{ fontSize: 11 }}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="consumption"
              fill="#16a34a"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}