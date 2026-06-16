interface NotificationProps {
  message: string;

  type:
    | "success"
    | "warning";
}

export default function Notification({
  message,
  type,
}: NotificationProps) {
  return (
    <div
      className={`
        fixed right-5 top-5 z-50
        min-w-[320px]
        rounded-xl
        px-6 py-4
        text-white
        shadow-2xl
        transition-all duration-300

        ${
          type === "success"
            ? "bg-linear-to-r from-green-600 to-emerald-600"
            : "bg-linear-to-r from-orange-500 to-red-500"
        }
      `}
    >
      <div className="flex items-center gap-3">

        <div className="text-2xl">
          {type === "success"
            ? "✅"
            : "⚠️"}
        </div>

        <div>
          <p className="font-semibold">
            {type === "success"
              ? "Success"
              : "Warning"}
          </p>

          <p className="text-sm">
            {message}
          </p>
        </div>

      </div>
    </div>
  );
}