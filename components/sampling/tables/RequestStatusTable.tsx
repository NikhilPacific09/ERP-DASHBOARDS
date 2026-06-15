"use client";

import { CutterRequest } from "@/types/sampling";

interface RequestStatusTableProps {
  requests: CutterRequest[];
}

export default function RequestStatusTable({
  requests,
}: RequestStatusTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold">
          Request Status
        </h2>
      </div>

      {requests.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          No requests sent yet
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">
                Request ID
              </th>

              <th className="p-3 text-left">
                Customer
              </th>

              <th className="p-3 text-left">
                Required Size
              </th>

              <th className="p-3 text-left">
                Selected Size
              </th>

              <th className="p-3 text-left">
                Quantity
              </th>

              <th className="p-3 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-t"
              >
                <td className="p-3">
                  {request.id.slice(0, 8)}
                </td>

                <td className="p-3">
                  {request.customerName}
                </td>

                <td className="p-3">
                  {request.requiredSize}
                </td>

                <td className="p-3">
                  {request.selectedSize}
                </td>

                <td className="p-3">
                  {request.quantity}
                </td>

                <td className="p-3">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}