"use client";

import { useState } from "react";

export default function SearchFilterBar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [department, setDepartment] = useState("All");

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Item
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search consumables..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option>All</option>
            <option>Direct Materials</option>
            <option>Production Consumables</option>
            <option>Polishing Consumables</option>
          </select>
        </div>

        {/* Department */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option>All</option>
            <option>Mixer</option>
            <option>Distributor</option>
            <option>Press</option>
            <option>LB Line</option>
            <option>Raw Material</option>
            <option>Silos</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          Search: {search || "None"}
        </span>

        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
          Category: {category}
        </span>

        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
          Department: {department}
        </span>
      </div>
    </div>
  );
}