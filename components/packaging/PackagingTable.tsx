import { PackagingPiece } from "@/types/packaging";
import PieceRow from "./PieceRow";

type PackagingTableProps = {
  pieces: PackagingPiece[];
  selectedPieces: string[];
  onTogglePiece: (
    pieceId: string
  ) => void;
};

export default function PackagingTable({
  pieces,
  selectedPieces,
  onTogglePiece,
}: PackagingTableProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">
                Select
              </th>

              <th className="p-3 text-left">
                Piece ID
              </th>

              <th className="p-3 text-left">
                Project
              </th>

              <th className="p-3 text-left">
                Slab
              </th>

              <th className="p-3 text-left">
                Shape Type
              </th>

              <th className="p-3 text-left">
                Length
              </th>

              <th className="p-3 text-left">
                Width
              </th>
            </tr>
          </thead>

          <tbody>
            {pieces.map((piece) => (
              <PieceRow
                key={piece.pieceId}
                piece={piece}
                selected={selectedPieces.includes(
                  piece.pieceId
                )}
                onToggle={
                  onTogglePiece
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}