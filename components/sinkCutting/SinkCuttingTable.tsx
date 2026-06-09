import { SinkCuttingPiece } from "@/types/sinkCutting";
import PieceRow from "./PieceRow";

type SinkCuttingTableProps = {
  pieces: SinkCuttingPiece[];

  onRemarks: (
    piece: SinkCuttingPiece
  ) => void;
};

export default function SinkCuttingTable({
  pieces,
  onRemarks,
}: SinkCuttingTableProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Sink Cutting Pieces
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
                Has Sink
              </th>

              <th className="p-3 text-left">
                Has Pipe Cut
              </th>

              <th className="p-3 text-left">
                Shape
              </th>

              <th className="p-3 text-left">
                Status
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