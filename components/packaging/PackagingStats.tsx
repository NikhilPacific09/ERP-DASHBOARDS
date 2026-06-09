type PackagingStatsProps = {
  totalQueuePieces: number;
  selectedPieces: number;
  totalPackages: number;
  totalPackagedPieces: number;
};

export default function PackagingStats({
  totalQueuePieces,
  selectedPieces,
  totalPackages,
  totalPackagedPieces,
}: PackagingStatsProps) {
  const stats = [
    {
      title: "Total Queue Pieces",
      value: totalQueuePieces,
    },
    {
      title: "Selected Pieces",
      value: selectedPieces,
    },
    {
      title: "Total Packages",
      value: totalPackages,
    },
    {
      title: "Total Packaged Pieces",
      value: totalPackagedPieces,
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