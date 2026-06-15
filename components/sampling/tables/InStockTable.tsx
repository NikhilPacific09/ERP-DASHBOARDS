"use client";

import { StockItem } from "@/types/sampling";

interface InStockTableProps {
  stockItems: StockItem[];
  onAddMaterial: (item: StockItem) => void;
}

export default function InStockTable({
  stockItems,
  onAddMaterial,
}: InStockTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold">
          In Stock Inventory
        </h2>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">
              Color
            </th>

            <th className="p-3 text-left">
              Size
            </th>

            <th className="p-3 text-left">
              Thickness
            </th>

            <th className="p-3 text-left">
              Quantity
            </th>

            <th className="p-3 text-left">
              Status
            </th>

            <th className="p-3 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {stockItems.map((item) => (
            <tr
              key={item.id}
              className="border-t"
            >
              <td className="p-3">
                {item.color}
              </td>

              <td className="p-3">
                {item.length} × {item.width}
              </td>

              <td className="p-3">
                {item.thickness} mm
              </td>

              <td className="p-3">
                {item.quantity}
              </td>

              <td className="p-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  {item.status}
                </span>
              </td>

              <td className="p-3 text-center">
                <button
                  onClick={() =>
                    onAddMaterial(item)
                  }
                  className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}