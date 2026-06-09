"use client";

import { useState } from "react";

import ResidualHeader from "@/components/residuals/ResidualHeader";
import ResidualStats from "@/components/residuals/ResidualStats";
import ResidualTable from "@/components/residuals/ResidualTable";
import NewResidualModal from "@/components/residuals/NewResidualModal";

import { residuals as initialResiduals } from "@/data/residualMockData";

import { ResidualItem } from "@/types/residual";

export default function ResidualDashboardPage() {
  const [residuals, setResiduals] =
    useState<ResidualItem[]>(
      initialResiduals
    );

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const totalResiduals =
    residuals.length;

  const reusableResiduals =
    residuals.filter(
      (item) => item.reusable
    ).length;

  const scrapResiduals =
    residuals.filter(
      (item) => !item.reusable
    ).length;

  const totalResidualArea =
    residuals.reduce(
      (sum, item) =>
        sum + item.area,
      0
    );

  const handleSave = (
    slabCode: string,
    length: number,
    width: number,
    reusable: boolean,
    remarks: string
  ) => {
    const area =
      length * width;

    const newResidual: ResidualItem =
      {
        id: `R${Date.now()}`,

        slabCode,

        length,

        width,

        area,

        reusable,

        remarks,

        createdDate:
          new Date()
            .toISOString()
            .split("T")[0],
      };

    setResiduals((prev) => [
      newResidual,
      ...prev,
    ]);

    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <ResidualHeader />

        <ResidualStats
          totalResiduals={
            totalResiduals
          }
          reusableResiduals={
            reusableResiduals
          }
          scrapResiduals={
            scrapResiduals
          }
          totalResidualArea={
            totalResidualArea
          }
        />

        <div className="mb-4">
          <button
            onClick={() =>
              setIsModalOpen(true)
            }
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            New Residual
          </button>
        </div>

        <ResidualTable
          residuals={residuals}
        />

        <NewResidualModal
          isOpen={isModalOpen}
          onClose={() =>
            setIsModalOpen(false)
          }
          onSave={handleSave}
        />
      </div>
    </main>
  );
}