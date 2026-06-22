import {
  DirectMaterial,
  ProductionConsumable,
  PolishingConsumable,
  FilmRoll,
  InventoryStock,
  ConsumptionEntry,
  DepartmentMapping,
} from "@/types/consumables";

// ======================================
// Direct Materials
// ======================================

export const directMaterials: DirectMaterial[] = [
  {
    id: "dm1",
    name: "Quartz Grit",
    variant: "A&A Silicates 0.1-0.4MM",
    unit: "KG",
    dailyConsumption: 1200,
    status: "Active",
  },
  {
    id: "dm2",
    name: "Quartz Grit",
    variant: "Phenikaa Cristobalite 0.1-0.4MM",
    unit: "KG",
    dailyConsumption: 900,
    status: "Active",
  },
  {
    id: "dm3",
    name: "Quartz Powder",
    variant: "A&A Silicates 400#",
    unit: "KG",
    dailyConsumption: 800,
    status: "Active",
  },
  {
    id: "dm4",
    name: "Resin",
    variant: "Orson",
    unit: "KG",
    dailyConsumption: 350,
    status: "Active",
  },
  {
    id: "dm5",
    name: "Resin",
    variant: "Ineos",
    unit: "KG",
    dailyConsumption: 250,
    status: "Active",
  },
  {
    id: "dm6",
    name: "Catalyst",
    variant: "Catalyst 93",
    unit: "KG",
    dailyConsumption: 75,
    status: "Active",
  },
  {
    id: "dm7",
    name: "Catalyst",
    variant: "Catalyst S21",
    unit: "KG",
    dailyConsumption: 0,
    status: "Inactive",
  },
  {
    id: "dm8",
    name: "Catalyst",
    variant: "Catalyst Ambani",
    unit: "KG",
    dailyConsumption: 0,
    status: "Inactive",
  },
  {
    id: "dm9",
    name: "Cobalt",
    variant: "Cobalt Ambani",
    unit: "Can",
    dailyConsumption: 0.33,
    status: "Active",
  },
  {
    id: "dm10",
    name: "Cobalt",
    variant: "Cobalt Nouryon",
    unit: "Can",
    dailyConsumption: 0.07,
    status: "Active",
  },
  {
    id: "dm11",
    name: "Silane",
    variant: "Standard",
    unit: "Can",
    dailyConsumption: 4,
    status: "Active",
  },
  {
    id: "dm12",
    name: "TiO2",
    variant: "Standard",
    unit: "KG",
    dailyConsumption: 50,
    status: "Active",
  },
  {
    id: "dm13",
    name: "Pigment",
    variant: "Standard",
    unit: "KG",
    dailyConsumption: 35,
    status: "Active",
  },
];

// ======================================
// Production Consumables
// ======================================

export const productionConsumables: ProductionConsumable[] = [
  {
    id: "pc1",
    name: "Moulds",
    unit: "PCS",
    dailyConsumption: 10,
    department: "Production",
    currentStock: 200,
    minStock: 50,
  },
  {
    id: "pc2",
    name: "PVA Roll",
    unit: "Roll",
    dailyConsumption: 1,
    department: "Production",
    currentStock: 40,
    minStock: 10,
  },
  {
    id: "pc3",
    name: "Glue Can",
    unit: "KG",
    dailyConsumption: 20,
    department: "Production",
    currentStock: 500,
    minStock: 100,
  },
  {
    id: "pc4",
    name: "Guard Sheets",
    unit: "PCS",
    dailyConsumption: 15,
    department: "Production",
    currentStock: 300,
    minStock: 50,
  },
  {
    id: "pc5",
    name: "Gas",
    unit: "Cylinder",
    dailyConsumption: 2,
    department: "Production",
    currentStock: 50,
    minStock: 10,
  },
  {
    id: "pc6",
    name: "Cotton Waste",
    unit: "KG",
    dailyConsumption: 35,
    department: "Mixer",
    currentStock: 800,
    minStock: 150,
  },
  {
    id: "pc7",
    name: "Acetone",
    unit: "KG",
    dailyConsumption: 150,
    department: "Mixer",
    currentStock: 5000,
    minStock: 1000,
  },
  {
    id: "pc8",
    name: "Gloves",
    unit: "Set",
    dailyConsumption: 30,
    department: "All",
    currentStock: 800,
    minStock: 200,
  },
  {
    id: "pc9",
    name: "Coolent Oil",
    unit: "Liter",
    dailyConsumption: 0.5,
    department: "Production",
    currentStock: 100,
    minStock: 20,
  },
  {
    id: "pc10",
    name: "Soap Oil",
    unit: "Liter",
    dailyConsumption: 1,
    department: "Production",
    currentStock: 100,
    minStock: 20,
  },
  {
    id: "pc11",
    name: "Mask N95",
    unit: "PCS",
    dailyConsumption: 40,
    department: "All",
    currentStock: 1200,
    minStock: 300,
  },
  {
    id: "pc12",
    name: "Ear Plug",
    unit: "PCS",
    dailyConsumption: 1,
    department: "Press",
    currentStock: 100,
    minStock: 20,
  },
  {
    id: "pc13",
    name: "Scrapper",
    unit: "PCS",
    dailyConsumption: 1,
    department: "Mixer",
    currentStock: 50,
    minStock: 10,
  },
  {
    id: "pc14",
    name: "Stationery Items",
    unit: "PCS",
    dailyConsumption: 3,
    department: "All",
    currentStock: 200,
    minStock: 50,
  },
];

