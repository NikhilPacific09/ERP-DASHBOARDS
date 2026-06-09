type FabricationStatsProps = {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
};

export default function FabricationStats({
  total,
  pending,
  inProgress,
  completed,
}: FabricationStatsProps) {
  const stats = [
    {
      title: "Total Pieces",
      value: total,
    },
    {
      title: "Pending",
      value: pending,
    },
    {
      title: "In Progress",
      value: inProgress,
    },
    {
      title: "Completed",
      value: completed,
    },
  ];

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl bg-white p-5 shadow"
        >
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}