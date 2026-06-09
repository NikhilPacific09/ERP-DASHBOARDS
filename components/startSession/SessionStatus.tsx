type SessionStatusProps = {
  isActive: boolean;
};

export default function SessionStatus({
  isActive,
}: SessionStatusProps) {
  return (
    <div className="mb-6">
      <span
        className={`rounded-full px-4 py-2 text-sm font-semibold ${
          isActive
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        Status:{" "}
        {isActive
          ? "Active"
          : "Inactive"}
      </span>
    </div>
  );
}