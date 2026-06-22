import {
  directMaterials,
  productionConsumables,
  filmRolls,
  inventoryStocks,
  recentConsumptions,
} from "@/data/consumablesMockData";

export default function KPICards() {
  const totalDirectMaterials = directMaterials.length;

  const totalProductionConsumables =
    productionConsumables.length;

  const activeFilmRolls = filmRolls.length;

  const lowStockItems = inventoryStocks.filter(
    (item) => item.status === "Low"
  ).length;

  const todaysConsumption = recentConsumptions.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalItems =
    totalDirectMaterials +
    totalProductionConsumables;

  const cards = [
    {
      title: "Total Items",
      value: totalItems,
    },
    {
      title: "Direct Materials",
      value: totalDirectMaterials,
    },
    {
      title: "Production Consumables",
      value: totalProductionConsumables,
    },
    {
      title: "Active Film Rolls",
      value: activeFilmRolls,
    },
    {
      title: "Low Stock Items",
      value: lowStockItems,
    },
    {
      title: "Today's Consumption",
      value: todaysConsumption,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl border shadow-sm p-6"
        >
          <p className="text-sm text-gray-500">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-900">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}