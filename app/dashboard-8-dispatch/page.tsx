"use client";

import { useState } from "react";

import DispatchHeader from "@/components/dispatch/DispatchHeader";
import DispatchStats from "@/components/dispatch/DispatchStats";
import DispatchTable from "@/components/dispatch/DispatchTable";
import DispatchModal from "@/components/dispatch/DispatchModal";
import DispatchHistoryTable from "@/components/dispatch/DispatchHistoryTable";

import {
  dispatchPackages,
  dispatchHistory,
} from "@/data/dispatchMockData";

import {
  DispatchPackage,
  DispatchHistoryItem,
} from "@/types/dispatch";

export default function DispatchDashboardPage() {
  const [packages, setPackages] =
    useState(dispatchPackages);

  const [history, setHistory] =
    useState<DispatchHistoryItem[]>(
      dispatchHistory
    );

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedPackage, setSelectedPackage] =
    useState<DispatchPackage | null>(
      null
    );

  const handleDispatchClick = (
    dispatchPackage: DispatchPackage
  ) => {
    setSelectedPackage(
      dispatchPackage
    );

    setIsModalOpen(true);
  };

  const handleDispatch = (
    packageCode: string,
    vehicleNumber: string,
    driverName: string,
    destination: string,
    remarks: string
  ) => {
    const historyItem: DispatchHistoryItem =
      {
        packageCode,
        vehicleNumber,
        driverName,
        destination,
        dispatchDate:
          new Date()
            .toISOString()
            .split("T")[0],
        remarks,
      };

    setHistory((prev) => [
      historyItem,
      ...prev,
    ]);

    setPackages((prev) =>
      prev.filter(
        (pkg) =>
          pkg.packageCode !==
          packageCode
      )
    );

    setIsModalOpen(false);
  };

  // Statistics

  const pendingDispatch =
    packages.length;

  const totalDispatched =
    history.length;

  const totalQueuePackages =
    packages.length;

  const totalPiecesInQueue =
    packages.reduce(
      (sum, pkg) =>
        sum + pkg.piecesCount,
      0
    );

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <DispatchHeader />

        <DispatchStats
          pendingDispatch={
            pendingDispatch
          }
          totalDispatched={
            totalDispatched
          }
          totalQueuePackages={
            totalQueuePackages
          }
          totalPiecesInQueue={
            totalPiecesInQueue
          }
        />

        <DispatchTable
          packages={packages}
          onDispatch={
            handleDispatchClick
          }
        />

        <DispatchHistoryTable
          history={history}
        />

        {selectedPackage && (
          <DispatchModal
            isOpen={isModalOpen}
            packageCode={
              selectedPackage.packageCode
            }
            onClose={() =>
              setIsModalOpen(false)
            }
            onDispatch={
              handleDispatch
            }
          />
        )}
      </div>
    </main>
  );
}