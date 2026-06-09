import { FabricationPiece } from "@/types/fabrication";

type PieceRowProps = {
  piece: FabricationPiece;

  onRemarks: (
    piece: FabricationPiece
  ) => void;
};

export default function PieceRow({
  piece,
  onRemarks,
}: PieceRowProps) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="p-3">
        {piece.pieceId}
      </td>

      <td className="p-3">
        {piece.project}
      </td>

      <td className="p-3">
        {piece.shapeType}
      </td>

      <td className="p-3">
        {piece.length}
      </td>

      <td className="p-3">
        {piece.width}
      </td>

      <td className="p-3">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            piece.status === "Completed"
              ? "bg-green-100 text-green-700"
              : piece.status ===
                "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {piece.status}
        </span>
      </td>

      <td className="p-3">
        {piece.remarks || "-"}
      </td>

      <td className="p-3">
        <button
          onClick={() =>
            onRemarks(piece)
          }
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
        >
          Remarks
        </button>
      </td>
    </tr>
  );
}