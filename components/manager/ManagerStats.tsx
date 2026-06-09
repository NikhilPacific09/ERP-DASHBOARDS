import ManagerStatCard from "./ManagerStatCard";

import { ManagerStat } from "@/types/manager";

type ManagerStatsProps = {
  stats: ManagerStat[];
};

export default function ManagerStats({
  stats,
}: ManagerStatsProps) {
  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <ManagerStatCard
          key={stat.title}
          stat={stat}
        />
      ))}
    </div>
  );
}