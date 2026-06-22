// =========================
// Direct Materials
// =========================

export interface DirectMaterial {
  id: string;
  name: string;
  variant?: string;
  unit: string;
  dailyConsumption: number;
  status: "Active" | "Inactive";
}

// =========================
// Production Consumables
// =========================

export interface ProductionConsumable {
  id: string;
  name: string;
  unit: string;
  dailyConsumption: number;
  department: string;
  currentStock: number;
  minStock: number;
}

// =========================
// Polishing Consumables
// =========================

export interface PolishingConsumable {
  id: string;
  name: string;
  department: string;
}

// =========================
// Film Roll Tracking
// =========================

export interface FilmRoll {
  id: string;
  rollNumber: string;
  filmType: string;
  machine: string;

  initialWeight: number;

  layersUsed: number;

  weightPerLayer: number;

  consumedWeight: number;

  balanceWeight: number;
}

// =========================
// Inventory Stock
// =========================

export interface InventoryStock {
  id: string;

  itemName: string;

  category:
    | "Direct Material"
    | "Production Consumable"
    | "Polishing Consumable";

  unit: string;

  currentStock: number;

  minStock: number;

  status: "Healthy" | "Low";
}

// =========================
// Consumption Entry
// =========================

export interface ConsumptionEntry {
  id: string;

  date: string;

  department: string;

  itemName: string;

  quantity: number;

  unit: string;
}

// =========================
// Department Mapping
// =========================

export interface DepartmentMapping {
  department: string;

  items: string[];
}