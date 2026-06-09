import { ProductionStage } from "@/types/manager";
import FlowStageCard from "./FlowStageCard";

type ProductionFlowProps = {
  stages: ProductionStage[];
};

export default function ProductionFlow({
  stages,
}: ProductionFlowProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Production Flow
      </h2>

      <div className="flex flex-col items-center gap-4">
        {stages.map((stage, index) => (
          <div
            key={stage.name}
            className="flex flex-col items-center"
          >
            <div className="w-80">
              <FlowStageCard
                stage={stage}
              />
            </div>

            {index !==
              stages.length - 1 && (
              <div className="my-2 text-3xl font-bold text-slate-500">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}