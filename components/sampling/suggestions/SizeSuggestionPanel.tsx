import { SizeSuggestion } from "@/types/sampling";

interface SizeSuggestionPanelProps {
  suggestions: SizeSuggestion[];

  onSelectSuggestion: (
    length: number,
    width: number
  ) => void;
}

export default function SizeSuggestionPanel({
  suggestions,
  onSelectSuggestion,
}: SizeSuggestionPanelProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">
          Suggested Sizes
        </h2>

        <p className="text-sm text-gray-500">
          Click a size to instantly filter inventory
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((size) => (
          <button
            key={size.id}
            onClick={() =>
              onSelectSuggestion(
                size.length,
                size.width
              )
            }
            className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 transition hover:bg-blue-100"
          >
            <span className="font-semibold text-blue-700">
              {size.length} × {size.width}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}