import ProjectInfoCard from "@/components/projectDetails/ProjectInfoCard";
import OperationsCard from "@/components/projectDetails/OperationsCard";
import SlabsTable from "@/components/projectDetails/SlabsTable";
import PiecesTable from "@/components/projectDetails/PiecesTable";

import { projectMockData } from "@/data/projectMockData";

export default function ProjectDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="mb-6 text-4xl font-bold">
        Project Details
      </h1>

      <ProjectInfoCard
        project={projectMockData}
      />

      <OperationsCard
        operations={
          projectMockData.operations
        }
      />

      <SlabsTable
        slabs={projectMockData.slabs}
      />

      <PiecesTable
        pieces={projectMockData.pieces}
      />
    </main>
  );
}