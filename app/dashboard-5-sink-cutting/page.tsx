"use client";

import { useState } from "react";

import SinkCuttingHeader from "@/components/sinkCutting/SinkCuttingHeader";
import MachineInfo from "@/components/sinkCutting/MachineInfo";
import SinkCuttingStats from "@/components/sinkCutting/SinkCuttingStats";
import SinkCuttingTable from "@/components/sinkCutting/SinkCuttingTable";
import RemarksModal from "@/components/sinkCutting/RemarksModal";

import {
  machineInfo,
  sinkCuttingPieces,
} from "@/data/sinkCuttingMockData";

import {
  SinkCuttingPiece,
} from "@/types/sinkCutting";

export default function SinkCuttingDashboardPage() {
  const [pieces, setPieces] =
    useState(sinkCuttingPieces);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedPiece, setSelectedPiece] =
    useState<SinkCuttingPiece | null>(
      null
    );

  const handleRemarks = (
    piece: SinkCuttingPiece
  ) => {
    setSelectedPiece(piece);
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
        <SinkCuttingHeader />

        <MachineInfo
          info={machineInfo}
        />

        <SinkCuttingStats
          total={totalPieces}
          pending={pendingPieces}
          inProgress={
            inProgressPieces
          }
          completed={
            completedPieces
          }
        />

        <SinkCuttingTable
          pieces={pieces}
          onRemarks={handleRemarks}
        />

        {selectedPiece && (
          <RemarksModal
            isOpen={isModalOpen}
            pieceId={
              selectedPiece.pieceId
            }
            hasSink={
              selectedPiece.hasSink
            }
            hasPipeCut={
              selectedPiece.hasPipeCut
            }
            onClose={() =>
              setIsModalOpen(false)
            }
            onSave={
              handleSaveRemarks
            }
          />
        )}
      </div>
    </main>
  );
}