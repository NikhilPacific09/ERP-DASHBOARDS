import ManagerHeader from "@/components/manager/ManagerHeader";
import ManagerStats from "@/components/manager/ManagerStats";
import QuickActions from "@/components/manager/QuickActions";
import ProductionFlow from "@/components/manager/ProductionFlow";
import RecentProjectsTable from "@/components/manager/RecentProjectsTable";

import {
  managerStats,
  productionStages,
  recentProjects,
} from "@/data/managerMockData";

export default function ManagerDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <ManagerHeader />

        <ManagerStats
          stats={managerStats}
        />

        <QuickActions />

        <ProductionFlow
          stages={productionStages}
        />

        <RecentProjectsTable
          projects={recentProjects}
        />
      </div>
    </main>
  );
}