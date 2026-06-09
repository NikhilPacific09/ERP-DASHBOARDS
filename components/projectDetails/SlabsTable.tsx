import { ProjectSlab } from "@/types/project";

type SlabsTableProps = {
  slabs: ProjectSlab[];
};

export default function SlabsTable({
  slabs,
}: SlabsTableProps) {
  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Slabs
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border p-3 text-left">
                Slab Code
              </th>

              <th className="border p-3 text-left">
                Piece Count
              </th>
            </tr>
          </thead>

          <tbody>
            {slabs.map((slab) => (
              <tr
                key={slab.slabCode}
                className="hover:bg-slate-50"
              >
                <td className="border p-3">
                  {slab.slabCode}
                </td>

                <td className="border p-3">
                  {slab.pieceCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}