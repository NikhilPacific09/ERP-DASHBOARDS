type ExportButtonProps = {
  onExport: () => void;
};

export default function ExportButton({
  onExport,
}: ExportButtonProps) {
  return (
    <button
      onClick={onExport}
      className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}