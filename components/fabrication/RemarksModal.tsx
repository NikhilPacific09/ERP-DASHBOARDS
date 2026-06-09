"use client";

import { useState } from "react";

type RemarksModalProps = {
  isOpen: boolean;
  pieceId: string;
  onClose: () => void;
  onSave: (
    pieceId: string,
    remarks: string
  ) => void;
};

export default function RemarksModal({
  isOpen,
  pieceId,
  onClose,
  onSave,
}: RemarksModalProps) {
  const [remarks, setRemarks] =
    useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(pieceId, remarks);

    setRemarks("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          Piece Details
        </h2>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Piece ID
          </label>

          <input
            type="text"
            value={pieceId}
            readOnly
            className="w-full rounded border bg-slate-100 p-2"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">
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
            placeholder="Enter remarks..."
          />
        </div>

        <div className="flex justify-end gap-3">
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