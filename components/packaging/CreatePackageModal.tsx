"use client";

import { useState } from "react";

type CreatePackageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (
    packageCode: string,
    remarks: string
  ) => void;
};

export default function CreatePackageModal({
  isOpen,
  onClose,
  onCreate,
}: CreatePackageModalProps) {
  const [packageCode, setPackageCode] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!packageCode.trim()) return;

    onCreate(
      packageCode,
      remarks
    );

    setPackageCode("");
    setRemarks("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          Create Package
        </h2>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Package Code
          </label>

          <input
            type="text"
            value={packageCode}
            onChange={(e) =>
              setPackageCode(
                e.target.value
              )
            }
            className="w-full rounded border p-2"
            placeholder="PKG004"
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
            onClick={handleCreate}
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Create Package
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