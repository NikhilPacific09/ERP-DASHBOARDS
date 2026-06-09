"use client";

import { useState } from "react";

import {
  CuttingPiece,
  ProcessCuttingPayload,
} from "@/types/cutting";

type ProcessModalProps = {
  isOpen: boolean;
  onClose: () => void;

  piece: CuttingPiece | null;

  onSaveDraft: (
    payload: ProcessCuttingPayload
  ) => void;

  onCompleteCutting: (
    payload: ProcessCuttingPayload
  ) => void;
};

export default function CreateRecordModal({
  isOpen,
  onClose,
  piece,
  onSaveDraft,
  onCompleteCutting,
}: ProcessModalProps) {
  const [shapeType, setShapeType] =
    useState(
      piece?.shapeType ?? "Rectangle"
    );

  const [length, setLength] =
    useState(
      piece
        ? String(piece.length)
        : ""
    );

  const [width, setWidth] =
    useState(
      piece
        ? String(piece.width)
        : ""
    );

  const [longLength, setLongLength] =
    useState("");

  const [longWidth, setLongWidth] =
    useState("");

  const [hasSink, setHasSink] =
    useState(false);

  const [hasPipeCut, setHasPipeCut] =
    useState(false);

  const [hasRadius, setHasRadius] =
    useState(false);

  const [hasCurve, setHasCurve] =
    useState(false);

  const [reverseLayout, setReverseLayout] =
    useState(false);

  const [remarks, setRemarks] =
    useState("");

  if (!isOpen || !piece) return null;

  const buildPayload =
    (): ProcessCuttingPayload => ({
      pieceId: piece.pieceId,

      shapeType:
        shapeType as ProcessCuttingPayload["shapeType"],

      length: Number(length),

      width: Number(width),

      longLength:
        Number(longLength) || 0,

      longWidth:
        Number(longWidth) || 0,

      hasSink,

      hasPipeCut,

      hasRadius,

      hasCurve,

      reverseLayout,

      remarks,
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">
          Process Piece
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">
              Piece Code
            </label>

            <input
              value={piece.pieceId}
              readOnly
              className="w-full rounded border bg-slate-100 p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Shape Type
            </label>

            <select
              value={shapeType}
              onChange={(e) =>
                setShapeType(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            >
              <option>
                Rectangle
              </option>

              <option>
                L Shape
              </option>

              <option>
                Curve
              </option>

              <option>
                Round
              </option>

              <option>
                Custom
              </option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block font-medium">
                Length
              </label>

              <input
                type="number"
                value={length}
                onChange={(e) =>
                  setLength(
                    e.target.value
                  )
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
                  setWidth(
                    e.target.value
                  )
                }
                className="w-full rounded border p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block font-medium">
                Long Length
              </label>

              <input
                type="number"
                value={longLength}
                onChange={(e) =>
                  setLongLength(
                    e.target.value
                  )
                }
                className="w-full rounded border p-2"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">
                Long Width
              </label>

              <input
                type="number"
                value={longWidth}
                onChange={(e) =>
                  setLongWidth(
                    e.target.value
                  )
                }
                className="w-full rounded border p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasSink}
                onChange={(e) =>
                  setHasSink(
                    e.target.checked
                  )
                }
              />
              Has Sink
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasPipeCut}
                onChange={(e) =>
                  setHasPipeCut(
                    e.target.checked
                  )
                }
              />
              Has Pipe Cut
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasRadius}
                onChange={(e) =>
                  setHasRadius(
                    e.target.checked
                  )
                }
              />
              Has Radius
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={hasCurve}
                onChange={(e) =>
                  setHasCurve(
                    e.target.checked
                  )
                }
              />
              Has Curve
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={reverseLayout}
                onChange={(e) =>
                  setReverseLayout(
                    e.target.checked
                  )
                }
              />
              Reverse Layout
            </label>
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Remarks
            </label>

            <textarea
              rows={4}
              value={remarks}
              onChange={(e) =>
                setRemarks(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() =>
              onSaveDraft(
                buildPayload()
              )
            }
            className="rounded bg-yellow-500 px-4 py-2 text-white"
          >
            Save Draft
          </button>

          <button
            onClick={() =>
              onCompleteCutting(
                buildPayload()
              )
            }
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            Complete Cutting
          </button>

          <button
            onClick={onClose}
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}