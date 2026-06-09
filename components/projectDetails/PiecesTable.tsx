import { ProjectPiece } from "@/types/project";

type PiecesTableProps = {
  pieces: ProjectPiece[];
};

export default function PiecesTable({
  pieces,
}: PiecesTableProps) {
  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Pieces
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="border p-3 text-left">
                Piece Code
              </th>

              <th className="border p-3 text-left">
                Shape
              </th>

              <th className="border p-3 text-left">
                Length
              </th>

              <th className="border p-3 text-left">
                Width
              </th>

              <th className="border p-3 text-left">
                Status
              </th>

              <th className="border p-3 text-left">
                Slab
              </th>
            </tr>
          </thead>

          <tbody>
            {pieces.map((piece) => (
              <tr
                key={piece.pieceCode}
                className="hover:bg-slate-50"
              >
                <td className="border p-3">
                  {piece.pieceCode}
                </td>

                <td className="border p-3">
                  {piece.shape}
                </td>

                <td className="border p-3">
                  {piece.length}
                </td>

                <td className="border p-3">
                  {piece.width}
                </td>

                <td className="border p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      piece.status ===
                      "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {piece.status}
                  </span>
                </td>

                <td className="border p-3">
                  {piece.slab}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}