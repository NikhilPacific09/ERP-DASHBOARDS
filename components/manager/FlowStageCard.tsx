import { ProductionStage } from "@/types/manager";

type FlowStageCardProps = {
  stage: ProductionStage;
};

export default function FlowStageCard({
  stage,
}: FlowStageCardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow text-center">
      <h3 className="text-lg font-bold">
        {stage.name}
      </h3>

      <div className="mt-4 space-y-2">
        <p>
          Pending:
          <span className="ml-2 font-semibold text-yellow-600">
            {stage.pending}
          </span>
        </p>

        <p>
          Completed:
          <span className="ml-2 font-semibold text-green-600">
            {stage.completed}
          </span>
        </p>
      </div>
    </div>
  );
}