import { DispatchPackage } from "@/types/dispatch";

type DispatchRowProps = {
  dispatchPackage: DispatchPackage;
  onDispatch: (
    dispatchPackage: DispatchPackage
  ) => void;
};

export default function DispatchRow({
  dispatchPackage,
  onDispatch,
}: DispatchRowProps) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="p-3">
        {dispatchPackage.packageCode}
      </td>

      <td className="p-3">
        {dispatchPackage.piecesCount}
      </td>

      <td className="p-3">
        {dispatchPackage.createdDate}
      </td>

      <td className="p-3">
        <button
          onClick={() =>
            onDispatch(dispatchPackage)
          }
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
        >
          Dispatch
        </button>
      </td>
    </tr>
  );
}