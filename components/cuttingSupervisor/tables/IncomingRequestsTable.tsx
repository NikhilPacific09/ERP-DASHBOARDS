import { CuttingRequest } from "@/types/cuttingSupervisor";

interface IncomingRequestsTableProps {
  requests: CuttingRequest[];

  onAccept: (
    requestId: string
  ) => void;

  onReject: (
    requestId: string
  ) => void;
}

export default function IncomingRequestsTable({
  requests,
  onAccept,
  onReject,
}: IncomingRequestsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl">

      <div className="border-b p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Incoming Requests
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Requests received from Sampling Coordinator
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead>
            <tr className="bg-slate-100">

              <th className="px-4 py-3 text-left">
                Request ID
              </th>

              <th className="px-4 py-3 text-left">
                Customer
              </th>

              <th className="px-4 py-3 text-left">
                Color
              </th>

              <th className="px-4 py-3 text-left">
                Required Size
              </th>

              <th className="px-4 py-3 text-left">
                Selected Size
              </th>

              <th className="px-4 py-3 text-left">
                Quantity
              </th>

              <th className="px-4 py-3 text-left">
                Status
              </th>

              <th className="px-4 py-3 text-left">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (

              <tr
                key={request.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-4 py-3">
                  {request.id}
                </td>

                <td className="px-4 py-3">
                  {request.customerName}
                </td>

                <td className="px-4 py-3">
                  {request.color}
                </td>

                <td className="px-4 py-3">
                  {request.requiredSize}
                </td>

                <td className="px-4 py-3">
                  {request.selectedSize}
                </td>

                <td className="px-4 py-3">
                  {request.quantity}
                </td>

                <td className="px-4 py-3">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium

                    ${
                      request.status ===
                      "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : request.status ===
                          "Accepted"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {request.status}
                  </span>

                </td>

                <td className="px-4 py-3">

                  {request.status ===
                    "Pending" && (
                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          onAccept(
                            request.id
                          )
                        }
                        className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() =>
                          onReject(
                            request.id
                          )
                        }
                        className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                      >
                        Reject
                      </button>

                    </div>
                  )}

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}