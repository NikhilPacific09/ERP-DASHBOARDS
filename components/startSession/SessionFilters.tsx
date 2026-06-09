type SessionFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;

  selectedShift: string;
  onShiftChange: (value: string) => void;
};

export default function SessionFilters({
  search,
  onSearchChange,
  selectedShift,
  onShiftChange,
}: SessionFiltersProps) {
  return (
    <div className="mb-6 grid gap-4 rounded-xl bg-white p-4 shadow md:grid-cols-2">
      <div>
        <label className="mb-2 block font-medium">
          Search Machine
        </label>

        <input
          type="text"
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder="Search..."
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Shift Filter
        </label>

        <select
          value={selectedShift}
          onChange={(e) =>
            onShiftChange(e.target.value)
          }
          className="w-full rounded-lg border p-3"
        >
          <option value="">
            All Shifts
          </option>

          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
    </div>
  );
}