"use client";

import { useState } from "react";

import CuttingHeader from "@/components/cutting/CuttingHeader";
import CuttingStats from "@/components/cutting/CuttingStats";
import NewRecordButton from "@/components/cutting/NewRecordButton";
import CreateRecordModal from "@/components/cutting/CreateRecordModal";
import CuttingTable from "@/components/cutting/CuttingTable";
import ViewRecordModal from "@/components/cutting/ViewRecordModal";

import { cuttingRecords } from "@/data/cuttingMockData";
import { CuttingRecord } from "@/types/cutting";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [records, setRecords] =
    useState<CuttingRecord[]>(cuttingRecords);

  const [selectedRecord, setSelectedRecord] =
    useState<CuttingRecord | null>(null);

  const [isViewModalOpen, setIsViewModalOpen] =
    useState(false);

  const [editingRecord, setEditingRecord] =
    useState<CuttingRecord | null>(null);

  const [isEditMode, setIsEditMode] =
    useState(false);

  // Dynamic Stats
  const pendingPieces = records.filter(
    (record) => record.status === "In Progress"
  ).length;

  const completedToday = records.filter(
    (record) => record.status === "Completed"
  ).length;

  const myRecords = records.length;

  // Add Record
  const handleAddRecord = (newRecord: {
    pieceId: string;
    length: number;
    width: number;
    shapeType: string;
    remarks: string;
  }) => {
    const record: CuttingRecord = {
      pieceId: newRecord.pieceId,
      project: "New Project",
      length: newRecord.length,
      width: newRecord.width,
      shapeType: newRecord.shapeType,
      status: "In Progress",
      startTime: "Now",
      endTime: "-",
    };

    setRecords((prev) => [record, ...prev]);
  };

  // View Record
  const handleViewRecord = (
    record: CuttingRecord
  ) => {
    setSelectedRecord(record);
    setIsViewModalOpen(true);
  };

  // Edit Record
  const handleEditRecord = (
    record: CuttingRecord
  ) => {
    setEditingRecord(record);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  // Update Record
  const handleUpdateRecord = (
    updatedRecord: {
      pieceId: string;
      length: number;
      width: number;
      shapeType: string;
      remarks: string;
    }
  ) => {
    setRecords((prev) =>
      prev.map((record) =>
        record.pieceId === editingRecord?.pieceId
          ? {
              ...record,
              pieceId: updatedRecord.pieceId,
              length: updatedRecord.length,
              width: updatedRecord.width,
              shapeType: updatedRecord.shapeType,
            }
          : record
      )
    );

    setEditingRecord(null);
    setIsEditMode(false);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <h1 className="mb-6 text-4xl font-bold">
        Cutting Dashboard
      </h1>

      <CuttingHeader />

      <CuttingStats
        pendingPieces={pendingPieces}
        completedToday={completedToday}
        myRecords={myRecords}
      />

      <NewRecordButton
        onClick={() => {
          setEditingRecord(null);
          setIsEditMode(false);
          setIsModalOpen(true);
        }}
      />

      <CuttingTable
        records={records}
        onView={handleViewRecord}
        onEdit={handleEditRecord}
      />

      <CreateRecordModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingRecord(null);
          setIsEditMode(false);
        }}
        onSave={
          isEditMode
            ? handleUpdateRecord
            : handleAddRecord
        }
        record={editingRecord}
        isEditMode={isEditMode}
      />

      <ViewRecordModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        record={selectedRecord}
      />
    </main>
  );
}