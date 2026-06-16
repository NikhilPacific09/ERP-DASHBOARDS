interface ExportReportButtonProps {
  onExport: () => void;
}

export default function ExportReportButton({
  onExport,
}: ExportReportButtonProps) {
  return (
    <button
      onClick={onExport}
      className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
    >
      Export Report
    </button>
  );
}