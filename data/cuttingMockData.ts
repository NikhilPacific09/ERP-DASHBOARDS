import { CuttingRecord } from "@/types/cutting";

export const cuttingRecords: CuttingRecord[] = [
  {
    pieceId: "P001",
    project: "Kitchen Top",
    length: 120,
    width: 60,
    shapeType: "Rectangle",
    status: "Completed",
    startTime: "09:00",
    endTime: "09:20",
  },
  {
    pieceId: "P002",
    project: "Counter Top",
    length: 150,
    width: 70,
    shapeType: "L Shape",
    status: "In Progress",
    startTime: "10:00",
    endTime: "-",
  },
];