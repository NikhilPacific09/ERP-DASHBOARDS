import {
  ManagerStat,
  ProductionStage,
  Project,
} from "@/types/manager";

export const managerStats: ManagerStat[] = [
  {
    title: "Total Projects",
    value: 120,
  },
  {
    title: "Total Pieces",
    value: 2450,
  },
  {
    title: "Pending Cutting",
    value: 35,
  },
  {
    title: "Pending Polishing",
    value: 22,
  },
  {
    title: "Pending Sink Cutting",
    value: 18,
  },
  {
    title: "Pending Fabrication",
    value: 12,
  },
  {
    title: "Ready For Packaging",
    value: 40,
  },
  {
    title: "Packages Created",
    value: 75,
  },
  {
    title: "Dispatches Created",
    value: 60,
  },
];

export const productionStages: ProductionStage[] =
  [
    {
      name: "CUTTING",
      pending: 35,
      completed: 220,
    },
    {
      name: "POLISHING",
      pending: 22,
      completed: 198,
    },
    {
      name: "SINK CUTTING",
      pending: 18,
      completed: 175,
    },
    {
      name: "FABRICATION",
      pending: 12,
      completed: 160,
    },
    {
      name: "PACKAGING",
      pending: 8,
      completed: 145,
    },
    {
      name: "DISPATCH",
      pending: 5,
      completed: 140,
    },
  ];

export const recentProjects: Project[] = [
  {
    projectCode: "PRJ001",
    customer: "John Smith",
    pieces: 24,
    createdDate: "08-06-2026",
    status: "In Progress",
  },
  {
    projectCode: "PRJ002",
    customer: "Michael Brown",
    pieces: 18,
    createdDate: "07-06-2026",
    status: "Packaging",
  },
  {
    projectCode: "PRJ003",
    customer: "David Wilson",
    pieces: 30,
    createdDate: "06-06-2026",
    status: "Dispatch",
  },
  {
    projectCode: "PRJ004",
    customer: "Emma Taylor",
    pieces: 15,
    createdDate: "05-06-2026",
    status: "Cutting",
  },
  {
    projectCode: "PRJ005",
    customer: "Sophia Miller",
    pieces: 20,
    createdDate: "04-06-2026",
    status: "Polishing",
  },
];