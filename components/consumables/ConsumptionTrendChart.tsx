"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const trendData = [
  { day: "Mon", consumption: 220 },
  { day: "Tue", consumption: 245 },
  { day: "Wed", consumption: 260 },
  { day: "Thu", consumption: 230 },
  { day: "Fri", consumption: 280 },
  { day: "Sat", consumption: 300 },
  { day: "Sun", consumption: 270 },
];

export default function ConsumptionTrendChart() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        7-Day Consumption Trend
      </h2>

      <div className="h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="consumption"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}