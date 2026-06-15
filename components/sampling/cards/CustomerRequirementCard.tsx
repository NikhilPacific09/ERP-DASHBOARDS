import { CustomerRequirement } from "@/types/sampling";

interface CustomerRequirementCardProps {
  requirement: CustomerRequirement;
}

export default function CustomerRequirementCard({
  requirement,
}: CustomerRequirementCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-blue-600 px-6 py-4 text-white">
        <h2 className="text-xl font-semibold">
          Customer Requirement
        </h2>

        <p className="text-sm text-blue-100">
          Requirement received from Marketing Team
        </p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-3">
        <InfoBox
          label="Customer"
          value={requirement.customerName}
        />

        <InfoBox
          label="Color"
          value={requirement.color}
        />

        <InfoBox
          label="Length"
          value={String(requirement.length)}
        />

        <InfoBox
          label="Width"
          value={String(requirement.width)}
        />

        <InfoBox
          label="Thickness"
          value={`${requirement.thickness} mm`}
        />

        <InfoBox
          label="Quantity"
          value={String(requirement.quantity)}
        />
      </div>
    </div>
  );
}

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-gray-50 p-4">
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>
    </div>
  );
}