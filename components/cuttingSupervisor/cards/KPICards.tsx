interface KPICardsProps {
  pendingRequests: number;
  acceptedRequests: number;
  rejectedRequests: number;
  activeJobs: number;
}

export default function KPICards({
  pendingRequests,
  acceptedRequests,
  rejectedRequests,
  activeJobs,
}: KPICardsProps) {
  const cards = [
    {
      title: "Pending Requests",
      value: pendingRequests,
      icon: "📥",
      bg: "from-yellow-500 to-orange-500",
    },

    {
      title: "Accepted Requests",
      value: acceptedRequests,
      icon: "✅",
      bg: "from-green-500 to-emerald-600",
    },

    {
      title: "Rejected Requests",
      value: rejectedRequests,
      icon: "❌",
      bg: "from-red-500 to-rose-600",
    },

    {
      title: "Active Jobs",
      value: activeJobs,
      icon: "⚙️",
      bg: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-linear-to-r ${card.bg}
          rounded-2xl p-6 text-white shadow-xl
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-2xl`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">
                {card.title}
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {card.value}
              </h2>
            </div>

            <div className="text-5xl">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}