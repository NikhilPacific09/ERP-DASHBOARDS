export interface CustomerRequirement {
  id: string;
  customerName: string;
  color: string;
  length: number;
  width: number;
  thickness: number;
  quantity: number;
}

export interface StockItem {
  id: string;
  color: string;
  length: number;
  width: number;
  thickness: number;
  quantity: number;
  status: "Available" | "Low Stock" | "Out of Stock";
}

export interface SelectedMaterial {
  id: string;
  stockId: string;
  color: string;
  length: number;
  width: number;
  thickness: number;
  quantity: number;
}

export interface SizeSuggestion {
  id: string;
  length: number;
  width: number;
}

export interface CutterRequest {
  id: string;
  customerName: string;
  requiredSize: string;
  selectedSize: string;
  quantity: number;
  status: "Pending" | "Accepted" | "Rejected";
}

export interface SamplingStats {
  pendingRequests: number;
  availableStockItems: number;
  selectedMaterials: number;
  requestsSent: number;
}