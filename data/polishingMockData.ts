import {
  MachineInfo,
  PolishingPiece,
} from "@/types/polishing";

export const machineInfo: MachineInfo = {
  machineName: "Polishing Machine 1",
  shift: "A",
  operatorName: "Rahul Kumar",
};

export const polishingPieces: PolishingPiece[] = [
  {
    pieceId: "P001",
    project: "PRJ001",
    shapeType: "Rectangle",
    length: 120,
    width: 60,
    status: "In Progress",
    startTime: "09:00 AM",
    endTime: "-",
  },

  {
    pieceId: "P002",
    project: "PRJ001",
    shapeType: "L Shape",
    length: 140,
    width: 70,
    status: "Completed",
    startTime: "08:30 AM",
    endTime: "10:15 AM",
  },

  {
    pieceId: "P003",
    project: "PRJ002",
    shapeType: "Rectangle",
    length: 110,
    width: 55,
    status: "Pending",
    startTime: "-",
    endTime: "-",
  },

  {
    pieceId: "P004",
    project: "PRJ003",
    shapeType: "Custom",
    length: 180,
    width: 80,
    status: "In Progress",
    startTime: "10:00 AM",
    endTime: "-",
  },

  {
    pieceId: "P005",
    project: "PRJ004",
    shapeType: "Rectangle",
    length: 150,
    width: 65,
    status: "Completed",
    startTime: "07:45 AM",
    endTime: "09:20 AM",
  },

  {
    pieceId: "P006",
    project: "PRJ005",
    shapeType: "L Shape",
    length: 135,
    width: 60,
    status: "Pending",
    startTime: "-",
    endTime: "-",
  },
];