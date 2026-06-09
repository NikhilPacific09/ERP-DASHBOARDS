type ActiveSessionCardProps = {
  machine: string;
  shift: string;
  startTime: string;
  onEndSession: () => void;
};

export default function ActiveSessionCard({
  machine,
  shift,
  startTime,
  onEndSession,
}: ActiveSessionCardProps) {
  return (
    <div className="mt-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-green-600">
        Session Started Successfully
      </h2>

      <div className="space-y-2">
        <p>
          <strong>Machine:</strong> {machine}
        </p>

        <p>
          <strong>Shift:</strong> {shift}
        </p>

        <p>
          <strong>Status:</strong> Active
        </p>

        <p>
          <strong>Started At:</strong> {startTime}
        </p>
      </div>

      <button
        onClick={onEndSession}
        className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        End Session
      </button>
    </div>
  );
}