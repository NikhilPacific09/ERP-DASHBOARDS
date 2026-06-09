import { Project } from "@/types/manager";

type RecentProjectsTableProps = {
  projects: Project[];
};

export default function RecentProjectsTable({
  projects,
}: RecentProjectsTableProps) {
  return (
    <div className="mb-8 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Recent Projects
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="border p-3">
                Project Code
              </th>

              <th className="border p-3">
                Customer
              </th>

              <th className="border p-3">
                Pieces
              </th>

              <th className="border p-3">
                Created Date
              </th>

              <th className="border p-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.projectCode}
                className="hover:bg-slate-50"
              >
                <td className="border p-3">
                  {project.projectCode}
                </td>

                <td className="border p-3">
                  {project.customer}
                </td>

                <td className="border p-3">
                  {project.pieces}
                </td>

                <td className="border p-3">
                  {project.createdDate}
                </td>

                <td className="border p-3">
                  {project.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}