import { ProjectDetails } from "@/types/project";

type ProjectInfoCardProps = {
  project: ProjectDetails;
};

export default function ProjectInfoCard({
  project,
}: ProjectInfoCardProps) {
  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Project Information
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">
            Project Code
          </p>

          <p className="font-semibold">
            {project.projectCode}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Customer
          </p>

          <p className="font-semibold">
            {project.customer}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Number Of Pieces
          </p>

          <p className="font-semibold">
            {project.numberOfPieces}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Drawing
          </p>

          <p className="font-semibold">
            {project.drawing}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Remarks
        </p>

        <p className="font-semibold">
          {project.remarks}
        </p>
      </div>
    </div>
  );
}