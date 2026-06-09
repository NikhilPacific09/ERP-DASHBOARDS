import { ResidualItem } from "@/types/residual";
import ResidualRow from "./ResidualRow";

type ResidualTableProps = {
  residuals: ResidualItem[];
};

export default function ResidualTable({
  residuals,
}: ResidualTableProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">
                Slab Code
              </th>

              <th className="p-3 text-left">
                Length
              </th>

              <th className="p-3 text-left">
                Width
              </th>

              <th className="p-3 text-left">
                Area
              </th>

              <th className="p-3 text-left">
                Reusable
              </th>

              <th className="p-3 text-left">
                Remarks
              </th>

              <th className="p-3 text-left">
                Created Date
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {residuals.map(
              (residual) => (
                <ResidualRow
                  key={residual.id}
                  residual={
                    residual
                  }
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}