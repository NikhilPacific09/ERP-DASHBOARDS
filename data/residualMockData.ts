import { ResidualItem } from "@/types/residual";

export const residuals: ResidualItem[] = [
  {
    id: "R001",
    slabCode: "SLAB-101",
    length: 120,
    width: 60,
    area: 7200,
    reusable: true,
    remarks: "Can be reused for vanity top",
    createdDate: "2026-06-01",
  },

  {
    id: "R002",
    slabCode: "SLAB-102",
    length: 80,
    width: 40,
    area: 3200,
    reusable: true,
    remarks: "Suitable for small cut pieces",
    createdDate: "2026-06-03",
  },

  {
    id: "R003",
    slabCode: "SLAB-103",
    length: 30,
    width: 20,
    area: 600,
    reusable: false,
    remarks: "Scrap material",
    createdDate: "2026-06-05",
  },

  {
    id: "R004",
    slabCode: "SLAB-104",
    length: 100,
    width: 50,
    area: 5000,
    reusable: true,
    remarks: "Reusable for fabrication",
    createdDate: "2026-06-08",
  },

  {
    id: "R005",
    slabCode: "SLAB-105",
    length: 25,
    width: 15,
    area: 375,
    reusable: false,
    remarks: "Too small to reuse",
    createdDate: "2026-06-10",
  },
];