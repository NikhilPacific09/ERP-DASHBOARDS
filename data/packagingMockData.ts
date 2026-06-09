import {
  PackagingPiece,
  PackageItem,
} from "@/types/packaging";

export const packagingPieces: PackagingPiece[] = [
  {
    pieceId: "P001",
    project: "PRJ001",
    slab: "SLAB-101",
    shapeType: "Rectangle",
    length: 120,
    width: 60,
  },

  {
    pieceId: "P002",
    project: "PRJ001",
    slab: "SLAB-101",
    shapeType: "L Shape",
    length: 140,
    width: 70,
  },

  {
    pieceId: "P003",
    project: "PRJ002",
    slab: "SLAB-102",
    shapeType: "Rectangle",
    length: 110,
    width: 55,
  },

  {
    pieceId: "P004",
    project: "PRJ003",
    slab: "SLAB-103",
    shapeType: "Custom",
    length: 180,
    width: 80,
  },

  {
    pieceId: "P005",
    project: "PRJ004",
    slab: "SLAB-104",
    shapeType: "Rectangle",
    length: 150,
    width: 65,
  },

  {
    pieceId: "P006",
    project: "PRJ005",
    slab: "SLAB-105",
    shapeType: "L Shape",
    length: 135,
    width: 60,
  },
];

export const existingPackages: PackageItem[] = [
  {
    packageCode: "PKG001",
    piecesCount: 4,
    createdDate: "2026-06-01",
    remarks: "Ready for dispatch",
  },

  {
    packageCode: "PKG002",
    piecesCount: 3,
    createdDate: "2026-06-05",
    remarks: "Urgent order",
  },

  {
    packageCode: "PKG003",
    piecesCount: 5,
    createdDate: "2026-06-08",
    remarks: "Export shipment",
  },
];