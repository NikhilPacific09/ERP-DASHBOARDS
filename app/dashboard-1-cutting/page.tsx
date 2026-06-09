"use client";

import { useState } from "react";

import CuttingHeader from "@/components/cutting/CuttingHeader";
import CuttingStats from "@/components/cutting/CuttingStats";
import CuttingTable from "@/components/cutting/CuttingTable";
import CreateRecordModal from "@/components/cutting/CreateRecordModal";

import { cuttingPieces } from "@/data/cuttingMockData";

import {
  CuttingPiece,
  ProcessCuttingPayload,
} from "@/types/cutting";

export default function CuttingDashboardPage() {
  const [pieces, setPieces] =
    useState<CuttingPiece[]>(
      cuttingPieces
    );

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedPiece, setSelectedPiece] =
    useState<CuttingPiece | null>(
      null
    );

  const pendingPieces =
    pieces.filter(
      (piece) =>
        piece.status !==
        "Completed"
    ).length;

  const completedPieces =
    pieces.filter(
      (piece) =>
        piece.status ===
        "Completed"
    ).length;

  const totalPieces =
    pieces.length;

  const handleProcess = (
    piece: CuttingPiece
  ) => {
    setSelectedPiece(piece);
    setIsModalOpen(true);
  };

  const handleSaveDraft = (
    payload: ProcessCuttingPayload
  ) => {
    console.log(
      "UPDATE PIECE",
      payload
    );

    alert(
      "Draft saved successfully"
    );

    setIsModalOpen(false);
  };

  const handleCompleteCutting = (
    payload: ProcessCuttingPayload
  ) => {
    const updatePiecePayload = {
      length: payload.length,

      width: payload.width,

      shapeType:
        payload.shapeType,

      longLength:
        payload.longLength,

      longWidth:
        payload.longWidth,

      hasSink:
        payload.hasSink,

      hasPipeCut:
        payload.hasPipeCut,

      hasRadius:
        payload.hasRadius,

      hasCurve:
        payload.hasCurve,

      reverseLayout:
        payload.reverseLayout,

      remarks:
        payload.remarks,
    };

    const completeOperationPayload =
      {
        pieceId:
          payload.pieceId,

        operationType:
          "CUTTING",
      };

    console.log(
      "UPDATE PIECE",
      updatePiecePayload
    );

    console.log(
      "COMPLETE OPERATION",
      completeOperationPayload
    );

    setPieces((prev) =>
      prev.map((piece) =>
        piece.pieceId ===
        payload.pieceId
          ? {
              ...piece,

              length:
                payload.length,

              width:
                payload.width,

              shapeType:
                payload.shapeType,

              status:
                "Completed",
            }
          : piece
      )
    );

    alert(
      "Cutting completed successfully"
    );

    setIsModalOpen(false);

    setSelectedPiece(null);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="mb-6 text-4xl font-bold">
        Cutting Dashboard
      </h1>

      <CuttingHeader />

      <CuttingStats
        pendingPieces={
          pendingPieces
        }
        completedPieces={
          completedPieces
        }
        totalPieces={
          totalPieces
        }
      />

      <CuttingTable
        pieces={pieces}
        onProcess={
          handleProcess
        }
      />

      <CreateRecordModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPiece(null);
        }}
        piece={selectedPiece}
        onSaveDraft={
          handleSaveDraft
        }
        onCompleteCutting={
          handleCompleteCutting
        }
      />
    </main>
  );
}