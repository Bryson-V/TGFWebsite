"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DEFAULT_COLORS = [
  "#059669",
  "#2563eb",
  "#d97706",
  "#dc2626",
  "#7c3aed",
  "#0891b2",
  "#db2777",
  "#4f46e5",
];

export default function PatientPieChart({ data = [], colors = DEFAULT_COLORS }) {
  if (!data || data.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#6b7280" }}>
        No chart data available for this tag.
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "350px", position: "relative", marginTop: "1rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            innerRadius={40} // Added donut ring style for better readability
            paddingAngle={2}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} patients`, "Count"]} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}