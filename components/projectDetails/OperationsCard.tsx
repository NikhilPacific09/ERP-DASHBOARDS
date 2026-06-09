import { ProjectOperation } from "@/types/project";

type OperationsCardProps = {
  operations: ProjectOperation;
};

export default function OperationsCard({
  operations,
}: OperationsCardProps) {
  const operationList = [
    {
      name: "CUTTING",
      completed: operations.cutting,
    },
    {
      name: "POLISHING",
      completed: operations.polishing,
    },
    {
      name: "SINK CUTTING",
      completed: operations.sinkCutting,
    },
    {
      name: "FABRICATION",
      completed: operations.fabrication,
    },
    {
      name: "PACKAGING",
      completed: operations.packaging,
    },
  ];

  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Operations
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {operationList.map((operation) => (
          <div
            key={operation.name}
            className={`rounded-lg border p-4 text-center font-semibold ${
              operation.completed
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-300 bg-gray-50 text-gray-500"
            }`}
          >
            {operation.name}
          </div>
        ))}
      </div>
    </div>
  );
}