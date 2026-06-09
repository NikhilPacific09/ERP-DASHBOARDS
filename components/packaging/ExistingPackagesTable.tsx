import { PackageItem } from "@/types/packaging";

type ExistingPackagesTableProps = {
  packages: PackageItem[];
};

export default function ExistingPackagesTable({
  packages,
}: ExistingPackagesTableProps) {
  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">
        Existing Packages
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
            </tr>
          </thead>

          <tbody>
            {packages.map((pkg) => (
              <tr
                key={pkg.packageCode}
                className="border-b"
              >
                <td className="p-3">
                  {pkg.packageCode}
                </td>

                <td className="p-3">
                  {pkg.piecesCount}
                </td>

                <td className="p-3">
                  {pkg.createdDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}