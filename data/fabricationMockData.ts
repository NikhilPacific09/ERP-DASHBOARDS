import {
  FabricatorInfo,
  FabricationPiece,
} from "@/types/fabrication";

export const fabricatorInfo: FabricatorInfo = {
  fabricatorName: "Rahul Kumar",
  shift: "A",
};

export const fabricationPieces: FabricationPiece[] = [
  {
    pieceId: "P001",
    project: "PRJ001",
    shapeType: "Rectangle",
    length: 120,
    width: 60,
    status: "In Progress",
  },

  {
    pieceId: "P002",
    project: "PRJ001",
    shapeType: "L Shape",
    length: 140,
    width: 70,
    status: "Completed",
  },

  {
    pieceId: "P003",
    project: "PRJ002",
    shapeType: "Rectangle",
    length: 110,
    width: 55,
    status: "Pending",
  },

  {
    pieceId: "P004",
    project: "PRJ003",
    shapeType: "Custom",
    length: 180,
    width: 80,
    status: "In Progress",
  },

  {
    pieceId: "P005",
    project: "PRJ004",
    shapeType: "Rectangle",
    length: 150,
    width: 65,
    status: "Completed",
  },

  {
    pieceId: "P006",
    project: "PRJ005",
    shapeType: "L Shape",
    length: 135,
    width: 60,
    status: "Pending",
  },
];