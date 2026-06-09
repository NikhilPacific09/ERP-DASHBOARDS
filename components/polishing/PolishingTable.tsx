import { PolishingPiece } from "@/types/polishing";
import PieceRow from "./PieceRow";

type PolishingTableProps = {
  pieces: PolishingPiece[];
  onRemarks: (
    piece: PolishingPiece
  ) => void;
};

export default function PolishingTable({
  pieces,
  onRemarks,
}: PolishingTableProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Polishing Pieces
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">
                Piece ID
              </th>

              <th className="p-3 text-left">
                Project
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

              <th className="p-3 text-left">
                Status
              </th>

              <th className="p-3 text-left">
                Start Time
              </th>

              <th className="p-3 text-left">
                End Time
              </th>

              <th className="p-3 text-left">
                Remarks
              </th>

              <th className="p-3 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {pieces.map((piece) => (
              <PieceRow
                key={piece.pieceId}
                piece={piece}
                onRemarks={onRemarks}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}