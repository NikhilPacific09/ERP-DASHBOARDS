import {
  DispatchPackage,
  DispatchHistoryItem,
} from "@/types/dispatch";

export const dispatchPackages: DispatchPackage[] = [
  {
    packageCode: "PKG001",
    piecesCount: 4,
    createdDate: "2026-06-01",
  },

  {
    packageCode: "PKG002",
    piecesCount: 3,
    createdDate: "2026-06-05",
  },

  {
    packageCode: "PKG003",
    piecesCount: 5,
    createdDate: "2026-06-08",
  },

  {
    packageCode: "PKG004",
    piecesCount: 2,
    createdDate: "2026-06-10",
  },

  {
    packageCode: "PKG005",
    piecesCount: 6,
    createdDate: "2026-06-12",
  },
];

export const dispatchHistory: DispatchHistoryItem[] = [
  {
    packageCode: "PKG0001",
    vehicleNumber: "CG04AB1234",
    driverName: "Ramesh Kumar",
    destination: "Raipur",
    dispatchDate: "2026-05-28",
    remarks: "Urgent delivery",
  },

  {
    packageCode: "PKG0002",
    vehicleNumber: "CG07CD5678",
    driverName: "Suresh Yadav",
    destination: "Bilaspur",
    dispatchDate: "2026-05-30",
    remarks: "Handle carefully",
  },

  {
    packageCode: "PKG0003",
    vehicleNumber: "CG10EF9012",
    driverName: "Mahesh Verma",
    destination: "Durg",
    dispatchDate: "2026-06-02",
    remarks: "Priority shipment",
  },
];