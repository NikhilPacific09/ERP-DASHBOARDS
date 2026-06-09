import { ResidualItem } from "@/types/residual";

type ResidualRowProps = {
  residual: ResidualItem;
};

export default function ResidualRow({
  residual,
}: ResidualRowProps) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="p-3">
        {residual.slabCode}
      </td>

      <td className="p-3">
        {residual.length}
      </td>

      <td className="p-3">
        {residual.width}
      </td>

      <td className="p-3">
        {residual.area}
      </td>

      <td className="p-3">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            residual.reusable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {residual.reusable
            ? "Reusable"
            : "Scrap"}
        </span>
      </td>

      <td className="p-3">
        {residual.remarks}
      </td>

      <td className="p-3">
        {residual.createdDate}
      </td>

      <td className="p-3">
        <button
          className="rounded bg-blue-600 px-3 py-1 text-white"
        >
          View
        </button>
      </td>
    </tr>
  );
}