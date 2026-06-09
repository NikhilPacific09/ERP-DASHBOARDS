import { SessionRecord } from "@/types/session";

type SessionHistoryTableProps = {
  sessions: SessionRecord[];
};

export default function SessionHistoryTable({
  sessions,
}: SessionHistoryTableProps) {
  return (
    <div className="mt-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Session History
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="border p-3">
                Machine
              </th>

              <th className="border p-3">
                Shift
              </th>

              <th className="border p-3">
                Start Time
              </th>

              <th className="border p-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {sessions.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-4 text-center text-gray-500"
                >
                  No session history
                </td>
              </tr>
            ) : (
              sessions.map(
                (session, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50"
                  >
                    <td className="border p-3">
                      {session.machine}
                    </td>

                    <td className="border p-3">
                      {session.shift}
                    </td>

                    <td className="border p-3">
                      {session.startTime}
                    </td>

                    <td className="border p-3">
                      {session.status}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}