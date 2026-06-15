"use client";

import { SelectedMaterial } from "@/types/sampling";

interface SelectedMaterialTableProps {
  materials: SelectedMaterial[];
  onRemoveMaterial: (materialId: string) => void;
}

export default function SelectedMaterialTable({
  materials,
  onRemoveMaterial,
}: SelectedMaterialTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold">
          Selected Materials
        </h2>
      </div>

      {materials.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          No material selected
        </div>
      ) : (
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

              <th className="p-3 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {materials.map((material) => (
              <tr
                key={material.id}
                className="border-t"
              >
                <td className="p-3">
                  {material.color}
                </td>

                <td className="p-3">
                  {material.length} ×{" "}
                  {material.width}
                </td>

                <td className="p-3">
                  {material.thickness} mm
                </td>

                <td className="p-3">
                  {material.quantity}
                </td>

                <td className="p-3 text-center">
                  <button
                    onClick={() =>
                      onRemoveMaterial(
                        material.id
                      )
                    }
                    className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}