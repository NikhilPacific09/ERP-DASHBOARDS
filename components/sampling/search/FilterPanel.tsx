"use client";

interface FilterPanelProps {
  length: string;
  width: string;
  thickness: string;
  color: string;

  onLengthChange: (
    value: string
  ) => void;

  onWidthChange: (
    value: string
  ) => void;

  onThicknessChange: (
    value: string
  ) => void;

  onColorChange: (
    value: string
  ) => void;

  onReset: () => void;
}

export default function FilterPanel({
  length,
  width,
  thickness,
  color,

  onLengthChange,
  onWidthChange,
  onThicknessChange,
  onColorChange,

  onReset,
}: FilterPanelProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Inventory Filters
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <input
          type="text"
          placeholder="Length"
          value={length}
          onChange={(e) =>
            onLengthChange(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Width"
          value={width}
          onChange={(e) =>
            onWidthChange(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Thickness"
          value={thickness}
          onChange={(e) =>
            onThicknessChange(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) =>
            onColorChange(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={onReset}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}