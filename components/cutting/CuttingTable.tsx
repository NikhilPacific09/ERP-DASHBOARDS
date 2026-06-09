import { CuttingPiece } from "@/types/cutting";

type CuttingTableProps = {
  pieces: CuttingPiece[];
  onProcess: (piece: CuttingPiece) => void;
};

export default function CuttingTable({
  pieces,
  onProcess,
}: CuttingTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-slate-700 text-white">
            <th className="border p-3">
              Piece Code
            </th>

            <th className="border p-3">
              Project
            </th>

            <th className="border p-3">
              Length
            </th>

            <th className="border p-3">
              Width
            </th>

            <th className="border p-3">
              Shape
            </th>

            <th className="border p-3">
              Status
            </th>

            <th className="border p-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {pieces.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="p-6 text-center text-gray-500"
              >
                No pieces found
              </td>
            </tr>
          ) : (
            pieces.map((piece) => (
              <tr
                key={piece.pieceId}
                className="hover:bg-slate-50"
              >
                <td className="border p-3">
                  {piece.pieceId}
                </td>

                <td className="border p-3">
                  {piece.project}
                </td>

                <td className="border p-3">
                  {piece.length}
                </td>

                <td className="border p-3">
                  {piece.width}
                </td>

                <td className="border p-3">
                  {piece.shapeType}
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
                  <button
                    onClick={() =>
                      onProcess(piece)
                    }
                    className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                  >
                    Process
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}