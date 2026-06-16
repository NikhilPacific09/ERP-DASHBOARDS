import {
  CuttingRequest,
  Machine,
  Operator,
} from "@/types/cuttingSupervisor";

export const incomingRequests: CuttingRequest[] =
[
  {
    id: "REQ-001",

    customerName:
      "ABC Industries",

    color: "Black",

    requiredSize: "4 x 4",

    selectedSize: "5 x 10",

    thickness: 20,

    quantity: 100,

    status: "Pending",
  },

  {
    id: "REQ-002",

    customerName:
      "XYZ Builders",

    color: "White",

    requiredSize: "10 x 10",

    selectedSize: "12 x 16",

    thickness: 20,

    quantity: 80,

    status: "Pending",
  },
];

export const machines: Machine[] =
[
  {
    id: "MC-001",
    name: "CNC Machine 1",
    status: "Available",
  },

  {
    id: "MC-002",
    name: "CNC Machine 2",
    status: "Available",
  },
];

export const operators: Operator[] =
[
  {
    id: "OP-001",
    name: "Rajesh",
    status: "Available",
  },

  {
    id: "OP-002",
    name: "Suresh",
    status: "Available",
  },
];


export const stockInventory = [
  {
    id: "STK-001",
    color: "Black",
    status: "Available",
  },

  {
    id: "STK-002",
    color: "White",
    status: "Available",
  },

  {
    id: "STK-003",
    color: "Grey",
    status: "Unavailable",
  },
];