// ======================================
// Polishing Consumables
// ======================================

export const polishingConsumables: PolishingConsumable[] = [
  {
    id: "pol1",
    name: "Calibration",
    department: "Polishing",
  },
  {
    id: "pol2",
    name: "Polishing",
    department: "Polishing",
  },
  {
    id: "pol3",
    name: "Slab Repair + Sealant",
    department: "Polishing",
  },
  {
    id: "pol4",
    name: "Musa Edge Polishing",
    department: "Polishing",
  },
  {
    id: "pol5",
    name: "Hand Polishing",
    department: "Polishing",
  },
];

// ======================================
// Inventory Stock
// ======================================

export const inventoryStocks: InventoryStock[] = [
  {
    id: "inv1",
    itemName: "Acetone",
    category: "Production Consumable",
    unit: "KG",
    currentStock: 5000,
    minStock: 1000,
    status: "Healthy",
  },
  {
    id: "inv2",
    itemName: "Mask N95",
    category: "Production Consumable",
    unit: "PCS",
    currentStock: 1200,
    minStock: 300,
    status: "Healthy",
  },
  {
    id: "inv3",
    itemName: "Gloves",
    category: "Production Consumable",
    unit: "Set",
    currentStock: 800,
    minStock: 200,
    status: "Healthy",
  },
  {
    id: "inv4",
    itemName: "Catalyst 93",
    category: "Direct Material",
    unit: "KG",
    currentStock: 150,
    minStock: 300,
    status: "Low",
  },
  {
    id: "inv5",
    itemName: "Ear Plug",
    category: "Production Consumable",
    unit: "PCS",
    currentStock: 15,
    minStock: 20,
    status: "Low",
  },
];

// ======================================
// Film Roll Tracking
// ======================================

export const filmRolls: FilmRoll[] = [
  {
    id: "fr1",
    rollNumber: "FILM001",
    filmType: "Adhesive Film",
    machine: "Mixer Unloading Cabin",
    initialWeight: 40,
    layersUsed: 5,
    weightPerLayer: 1.4,
    consumedWeight: 7,
    balanceWeight: 33,
  },
  {
    id: "fr2",
    rollNumber: "FILM002",
    filmType: "PET Coil",
    machine: "Distributor Belt",
    initialWeight: 40,
    layersUsed: 8,
    weightPerLayer: 1.2,
    consumedWeight: 9.6,
    balanceWeight: 30.4,
  },
  {
    id: "fr3",
    rollNumber: "FILM003",
    filmType: "Antistatic Film",
    machine: "Crusher Belt",
    initialWeight: 40,
    layersUsed: 12,
    weightPerLayer: 1.5,
    consumedWeight: 18,
    balanceWeight: 22,
  },
];

// ======================================
// Recent Consumption
// ======================================

export const recentConsumptions: ConsumptionEntry[] = [
  {
    id: "c1",
    date: "Today",
    department: "Mixer",
    itemName: "Acetone",
    quantity: 150,
    unit: "KG",
  },
  {
    id: "c2",
    date: "Today",
    department: "Production",
    itemName: "Mask N95",
    quantity: 40,
    unit: "PCS",
  },
  {
    id: "c3",
    date: "Today",
    department: "Production",
    itemName: "Gloves",
    quantity: 30,
    unit: "Set",
  },
];

// ======================================
// Department Mapping
// ======================================

export const departmentMappings: DepartmentMapping[] = [
  {
    department: "Mixer",
    items: [
      "Acetone",
      "Cotton Waste",
      "Mask",
      "Gloves",
      "Scrapper",
    ],
  },
  {
    department: "Distributor",
    items: [
      "Acetone",
      "Mask",
      "Gloves",
      "Cotton Waste",
    ],
  },
  {
    department: "Press",
    items: [
      "Gloves",
      "Ear Plug",
    ],
  },
  {
    department: "LB Line",
    items: [
      "Mask",
      "Cotton Gloves",
    ],
  },
  {
    department: "Raw Material",
    items: [
      "Mask",
      "Gloves",
      "Disposable Glass",
    ],
  },
  {
    department: "Silos",
    items: [
      "Mask",
      "Gloves",
    ],
  },
];