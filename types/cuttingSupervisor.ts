export interface CuttingRequest {
  id: string;

  customerName: string;

  color: string;

  requiredSize: string;

  selectedSize: string;

  thickness: number;

  quantity: number;

  status:
    | "Pending"
    | "Accepted"
    | "Rejected";

  rejectionReason?: string;
}

export interface CuttingJob {
  id: string;

  requestId: string;

  customerName: string;

  machine: string;

  operator: string;

  progress: number;

  quantity: number;

  status:
    | "Assigned"
    | "In Progress"
    | "Completed"
    | "Sent To Fabrication";
}

export interface Machine {
  id: string;

  name: string;

  status:
    | "Available"
    | "Busy";
}

export interface Operator {
  id: string;

  name: string;

  status:
    | "Available"
    | "Busy";
}

export interface StockVerification {
  color: string;

  availableQuantity: number;

  status:
    | "Available"
    | "Unavailable";
}

export interface StockItem {
  id: string;

  color: string;

  status:
    | "Available"
    | "Unavailable";
}

export interface DashboardAnalytics {
  totalRequests: number;

  pendingRequests: number;

  acceptedRequests: number;

  rejectedRequests: number;

  activeJobs: number;

  completedJobs: number;

  sentToFabrication: number;
}

export interface JobHistory {
  id: string;

  customerName: string;

  machine: string;

  operator: string;

  completedAt: string;
}