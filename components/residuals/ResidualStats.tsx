type ResidualStatsProps = {
  totalResiduals: number;
  reusableResiduals: number;
  scrapResiduals: number;
  totalResidualArea: number;
};

export default function ResidualStats({
  totalResiduals,
  reusableResiduals,
  scrapResiduals,
  totalResidualArea,
}: ResidualStatsProps) {
  const stats = [
    {
      title: "Total Residuals",
      value: totalResiduals,
    },
    {
      title: "Reusable Residuals",
      value: reusableResiduals,
    },
    {
      title: "Scrap Residuals",
      value: scrapResiduals,
    },
    {
      title: "Total Residual Area",
      value: totalResidualArea,
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