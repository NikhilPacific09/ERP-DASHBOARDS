"use client";

import { useState } from "react";

import {
  CuttingRequest,
  Machine,
  Operator,
} from "@/types/cuttingSupervisor";

interface AssignmentPanelProps {
  requests: CuttingRequest[];

  machines: Machine[];

  operators: Operator[];

  onAssign: (
    requestId: string,
    machine: string,
    operator: string
  ) => void;
}

export default function AssignmentPanel({
  requests,
  machines,
  operators,
  onAssign,
}: AssignmentPanelProps) {
  const [selectedMachine,
    setSelectedMachine] =
    useState("");

  const [selectedOperator,
    setSelectedOperator] =
    useState("");

  const acceptedRequests =
    requests.filter(
      (request) =>
        request.status ===
        "Accepted"
    );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Job Assignment Panel
      </h2>

      {acceptedRequests.length ===
      0 ? (
        <div className="rounded-lg bg-slate-100 p-4 text-center text-slate-500">
          No accepted requests available
          for assignment
        </div>
      ) : (
        <div className="space-y-4">

          {acceptedRequests.map(
            (request) => (
              <div
                key={request.id}
                className="rounded-xl border p-4"
              >
                <div className="grid gap-4 md:grid-cols-4">

                  <div>
                    <p className="text-sm text-slate-500">
                      Request ID
                    </p>

                    <p className="font-semibold">
                      {request.id}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Customer
                    </p>

                    <p className="font-semibold">
                      {
                        request.customerName
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Quantity
                    </p>

                    <p className="font-semibold">
                      {request.quantity}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Color
                    </p>

                    <p className="font-semibold">
                      {request.color}
                    </p>
                  </div>

                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">

                  {/* Machine Dropdown */}

                  <select
                    value={
                      selectedMachine
                    }
                    onChange={(e) =>
                      setSelectedMachine(
                        e.target.value
                      )
                    }
                    className="rounded-lg border px-3 py-2"
                  >
                    <option value="">
                      Select Machine
                    </option>

                    {machines
                      .filter(
                        (machine) =>
                          machine.status ===
                          "Available"
                      )
                      .map(
                        (machine) => (
                          <option
                            key={
                              machine.id
                            }
                            value={
                              machine.name
                            }
                          >
                            {
                              machine.name
                            }
                          </option>
                        )
                      )}
                  </select>

                  {/* Operator Dropdown */}

                  <select
                    value={
                      selectedOperator
                    }
                    onChange={(e) =>
                      setSelectedOperator(
                        e.target.value
                      )
                    }
                    className="rounded-lg border px-3 py-2"
                  >
                    <option value="">
                      Select Operator
                    </option>

                    {operators
                      .filter(
                        (operator) =>
                          operator.status ===
                          "Available"
                      )
                      .map(
                        (operator) => (
                          <option
                            key={
                              operator.id
                            }
                            value={
                              operator.name
                            }
                          >
                            {
                              operator.name
                            }
                          </option>
                        )
                      )}
                  </select>

                </div>

                <div className="mt-4 flex justify-end">

                  <button
                    onClick={() => {
                      if (
                        !selectedMachine ||
                        !selectedOperator
                      ) {
                        alert(
                          "Select machine and operator"
                        );
                        return;
                      }

                      onAssign(
                        request.id,
                        selectedMachine,
                        selectedOperator
                      );

                      setSelectedMachine(
                        ""
                      );

                      setSelectedOperator(
                        ""
                      );
                    }}
                    className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
                  >
                    Assign Job
                  </button>

                </div>
              </div>
            )
          )}

        </div>
      )}
    </div>
  );
}