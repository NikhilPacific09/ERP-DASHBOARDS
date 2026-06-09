import { FabricatorInfo as FabricatorInfoType } from "@/types/fabrication";

type FabricatorInfoProps = {
  info: FabricatorInfoType;
};

export default function FabricatorInfo({
  info,
}: FabricatorInfoProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-slate-500">
            Fabricator Name
          </p>

          <p className="font-semibold">
            {info.fabricatorName}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Shift
          </p>

          <p className="font-semibold">
            {info.shift}
          </p>
        </div>
      </div>
    </div>
  );
}