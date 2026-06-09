import { DispatchPackage } from "@/types/dispatch";
import DispatchRow from "./DispatchRow";

type DispatchTableProps = {
  packages: DispatchPackage[];

  onDispatch: (
    dispatchPackage: DispatchPackage
  ) => void;
};

export default function DispatchTable({
  packages,
  onDispatch,
}: DispatchTableProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Dispatch Queue
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">
                Package Code
              </th>

              <th className="p-3 text-left">
                Pieces Count
              </th>

              <th className="p-3 text-left">
                Created Date
              </th>

              <th className="p-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {packages.map((pkg) => (
              <DispatchRow
                key={pkg.packageCode}
                dispatchPackage={pkg}
                onDispatch={
                  onDispatch
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}