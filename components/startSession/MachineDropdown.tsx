type MachineDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function MachineDropdown({
  value,
  onChange,
  options,
}: MachineDropdownProps) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        Machine
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-lg border p-3"
      >
        <option value="">
          Select Machine
        </option>

        {options.map((machine) => (
          <option
            key={machine}
            value={machine}
          >
            {machine}
          </option>
        ))}
      </select>
    </div>
  );
}