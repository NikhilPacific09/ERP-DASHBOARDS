interface SearchPanelProps {
  searchTerm: string;

  statusFilter: string;

  onSearchChange: (
    value: string
  ) => void;

  onStatusChange: (
    value: string
  ) => void;
}

export default function SearchPanel({
  searchTerm,
  statusFilter,
  onSearchChange,
  onStatusChange,
}: SearchPanelProps) {
  return (
    <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">

      <h2 className="mb-4 text-xl font-bold">
        Search & Filters
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="text"
          placeholder="Search Customer..."
          value={searchTerm}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            onStatusChange(
              e.target.value
            )
          }
          className="rounded-lg border p-3"
        >
          <option value="">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Accepted">
            Accepted
          </option>

          <option value="Rejected">
            Rejected
          </option>
        </select>

      </div>

    </div>
  );
}