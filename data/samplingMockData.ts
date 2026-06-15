import {
  CustomerRequirement,
  SamplingStats,
  SizeSuggestion,
  StockItem,
} from "@/types/sampling";

export const customerRequirement: CustomerRequirement = {
  id: "REQ-001",
  customerName: "ABC Industries",
  color: "Black",
  length: 4,
  width: 4,
  thickness: 20,
  quantity: 100,
};

export const samplingStats: SamplingStats = {
  pendingRequests: 12,
  availableStockItems: 245,
  selectedMaterials: 3,
  requestsSent: 8,
};

export const stockItems: StockItem[] = [
  {
    id: "STK-001",
    color: "Black",
    length: 4,
    width: 4,
    thickness: 20,
    quantity: 50,
    status: "Available",
  },

  {
    id: "STK-002",
    color: "Black",
    length: 5,
    width: 10,
    thickness: 20,
    quantity: 120,
    status: "Available",
  },

  {
    id: "STK-003",
    color: "Black",
    length: 10,
    width: 20,
    thickness: 20,
    quantity: 250,
    status: "Available",
  },

  {
    id: "STK-004",
    color: "Blue",
    length: 10,
    width: 10,
    thickness: 15,
    quantity: 180,
    status: "Available",
  },

  {
    id: "STK-005",
    color: "White",
    length: 12,
    width: 16,
    thickness: 25,
    quantity: 75,
    status: "Low Stock",
  },
];

export const sizeSuggestions: SizeSuggestion[] = [
  {
    id: "SZ-001",
    length: 4,
    width: 4,
  },

  {
    id: "SZ-002",
    length: 5,
    width: 10,
  },

  {
    id: "SZ-003",
    length: 10,
    width: 10,
  },

  {
    id: "SZ-004",
    length: 10,
    width: 20,
  },

  {
    id: "SZ-005",
    length: 12,
    width: 16,
  },
];