import { ManagerStat } from "@/types/manager";

type ManagerStatCardProps = {
  stat: ManagerStat;
};

export default function ManagerStatCard({
  stat,
}: ManagerStatCardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <p className="text-sm text-slate-500">
        {stat.title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {stat.value}
      </h2>
    </div>
  );
}