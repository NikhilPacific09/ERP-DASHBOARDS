type SessionStatsProps = {
  totalSessions: number;
  activeMachine: string;
  currentShift: string;
};

export default function SessionStats({
  totalSessions,
  activeMachine,
  currentShift,
}: SessionStatsProps) {
  return (
    <div className="mb-6 grid gap-4 md:grid-cols-3">
      <div className="rounded-xl bg-white p-5 shadow">
        <h3 className="text-gray-500">
          Total Sessions
        </h3>

        <p className="mt-2 text-3xl font-bold">
          {totalSessions}
        </p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow">
        <h3 className="text-gray-500">
          Active Machine
        </h3>

        <p className="mt-2 font-semibold">
          {activeMachine || "-"}
        </p>
      </div>

      <div className="rounded-xl bg-white p-5 shadow">
        <h3 className="text-gray-500">
          Current Shift
        </h3>

        <p className="mt-2 font-semibold">
          {currentShift || "-"}
        </p>
      </div>
    </div>
  );
}