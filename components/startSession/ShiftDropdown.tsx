type ShiftDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function ShiftDropdown({
  value,
  onChange,
  options,
}: ShiftDropdownProps) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        Shift
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-lg border p-3"
      >
        <option value="">
          Select Shift
        </option>

        {options.map((shift) => (
          <option
            key={shift}
            value={shift}
          >
            {shift}
          </option>
        ))}
      </select>
    </div>
  );
}