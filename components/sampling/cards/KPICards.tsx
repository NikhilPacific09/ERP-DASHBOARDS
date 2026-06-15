interface KPICardsProps {
  selectedMaterials: number;
  requestsSent: number;
  availableStock: number;
}

export default function KPICards({
  selectedMaterials,
  requestsSent,
  availableStock,
}: KPICardsProps) {
  const cards = [
    {
      title: "Selected Materials",
      value: selectedMaterials,
      icon: "📦",
      bg: "from-blue-500 to-blue-700",
    },

    {
      title: "Requests Sent",
      value: requestsSent,
      icon: "📤",
      bg: "from-green-500 to-green-700",
    },

    {
      title: "Available Stock",
      value: availableStock,
      icon: "🏭",
      bg: "from-purple-500 to-purple-700",
    },

    {
      title: "Pending Requests",
      value: requestsSent,
      icon: "⏳",
      bg: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-linear-to-r ${card.bg}
          rounded-2xl p-6 text-white shadow-xl transition-transform duration-300 hover:scale-105`}
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