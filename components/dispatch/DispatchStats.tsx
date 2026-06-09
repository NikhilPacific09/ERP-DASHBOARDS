type DispatchStatsProps = {
  pendingDispatch: number;
  totalDispatched: number;
  totalQueuePackages: number;
  totalPiecesInQueue: number;
};

export default function DispatchStats({
  pendingDispatch,
  totalDispatched,
  totalQueuePackages,
  totalPiecesInQueue,
}: DispatchStatsProps) {
  const stats = [
    {
      title: "Pending Dispatch",
      value: pendingDispatch,
    },
    {
      title: "Total Dispatched",
      value: totalDispatched,
    },
    {
      title: "Queue Packages",
      value: totalQueuePackages,
    },
    {
      title: "Pieces In Queue",
      value: totalPiecesInQueue,
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