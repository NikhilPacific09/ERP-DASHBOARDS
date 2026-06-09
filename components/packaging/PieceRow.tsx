import { PackagingPiece } from "@/types/packaging";

type PieceRowProps = {
  piece: PackagingPiece;
  selected: boolean;
  onToggle: (pieceId: string) => void;
};

export default function PieceRow({
  piece,
  selected,
  onToggle,
}: PieceRowProps) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="p-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={() =>
            onToggle(piece.pieceId)
          }
        />
      </td>

      <td className="p-3">
        {piece.pieceId}
      </td>

      <td className="p-3">
        {piece.project}
      </td>

      <td className="p-3">
        {piece.slab}
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
    </tr>
  );
}