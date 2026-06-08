"use client";

import { useEffect, useState } from "react";

type CreateRecordModalProps = {
  isOpen: boolean;
  onClose: () => void;

  onSave: (record: {
    pieceId: string;
    length: number;
    width: number;
    shapeType: string;
    remarks: string;
  }) => void;

  record?: {
    pieceId: string;
    length: number;
    width: number;
    shapeType: string;
  } | null;

  isEditMode?: boolean;
};

export default function CreateRecordModal({
  isOpen,
  onClose,
  onSave,
  record,
  isEditMode = false,
}: CreateRecordModalProps) {
  const [pieceId, setPieceId] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [shapeType, setShapeType] =
    useState("Rectangle");
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (record && isEditMode) {
      setPieceId(record.pieceId);
      setLength(String(record.length));
      setWidth(String(record.width));
      setShapeType(record.shapeType);
    }
  }, [record, isEditMode]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (
      !pieceId.trim() ||
      !length ||
      !width
    ) {
      alert("Please fill all required fields");
      return;
    }

    onSave({
      pieceId,
      length: Number(length),
      width: Number(width),
      shapeType,
      remarks,
    });

    setPieceId("");
    setLength("");
    setWidth("");
    setShapeType("Rectangle");
    setRemarks("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">
          {isEditMode
            ? "Edit Record"
            : "Create Record"}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">
              Piece ID
            </label>

            <input
              type="text"
              value={pieceId}
              onChange={(e) =>
                setPieceId(e.target.value)
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Length
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Width
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Shape Type
            </label>

            <select
              value={shapeType}
              onChange={(e) =>
                setShapeType(e.target.value)
              }
              className="w-full rounded border p-2"
            >
              <option>Rectangle</option>
              <option>L Shape</option>
              <option>Custom</option>
            </select>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              Special Features
            </h3>

            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Has Sink
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Has Pipe Cut
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Has Radius
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Has Curve
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Reverse Layout
              </label>
            </div>
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Remarks
            </label>

            <textarea
              rows={4}
              value={remarks}
              onChange={(e) =>
                setRemarks(e.target.value)
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={handleSave}
              className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              {isEditMode
                ? "Update"
                : "Save"}
            </button>

            <button
              onClick={onClose}
              className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}