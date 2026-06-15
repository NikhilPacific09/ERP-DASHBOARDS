"use client";

import { useMemo, useState } from "react";

import {
  customerRequirement,
  stockItems,
  sizeSuggestions,
} from "@/data/samplingMockData";

import {
  CutterRequest,
  SelectedMaterial,
  StockItem,
} from "@/types/sampling";

import DashboardHeader from "./header/DashboardHeader";
import CustomerRequirementCard from "./cards/CustomerRequirementCard";
import KPICards from "./cards/KPICards";
import FilterPanel from "./search/FilterPanel";
import SizeSuggestionPanel from "./suggestions/SizeSuggestionPanel";
import InStockTable from "./tables/InStockTable";
import SelectedMaterialTable from "./tables/SelectedMaterialTable";
import RequestSummary from "./summary/RequestSummary";
import RequestStatusTable from "./tables/RequestStatusTable";
import SendRequestModal from "./modals/SendRequestModal";
import Notification from "./ui/Notification";

export default function SamplingDashboard() {
  const [lengthFilter, setLengthFilter] =
    useState("");

  const [widthFilter, setWidthFilter] =
    useState("");

  const [thicknessFilter,
    setThicknessFilter] =
    useState("");

  const [colorFilter, setColorFilter] =
    useState("");

  const [selectedMaterials,
    setSelectedMaterials] =
    useState<SelectedMaterial[]>([]);

  const [requests, setRequests] =
    useState<CutterRequest[]>([]);

  const [showConfirmModal,
    setShowConfirmModal] =
    useState(false);

  const [notification, setNotification] =
    useState<{
      message: string;
      type: "success" | "warning";
    } | null>(null);

  const filteredStock = useMemo(() => {
    return stockItems.filter((item) => {
      const lengthMatch =
        !lengthFilter ||
        item.length
          .toString()
          .includes(lengthFilter);

      const widthMatch =
        !widthFilter ||
        item.width
          .toString()
          .includes(widthFilter);

      const thicknessMatch =
        !thicknessFilter ||
        item.thickness
          .toString()
          .includes(thicknessFilter);

      const colorMatch =
        !colorFilter ||
        item.color
          .toLowerCase()
          .includes(
            colorFilter.toLowerCase()
          );

      return (
        lengthMatch &&
        widthMatch &&
        thicknessMatch &&
        colorMatch
      );
    });
  }, [
    lengthFilter,
    widthFilter,
    thicknessFilter,
    colorFilter,
  ]);

  const handleResetFilters = () => {
    setLengthFilter("");
    setWidthFilter("");
    setThicknessFilter("");
    setColorFilter("");
  };

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

  const handleSuggestionSelect = (
    length: number,
    width: number
  ) => {
    setLengthFilter(
      length.toString()
    );

    setWidthFilter(
      width.toString()
    );
  };

  const handleAddMaterial = (
    stockItem: StockItem
  ) => {
    const exists =
      selectedMaterials.some(
        (material) =>
          material.stockId ===
          stockItem.id
      );

    if (exists) {
      showNotification(
        "Material already selected",
        "warning"
      );
      return;
    }

    const material: SelectedMaterial = {
      id: crypto.randomUUID(),
      stockId: stockItem.id,
      color: stockItem.color,
      length: stockItem.length,
      width: stockItem.width,
      thickness: stockItem.thickness,
      quantity: stockItem.quantity,
    };

    setSelectedMaterials((prev) => [
      ...prev,
      material,
    ]);
  };

  const handleRemoveMaterial = (
    materialId: string
  ) => {
    setSelectedMaterials((prev) =>
      prev.filter(
        (material) =>
          material.id !== materialId
      )
    );
  };

    const handleSendRequest = () => {
    if (
      selectedMaterials.length === 0
    ) {
      showNotification(
        "Please select at least one material",
        "warning"
      );
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmRequest = () => {
    const selected =
      selectedMaterials[0];

    const request: CutterRequest = {
      id: crypto.randomUUID(),

      customerName:
        customerRequirement.customerName,

      requiredSize: `${customerRequirement.length}x${customerRequirement.width}`,

      selectedSize: `${selected.length}x${selected.width}`,

      quantity:
        customerRequirement.quantity,

      status: "Pending",
    };

    setRequests((prev) => [
      ...prev,
      request,
    ]);

    showNotification(
      "Request sent successfully",
      "success"
    );

    setSelectedMaterials([]);

    setShowConfirmModal(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">

      {/* Header */}

      <DashboardHeader />

      {/* Customer Requirement */}

      <div className="mb-8">
        <CustomerRequirementCard
          requirement={
            customerRequirement
          }
        />
      </div>

      {/* KPI Cards */}

      <div className="mb-8">
        <KPICards
          selectedMaterials={
            selectedMaterials.length
          }
          requestsSent={
            requests.length
          }
          availableStock={
            stockItems.length
          }
        />
      </div>

      {/* Size Suggestions */}

      <div className="mb-8">
        <SizeSuggestionPanel
          suggestions={
            sizeSuggestions
          }
          onSelectSuggestion={
            handleSuggestionSelect
          }
        />
      </div>

      {/* Filters */}

      <div className="mb-8">
        <FilterPanel
          length={lengthFilter}
          width={widthFilter}
          thickness={
            thicknessFilter
          }
          color={colorFilter}
          onLengthChange={
            setLengthFilter
          }
          onWidthChange={
            setWidthFilter
          }
          onThicknessChange={
            setThicknessFilter
          }
          onColorChange={
            setColorFilter
          }
          onReset={
            handleResetFilters
          }
        />
      </div>

      {/* Inventory */}

      <InStockTable
        stockItems={filteredStock}
        onAddMaterial={
          handleAddMaterial
        }
      />

      {/* Selected Materials */}

      <div className="mt-8">
        <SelectedMaterialTable
          materials={
            selectedMaterials
          }
          onRemoveMaterial={
            handleRemoveMaterial
          }
        />
      </div>

      {/* Summary */}

      <div className="mt-8">
        <RequestSummary
          requirement={
            customerRequirement
          }
          selectedMaterials={
            selectedMaterials
          }
        />
      </div>

            {/* Send Request */}

      <div className="mt-8 flex justify-end">
        <button
          disabled={
            selectedMaterials.length ===
            0
          }
          onClick={
            handleSendRequest
          }
          className={`rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300
${
  selectedMaterials.length === 0
    ? "cursor-not-allowed bg-gray-400"
    : "bg-linear-to-r from-green-600 to-emerald-600 hover:scale-105"
}`}
        >
          Send To Cutter Incharge
        </button>
      </div>

      {/* Request Status */}

      <div className="mt-8">
        <RequestStatusTable
          requests={requests}
        />
      </div>

      {/* Modal */}

      <SendRequestModal
        open={showConfirmModal}
        onClose={() =>
          setShowConfirmModal(
            false
          )
        }
        onConfirm={
          handleConfirmRequest
        }
      />

      {/* Notification */}

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