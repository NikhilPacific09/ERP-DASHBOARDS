import {
  MachineInfo,
  SinkCuttingPiece,
} from "@/types/sinkCutting";

export const machineInfo: MachineInfo = {
  machineName: "Sink Cutting Machine 1",
  shift: "A",
  operatorName: "Rahul Kumar",
};

export const sinkCuttingPieces: SinkCuttingPiece[] = [
  {
    pieceId: "P001",
    project: "PRJ001",
    hasSink: true,
    hasPipeCut: true,
    shape: "Rectangle",
    status: "In Progress",
  },

  {
    pieceId: "P002",
    project: "PRJ001",
    hasSink: true,
    hasPipeCut: false,
    shape: "L Shape",
    status: "Completed",
  },

  {
    pieceId: "P003",
    project: "PRJ002",
    hasSink: false,
    hasPipeCut: true,
    shape: "Rectangle",
    status: "Pending",
  },

  {
    pieceId: "P004",
    project: "PRJ003",
    hasSink: true,
    hasPipeCut: true,
    shape: "Custom",
    status: "In Progress",
  },

  {
    pieceId: "P005",
    project: "PRJ004",
    hasSink: false,
    hasPipeCut: false,
    shape: "Rectangle",
    status: "Completed",
  },

  {
    pieceId: "P006",
    project: "PRJ005",
    hasSink: true,
    hasPipeCut: false,
    shape: "L Shape",
    status: "Pending",
  },
];