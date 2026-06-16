"use client";

import { useState } from "react";

import {
  incomingRequests,
  stockInventory,
  machines,
  operators,
} from "@/data/cuttingSupervisorMockData";

import {
  CuttingJob,
} from "@/types/cuttingSupervisor";

import DashboardHeader from "./header/DashboardHeader";
import KPICards from "./cards/KPICards";
import AnalyticsCards from "./cards/AnalyticsCards";
import SearchPanel from "./search/SearchPanel";
import IncomingRequestsTable from "./tables/IncomingRequestsTable";
import AssignmentPanel from "./assignment/AssignmentPanel";
import JobQueueTable from "./tables/JobQueueTable";
import CompletedJobsTable from "./tables/CompletedJobsTable";
import Notification from "./ui/Notification";

export default function CuttingSupervisorDashboard() {
  const [requests, setRequests] =
    useState(incomingRequests);

  const [jobs, setJobs] =
    useState<CuttingJob[]>([]);

  const [machineList, setMachineList] =
    useState(machines);

  const [operatorList, setOperatorList] =
    useState(operators);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter,
    setStatusFilter] =
    useState("");

  const [notification, setNotification] =
    useState<{
      message: string;
      type: "success" | "warning";
    } | null>(null);

  const showNotification = (
    message: string,
    type: "success" | "warning"
  ) => {
    setNotification({
      message,
      type,
    });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const filteredRequests =
    requests.filter(
      (request) => {
        const matchesSearch =
          request.customerName
            .toLowerCase()
            .includes(
              searchTerm.toLowerCase()
            );

        const matchesStatus =
          !statusFilter ||
          request.status ===
            statusFilter;

        return (
          matchesSearch &&
          matchesStatus
        );
      }
    );

  const handleAccept = (
    requestId: string
  ) => {
    const request =
      requests.find(
        (request) =>
          request.id === requestId
      );

    if (!request) return;

    const stock =
      stockInventory.find(
        (item) =>
          item.color === request.color
      );

    if (!stock) {
      showNotification(
        `${request.color} color not found in stock`,
        "warning"
      );
      return;
    }

    if (
      stock.status !==
      "Available"
    ) {
      showNotification(
        `${request.color} color unavailable`,
        "warning"
      );
      return;
    }

    setRequests((prev) =>
      prev.map((request) =>
        request.id === requestId
          ? {
              ...request,
              status: "Accepted",
            }
          : request
      )
    );

    showNotification(
      "Request accepted",
      "success"
    );
  };

  const handleReject = (
    requestId: string
  ) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === requestId
          ? {
              ...request,
              status: "Rejected",
            }
          : request
      )
    );

    showNotification(
      "Request rejected",
      "warning"
    );
  };

  const handleAssign = (
    requestId: string,
    machineName: string,
    operatorName: string
  ) => {
    const existingJob =
      jobs.find(
        (job) =>
          job.requestId ===
          requestId
      );

    if (existingJob) {
      showNotification(
        "Job already assigned",
        "warning"
      );
      return;
    }

    const request =
      requests.find(
        (request) =>
          request.id === requestId
      );

    if (!request) return;

    const selectedMachine =
      machineList.find(
        (machine) =>
          machine.name ===
          machineName
      );

    const selectedOperator =
      operatorList.find(
        (operator) =>
          operator.name ===
          operatorName
      );

    if (
      !selectedMachine ||
      selectedMachine.status !==
        "Available"
    ) {
      showNotification(
        "Machine unavailable",
        "warning"
      );
      return;
    }

    if (
      !selectedOperator ||
      selectedOperator.status !==
        "Available"
    ) {
      showNotification(
        "Operator unavailable",
        "warning"
      );
      return;
    }

    const job: CuttingJob = {
      id: `JOB-${Date.now()}`,
      requestId:
        request.id,
      customerName:
        request.customerName,
      machine:
        machineName,
      operator:
        operatorName,
      progress: 0,
      quantity:
        request.quantity,
      status:
        "Assigned",
    };

    setJobs((prev) => [
      ...prev,
      job,
    ]);

    setMachineList((prev) =>
      prev.map((machine) =>
        machine.name ===
        machineName
          ? {
              ...machine,
              status: "Busy",
            }
          : machine
      )
    );

    setOperatorList((prev) =>
      prev.map((operator) =>
        operator.name ===
        operatorName
          ? {
              ...operator,
              status: "Busy",
            }
          : operator
      )
    );

    showNotification(
      "Job assigned successfully",
      "success"
    );
  };

  const handleStartJob = (
    jobId: string
  ) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              status:
                "In Progress",
            }
          : job
      )
    );

    showNotification(
      "Job started",
      "success"
    );
  };

  const handleUpdateProgress = (
    jobId: string
  ) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              progress: Math.min(
                job.progress + 25,
                100
              ),
            }
          : job
      )
    );
  };

  const handleCompleteJob = (
    jobId: string
  ) => {
    const currentJob =
      jobs.find(
        (job) =>
          job.id === jobId
      );

    if (!currentJob) return;

    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              progress: 100,
              status:
                "Completed",
            }
          : job
      )
    );

    setMachineList((prev) =>
      prev.map((machine) =>
        machine.name ===
        currentJob.machine
          ? {
              ...machine,
              status:
                "Available",
            }
          : machine
      )
    );

    setOperatorList((prev) =>
      prev.map((operator) =>
        operator.name ===
        currentJob.operator
          ? {
              ...operator,
              status:
                "Available",
            }
          : operator
      )
    );

    showNotification(
      "Job completed",
      "success"
    );
  };

  const handleSendToFabrication = (
    jobId: string
  ) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId
          ? {
              ...job,
              status:
                "Sent To Fabrication",
            }
          : job
      )
    );

    showNotification(
      "Job sent to Fabrication",
      "success"
    );
  };

  const pendingRequests =
    requests.filter(
      (request) =>
        request.status ===
        "Pending"
    ).length;

  const acceptedRequests =
    requests.filter(
      (request) =>
        request.status ===
        "Accepted"
    ).length;

  const rejectedRequests =
    requests.filter(
      (request) =>
        request.status ===
        "Rejected"
    ).length;

  const activeJobs =
    jobs.filter(
      (job) =>
        job.status ===
          "Assigned" ||
        job.status ===
          "In Progress"
    ).length;

  const completedJobs =
    jobs.filter(
      (job) =>
        job.status ===
        "Completed"
    ).length;

  const fabricationJobs =
    jobs.filter(
      (job) =>
        job.status ===
        "Sent To Fabrication"
    ).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">

      <DashboardHeader />

      <div className="mb-8">
        <KPICards
          pendingRequests={
            pendingRequests
          }
          acceptedRequests={
            acceptedRequests
          }
          rejectedRequests={
            rejectedRequests
          }
          activeJobs={
            activeJobs
          }
        />
      </div>

      <SearchPanel
        searchTerm={
          searchTerm
        }
        statusFilter={
          statusFilter
        }
        onSearchChange={
          setSearchTerm
        }
        onStatusChange={
          setStatusFilter
        }
      />

      <AnalyticsCards
        completedJobs={
          completedJobs
        }
        fabricationJobs={
          fabricationJobs
        }
      />

      <IncomingRequestsTable
        requests={
          filteredRequests
        }
        onAccept={
          handleAccept
        }
        onReject={
          handleReject
        }
      />

      <div className="mt-8">
        <AssignmentPanel
          requests={requests}
          machines={machineList}
          operators={operatorList}
          onAssign={
            handleAssign
          }
        />
      </div>

      <div className="mt-8">
        <JobQueueTable
          jobs={jobs}
          onStartJob={
            handleStartJob
          }
          onUpdateProgress={
            handleUpdateProgress
          }
          onCompleteJob={
            handleCompleteJob
          }
        />
      </div>

      <div className="mt-8">
        <CompletedJobsTable
          jobs={jobs}
          onSendToFabrication={
            handleSendToFabrication
          }
        />
      </div>

      {notification && (
        <Notification
          message={
            notification.message
          }
          type={
            notification.type
          }
        />
      )}
    </div>
  );
}