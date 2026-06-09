import { MachineInfo as MachineInfoType } from "@/types/polishing";

type MachineInfoProps = {
  info: MachineInfoType;
};

export default function MachineInfo({
  info,
}: MachineInfoProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-sm text-slate-500">
            Machine Name
          </p>

          <p className="font-semibold">
            {info.machineName}
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

        <div>
          <p className="text-sm text-slate-500">
            Operator Name
          </p>

          <p className="font-semibold">
            {info.operatorName}
          </p>
        </div>
      </div>
    </div>
  );
}