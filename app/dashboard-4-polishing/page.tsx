"use client";

import { useState } from "react";

import PolishingHeader from "@/components/polishing/PolishingHeader";
import MachineInfo from "@/components/polishing/MachineInfo";
import PolishingStats from "@/components/polishing/PolishingStats";
import PolishingTable from "@/components/polishing/PolishingTable";
import RemarksModal from "@/components/polishing/RemarksModal";

import {
  machineInfo,
  polishingPieces,
} from "@/data/polishingMockData";

import {
  PolishingPiece,
} from "@/types/polishing";

export default function PolishingDashboardPage() {
  const [pieces, setPieces] =
    useState(polishingPieces);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedPieceId, setSelectedPieceId] =
    useState("");

  const handleRemarks = (
    piece: PolishingPiece
  ) => {
    setSelectedPieceId(piece.pieceId);
    setIsModalOpen(true);
  };

  const handleSaveRemarks = (
    pieceId: string,
    remarks: string
  ) => {
    setPieces((prev) =>
      prev.map((piece) =>
        piece.pieceId === pieceId
          ? {
              ...piece,
              remarks,
            }
          : piece
      )
    );

    setIsModalOpen(false);
  };

  // Statistics
  const totalPieces = pieces.length;

  const pendingPieces =
    pieces.filter(
      (piece) =>
        piece.status === "Pending"
    ).length;

  const inProgressPieces =
    pieces.filter(
      (piece) =>
        piece.status ===
        "In Progress"
    ).length;

  const completedPieces =
    pieces.filter(
      (piece) =>
        piece.status ===
        "Completed"
    ).length;

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-7xl">
        <PolishingHeader />

        <MachineInfo
          info={machineInfo}
        />

        <PolishingStats
          total={totalPieces}
          pending={pendingPieces}
          inProgress={
            inProgressPieces
          }
          completed={
            completedPieces
          }
        />

        <PolishingTable
          pieces={pieces}
          onRemarks={handleRemarks}
        />

        <RemarksModal
          isOpen={isModalOpen}
          pieceId={selectedPieceId}
          onClose={() =>
            setIsModalOpen(false)
          }
          onSave={
            handleSaveRemarks
          }
        />
      </div>
    </main>
  );
}