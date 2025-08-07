// src/components/FilterSection.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RadioGroup, Radio, Input, Select, SelectItem } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Contoh ikon

function FilterSection() {
  const dispatch = useDispatch();
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "all",
    "Work",
    "Personal",
    "Shopping",
    "Health",
    "Others",
  ]; // Tambah 'all'

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    dispatch({ type: "filters/setStatusFilter", payload: value }); // Perlu action Redux
  };

  const handleCategoryChange = (keys) => {
    const value = Array.from(keys).join("");
    setCategoryFilter(value);
    dispatch({ type: "filters/setCategoryFilter", payload: value }); // Perlu action Redux
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch({ type: "filters/setSearchTerm", payload: value }); // Perlu action Redux
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      {/* Filter Status */}
      <RadioGroup
        orientation="horizontal"
        value={statusFilter}
        onValueChange={handleStatusChange}
        label="Filter by Status"
      >
        <Radio value="all">All</Radio>
        <Radio value="completed">Completed</Radio>
        <Radio value="pending">Pending</Radio>
      </RadioGroup>

      {/* Filter Kategori */}
      <Select
        label="Filter by Category"
        placeholder="Select category"
        selectedKeys={categoryFilter ? new Set([categoryFilter]) : new Set([])}
        onSelectionChange={handleCategoryChange}
        className="max-w-xs"
        variant="bordered"
        radius="lg"
        size="md"
        classNames={{
          trigger:
            "border-blue-300 hover:border-blue-500 focus-within:border-blue-600",
          value: "text-md",
        }}
      >
        {categories.map((cat) => (
          <SelectItem key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </SelectItem>
        ))}
      </Select>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
        startContent={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
        className="max-w-xs"
        variant="bordered"
        radius="lg"
        size="md"
        classNames={{
          inputWrapper:
            "border-blue-300 hover:border-blue-500 focus-within:border-blue-600",
          input: "text-md",
        }}
      />
    </div>
  );
}

export default FilterSection;
