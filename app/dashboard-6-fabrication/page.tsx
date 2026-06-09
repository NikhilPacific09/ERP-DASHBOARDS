"use client";

import { useState } from "react";

import FabricationHeader from "@/components/fabrication/FabricationHeader";
import FabricatorInfo from "@/components/fabrication/FabricatorInfo";
import FabricationStats from "@/components/fabrication/FabricationStats";
import FabricationTable from "@/components/fabrication/FabricationTable";
import RemarksModal from "@/components/fabrication/RemarksModal";

import {
  fabricatorInfo,
  fabricationPieces,
} from "@/data/fabricationMockData";

import {
  FabricationPiece,
} from "@/types/fabrication";

export default function FabricationDashboardPage() {
  const [pieces, setPieces] =
    useState(fabricationPieces);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedPieceId, setSelectedPieceId] =
    useState("");

  const handleRemarks = (
    piece: FabricationPiece
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
        <FabricationHeader />

        <FabricatorInfo
          info={fabricatorInfo}
        />

        <FabricationStats
          total={totalPieces}
          pending={pendingPieces}
          inProgress={
            inProgressPieces
          }
          completed={
            completedPieces
          }
        />

        <FabricationTable
          pieces={pieces}
          onRemarks={handleRemarks}
        />

        <RemarksModal
          isOpen={isModalOpen}
          pieceId={selectedPieceId}
          onClose={() =>
            setIsModalOpen(false)
          }
          onSave={handleSaveRemarks}
        />
      </div>
    </main>
  );
}