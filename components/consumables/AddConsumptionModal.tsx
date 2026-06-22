"use client";

interface AddConsumptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddConsumptionModal({
  isOpen,
  onClose,
}: AddConsumptionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Add Consumption Entry
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            className="border rounded-lg p-3"
          />

          <select className="border rounded-lg p-3">
            <option>Select Department</option>
            <option>Mixer</option>
            <option>Distributor</option>
            <option>Press</option>
            <option>LB Line</option>
            <option>Raw Material</option>
            <option>Silos</option>
          </select>

          <input
            type="text"
            placeholder="Item Name"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Quantity"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Unit"
            className="border rounded-lg p-3"
          />

          <textarea
            placeholder="Remarks"
            rows={4}
            className="border rounded-lg p-3 md:col-span-2"
          />
        </form>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Save Consumption
          </button>
        </div>
      </div>
    </div>
  );
}