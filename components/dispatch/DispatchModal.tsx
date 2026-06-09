"use client";

import { useState } from "react";

type DispatchModalProps = {
  isOpen: boolean;
  packageCode: string;
  onClose: () => void;
  onDispatch: (
    packageCode: string,
    vehicleNumber: string,
    driverName: string,
    destination: string,
    remarks: string
  ) => void;
};

export default function DispatchModal({
  isOpen,
  packageCode,
  onClose,
  onDispatch,
}: DispatchModalProps) {
  const [vehicleNumber, setVehicleNumber] =
    useState("");

  const [driverName, setDriverName] =
    useState("");

  const [destination, setDestination] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  if (!isOpen) return null;

  const handleDispatch = () => {
    onDispatch(
      packageCode,
      vehicleNumber,
      driverName,
      destination,
      remarks
    );

    setVehicleNumber("");
    setDriverName("");
    setDestination("");
    setRemarks("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          Dispatch Package
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">
              Vehicle Number
            </label>

            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) =>
                setVehicleNumber(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Driver Name
            </label>

            <input
              type="text"
              value={driverName}
              onChange={(e) =>
                setDriverName(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Destination
            </label>

            <input
              type="text"
              value={destination}
              onChange={(e) =>
                setDestination(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Remarks
            </label>

            <textarea
              rows={4}
              value={remarks}
              onChange={(e) =>
                setRemarks(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={handleDispatch}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Dispatch
          </button>

          <button
            onClick={onClose}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}