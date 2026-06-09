type PackagingActionsProps = {
  onSelectAll: () => void;
  onCreatePackage: () => void;
};

export default function PackagingActions({
  onSelectAll,
  onCreatePackage,
}: PackagingActionsProps) {
  return (
    <div className="mb-4 flex gap-3">
      <button
        onClick={onSelectAll}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Select All
      </button>

      <button
        onClick={onCreatePackage}
        className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        Create Package
      </button>
    </div>
  );
}