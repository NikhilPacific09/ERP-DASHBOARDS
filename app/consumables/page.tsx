"use client";

import { useState } from "react";

import DashboardHeader from "@/components/consumables/DashboardHeader";
import SearchFilterBar from "@/components/consumables/SearchFilterBar";
import KPICards from "@/components/consumables/KPICards";

import ConsumptionTrendChart from "@/components/consumables/ConsumptionTrendChart";
import DepartmentConsumptionChart from "@/components/consumables/DepartmentConsumptionChart";
import InventoryHealthChart from "@/components/consumables/InventoryHealthChart";

import InventoryStockTable from "@/components/consumables/InventoryStockTable";
import LowStockAlerts from "@/components/consumables/LowStockAlerts";

import DirectMaterialsTable from "@/components/consumables/DirectMaterialsTable";
import ProductionConsumablesTable from "@/components/consumables/ProductionConsumablesTable";
import PolishingConsumablesTable from "@/components/consumables/PolishingConsumablesTable";

import FilmRollTrackingTable from "@/components/consumables/FilmRollTrackingTable";

import DepartmentCards from "@/components/consumables/DepartmentCards";

import RecentConsumptionTable from "@/components/consumables/RecentConsumptionTable";

import AddInventoryModal from "@/components/consumables/AddInventoryModal";
import AddConsumptionModal from "@/components/consumables/AddConsumptionModal";

export default function ConsumablesPage() {
  const [isInventoryModalOpen, setIsInventoryModalOpen] =
    useState(false);

  const [isConsumptionModalOpen, setIsConsumptionModalOpen] =
    useState(false);

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <DashboardHeader
            onAddInventory={() =>
              setIsInventoryModalOpen(true)
            }
            onAddConsumption={() =>
              setIsConsumptionModalOpen(true)
            }
          />

          {/* Search & Filters */}
          <SearchFilterBar />

          {/* KPI Cards */}
          <KPICards />

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <ConsumptionTrendChart />

            <DepartmentConsumptionChart />

            <InventoryHealthChart />
          </div>

          {/* Inventory Stock */}
          <InventoryStockTable />

          {/* Low Stock Alerts */}
          <LowStockAlerts />

          {/* Direct Materials */}
          <DirectMaterialsTable />

          {/* Production Consumables */}
          <ProductionConsumablesTable />

          {/* Polishing Consumables */}
          <PolishingConsumablesTable />

          {/* Film Roll Tracking */}
          <FilmRollTrackingTable />

          {/* Department Mapping */}
          <DepartmentCards />

          {/* Recent Consumption Entries */}
          <RecentConsumptionTable />
        </div>
      </main>

      {/* Add Inventory Modal */}
      <AddInventoryModal
        isOpen={isInventoryModalOpen}
        onClose={() =>
          setIsInventoryModalOpen(false)
        }
      />

      {/* Add Consumption Modal */}
      <AddConsumptionModal
        isOpen={isConsumptionModalOpen}
        onClose={() =>
          setIsConsumptionModalOpen(false)
        }
      />
    </>
  );
}