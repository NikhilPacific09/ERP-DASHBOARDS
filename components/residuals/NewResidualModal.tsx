"use client";

import { useState } from "react";

type NewResidualModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    slabCode: string,
    length: number,
    width: number,
    reusable: boolean,
    remarks: string
  ) => void;
};

export default function NewResidualModal({
  isOpen,
  onClose,
  onSave,
}: NewResidualModalProps) {
  const [slabCode, setSlabCode] =
    useState("SLAB-101");

  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [reusable, setReusable] =
    useState(true);

  const [remarks, setRemarks] =
    useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(
      slabCode,
      Number(length),
      Number(width),
      reusable,
      remarks
    );

    setLength("");
    setWidth("");
    setReusable(true);
    setRemarks("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          New Residual
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">
              Slab
            </label>

            <select
              value={slabCode}
              onChange={(e) =>
                setSlabCode(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            >
              <option>
                SLAB-101
              </option>
              <option>
                SLAB-102
              </option>
              <option>
                SLAB-103
              </option>
              <option>
                SLAB-104
              </option>
              <option>
                SLAB-105
              </option>
            </select>
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Length
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Width
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={reusable}
              onChange={(e) =>
                setReusable(
                  e.target.checked
                )
              }
            />

            <label>
              Reusable
            </label>
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
            onClick={handleSave}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Save
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