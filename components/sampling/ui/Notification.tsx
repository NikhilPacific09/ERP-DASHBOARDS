interface NotificationProps {
  message: string;
  type: "success" | "warning";
}

export default function Notification({
  message,
  type,
}: NotificationProps) {
  return (
    <div
      className={`fixed right-5 top-5 z-50 rounded-2xl px-6 py-4 text-white shadow-2xl
      ${
        type === "success"
          ? "bg-linear-to-r from-green-500 to-green-700"
          : "bg-linear-to-r from-orange-500 to-red-500"
      }`}
    >
      {message}
    </div>
  );
}