"use client";

interface AddInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddInventoryModal({
  isOpen,
  onClose,
}: AddInventoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Add Inventory
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
            type="text"
            placeholder="Item Name"
            className="border rounded-lg p-3"
          />

          <select className="border rounded-lg p-3">
            <option>Select Category</option>
            <option>Direct Material</option>
            <option>Production Consumable</option>
            <option>Polishing Consumable</option>
          </select>

          <input
            type="text"
            placeholder="Department"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Unit"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Current Stock"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Minimum Stock"
            className="border rounded-lg p-3"
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
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save Inventory
          </button>
        </div>
      </div>
    </div>
  );
}