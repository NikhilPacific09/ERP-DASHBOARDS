"use client";

import {
  CustomerRequirement,
  SelectedMaterial,
} from "@/types/sampling";

interface RequestSummaryProps {
  requirement: CustomerRequirement;
  selectedMaterials: SelectedMaterial[];
}

export default function RequestSummary({
  requirement,
  selectedMaterials,
}: RequestSummaryProps) {
  const totalSelectedQuantity =
    selectedMaterials.reduce(
      (sum, material) =>
        sum + material.quantity,
      0
    );

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="border-b bg-gray-50 px-6 py-4">
        <h2 className="text-xl font-semibold">
          Request Summary
        </h2>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">
            Customer
          </p>

          <p className="font-semibold">
            {requirement.customerName}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Color
          </p>

          <p className="font-semibold">
            {requirement.color}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Required Size
          </p>

          <p className="font-semibold">
            {requirement.length} ×{" "}
            {requirement.width}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Thickness
          </p>

          <p className="font-semibold">
            {requirement.thickness} mm
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Required Quantity
          </p>

          <p className="font-semibold">
            {requirement.quantity}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Selected Materials
          </p>

          <p className="font-semibold">
            {selectedMaterials.length}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Available Stock Quantity
          </p>

          <p className="font-semibold">
            {totalSelectedQuantity}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Status
          </p>

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
            Draft
          </span>
        </div>
      </div>
    </div>
  );
}