type CuttingStatsProps = {
  pendingPieces: number;
  completedToday: number;
  myRecords: number;
};

export default function CuttingStats({
  pendingPieces,
  completedToday,
  myRecords,
}: CuttingStatsProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg border-l-4 border-yellow-500 bg-white p-5 shadow">
        <p className="text-gray-500">
          Pending Pieces
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {pendingPieces}
        </h2>
      </div>

      <div className="rounded-lg border-l-4 border-green-500 bg-white p-5 shadow">
        <p className="text-gray-500">
          Completed Today
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {completedToday}
        </h2>
      </div>

      <div className="rounded-lg border-l-4 border-blue-500 bg-white p-5 shadow">
        <p className="text-gray-500">
          My Records
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {myRecords}
        </h2>
      </div>
    </div>
  );
}