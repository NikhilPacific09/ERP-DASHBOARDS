"use client";

interface SendRequestModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function SendRequestModal({
  open,
  onClose,
  onConfirm,
}: SendRequestModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-125 rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">
          Confirm Request
        </h2>

        <p className="mb-6 text-gray-600">
          Are you sure you want to send this request
          to Cutter In-charge?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}