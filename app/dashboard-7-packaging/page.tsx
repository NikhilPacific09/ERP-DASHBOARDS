"use client";

import { useState } from "react";

import PackagingHeader from "@/components/packaging/PackagingHeader";
import PackagingStats from "@/components/packaging/PackagingStats";
import PackagingActions from "@/components/packaging/PackagingActions";
import PackagingTable from "@/components/packaging/PackagingTable";
import CreatePackageModal from "@/components/packaging/CreatePackageModal";
import ExistingPackagesTable from "@/components/packaging/ExistingPackagesTable";

import {
  packagingPieces,
  existingPackages,
} from "@/data/packagingMockData";

import {
  PackageItem,
} from "@/types/packaging";

export default function PackagingDashboardPage() {
  const [selectedPieces, setSelectedPieces] =
    useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [packages, setPackages] =
    useState<PackageItem[]>(
      existingPackages
    );

  const handleTogglePiece = (
    pieceId: string
  ) => {
    setSelectedPieces((prev) =>
      prev.includes(pieceId)
        ? prev.filter(
            (id) => id !== pieceId
          )
        : [...prev, pieceId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPieces(
      packagingPieces.map(
        (piece) => piece.pieceId
      )
    );
  };

  const handleCreatePackage = () => {
    if (selectedPieces.length === 0)
      return;

    setIsModalOpen(true);
  };

  const handleCreate = (
    packageCode: string,
    remarks: string
  ) => {
    const newPackage: PackageItem = {
      packageCode,
      piecesCount:
        selectedPieces.length,
      createdDate:
        new Date()
          .toISOString()
          .split("T")[0],
      remarks,
    };

    setPackages((prev) => [
      newPackage,
      ...prev,
    ]);

    setSelectedPieces([]);

    setIsModalOpen(false);
  };

  // Statistics
  const totalQueuePieces =
    packagingPieces.length;

  const selectedCount =
    selectedPieces.length;

  const totalPackages =
    packages.length;

  const totalPackagedPieces =
    packages.reduce(
      (sum, pkg) =>
        sum + pkg.piecesCount,
      0
    );

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <PackagingHeader />

        <PackagingStats
          totalQueuePieces={
            totalQueuePieces
          }
          selectedPieces={
            selectedCount
          }
          totalPackages={
            totalPackages
          }
          totalPackagedPieces={
            totalPackagedPieces
          }
        />

        <PackagingActions
          onSelectAll={
            handleSelectAll
          }
          onCreatePackage={
            handleCreatePackage
          }
        />

        <PackagingTable
          pieces={packagingPieces}
          selectedPieces={
            selectedPieces
          }
          onTogglePiece={
            handleTogglePiece
          }
        />

        <ExistingPackagesTable
          packages={packages}
        />

        <CreatePackageModal
          isOpen={isModalOpen}
          onClose={() =>
            setIsModalOpen(false)
          }
          onCreate={handleCreate}
        />
      </div>
    </main>
  );
}