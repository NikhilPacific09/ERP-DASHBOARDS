"use client";

import { useState } from "react";

import SessionHeader from "@/components/startSession/SessionHeader";
import SessionStatus from "@/components/startSession/SessionStatus";
import SessionStats from "@/components/startSession/SessionStats";
import MachineDropdown from "@/components/startSession/MachineDropdown";
import ShiftDropdown from "@/components/startSession/ShiftDropdown";
import StartSessionButton from "@/components/startSession/StartSessionButton";
import ActiveSessionCard from "@/components/startSession/ActiveSessionCard";
import SessionHistoryTable from "@/components/startSession/SessionHistoryTable";
import SessionFilters from "@/components/startSession/SessionFilters";
import ExportButton from "@/components/startSession/ExportButton";
import EndSessionModal from "@/components/startSession/EndSessionModal";

import {
  machineOptions,
  shiftOptions,
} from "@/data/sessionMockData";

import { SessionRecord } from "@/types/session";

export default function StartSessionPage() {
  const [machine, setMachine] = useState("");
  const [shift, setShift] = useState("");

  const [sessionStarted, setSessionStarted] =
    useState(false);

  const [startTime, setStartTime] =
    useState("");

  const [totalSessions, setTotalSessions] =
    useState(0);

  const [sessions, setSessions] =
    useState<SessionRecord[]>([]);

  const [search, setSearch] =
    useState("");

  const [selectedShift, setSelectedShift] =
    useState("");

  const [isEndModalOpen, setIsEndModalOpen] =
    useState(false);

  const handleStartSession = () => {
    if (!machine || !shift) {
      alert(
        "Please select both machine and shift"
      );
      return;
    }

    const currentTime =
      new Date().toLocaleTimeString();

    setStartTime(currentTime);

    setSessionStarted(true);

    setTotalSessions(
      (prev) => prev + 1
    );

    const newSession: SessionRecord = {
      machine,
      shift,
      startTime: currentTime,
      status: "Active",
    };

    setSessions((prev) => [
      newSession,
      ...prev,
    ]);
  };

  const handleEndSession = () => {
    setIsEndModalOpen(true);
  };

  const confirmEndSession = () => {
    setSessions((prev) =>
      prev.map((session, index) =>
        index === 0
          ? {
              ...session,
              status: "Completed",
            }
          : session
      )
    );

    setSessionStarted(false);

    setMachine("");

    setShift("");

    setStartTime("");
  };

  const handleExportCSV = () => {
    const headers =
      "Machine;Shift;Start Time;Status\n";

    const rows = sessions
      .map(
        (session) =>
          `"${session.machine}";"${session.shift}";"${session.startTime}";"${session.status}"`
      )
      .join("\n");

    const csvContent =
      headers + rows;

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "session-history.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  const filteredSessions =
    sessions.filter((session) => {
      const machineMatch =
        session.machine
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const shiftMatch =
        selectedShift === ""
          ? true
          : session.shift ===
            selectedShift;

      return (
        machineMatch &&
        shiftMatch
      );
    });

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <SessionHeader />

        <SessionStatus
          isActive={sessionStarted}
        />

        <SessionStats
          totalSessions={totalSessions}
          activeMachine={
            sessionStarted
              ? machine
              : "-"
          }
          currentShift={
            sessionStarted
              ? shift
              : "-"
          }
        />

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="space-y-6">
            <MachineDropdown
              value={machine}
              onChange={setMachine}
              options={machineOptions}
            />

            <ShiftDropdown
              value={shift}
              onChange={setShift}
              options={shiftOptions}
            />

            <StartSessionButton
              onClick={handleStartSession}
            />

            {sessionStarted && (
              <ActiveSessionCard
                machine={machine}
                shift={shift}
                startTime={startTime}
                onEndSession={
                  handleEndSession
                }
              />
            )}
          </div>
        </div>

        <SessionFilters
          search={search}
          onSearchChange={setSearch}
          selectedShift={
            selectedShift
          }
          onShiftChange={
            setSelectedShift
          }
        />

        <div className="mb-4 flex justify-end">
          <ExportButton
            onExport={
              handleExportCSV
            }
          />
        </div>

        <SessionHistoryTable
          sessions={filteredSessions}
        />

        <EndSessionModal
          isOpen={isEndModalOpen}
          onClose={() =>
            setIsEndModalOpen(false)
          }
          onConfirm={() => {
            confirmEndSession();
            setIsEndModalOpen(false);
          }}
        />
      </div>
    </main>
  );
}