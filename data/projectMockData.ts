import { ProjectDetails } from "@/types/project";

export const projectMockData: ProjectDetails = {
  id: "1",

  projectCode: "PRJ-001",

  customer: "ABC Builders",

  numberOfPieces: 6,

  drawing: "Kitchen Drawing V1",

  remarks:
    "Premium quartz kitchen project",

  operations: {
    cutting: true,
    polishing: true,
    sinkCutting: true,
    fabrication: false,
    packaging: false,
  },

  slabs: [
    {
      slabCode: "SLAB-101",
      pieceCount: 3,
    },
    {
      slabCode: "SLAB-102",
      pieceCount: 3,
    },
  ],

  pieces: [
    {
      pieceCode: "P001",
      shape: "Rectangle",
      length: 120,
      width: 60,
      status: "Completed",
      slab: "SLAB-101",
    },
    {
      pieceCode: "P002",
      shape: "L Shape",
      length: 140,
      width: 70,
      status: "Completed",
      slab: "SLAB-101",
    },
    {
      pieceCode: "P003",
      shape: "Rectangle",
      length: 110,
      width: 55,
      status: "Pending",
      slab: "SLAB-102",
    },
  ],
};