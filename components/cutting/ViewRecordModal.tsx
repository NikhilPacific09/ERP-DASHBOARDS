import { CuttingRecord } from "@/types/cutting";

type ViewRecordModalProps = {
  isOpen: boolean;
  onClose: () => void;
  record: CuttingRecord | null;
};

export default function ViewRecordModal({
  isOpen,
  onClose,
  record,
}: ViewRecordModalProps) {
  if (!isOpen || !record) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          Record Details
        </h2>

        <div className="space-y-3">
          <p>
            <strong>Piece ID:</strong> {record.pieceId}
          </p>

          <p>
            <strong>Project:</strong> {record.project}
          </p>

          <p>
            <strong>Length:</strong> {record.length}
          </p>

          <p>
            <strong>Width:</strong> {record.width}
          </p>

          <p>
            <strong>Shape Type:</strong> {record.shapeType}
          </p>

          <p>
            <strong>Status:</strong> {record.status}
          </p>

          <p>
            <strong>Start Time:</strong> {record.startTime}
          </p>

          <p>
            <strong>End Time:</strong> {record.endTime}
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}