// src/components/ApiDataLoader.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@heroui/react";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { FETCH_API_DATA } from "../store/reducers/todoSlice"; // <-- Impor action type ini

function ApiDataLoader() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.loading);

  const handleFetchData = () => {
    dispatch({ type: FETCH_API_DATA }); // <-- Gunakan konstanta yang diimpor
  };

  return (
    <div className="text-center mt-6">
      <p className="text-gray-600 mb-3">
        Fetch additional data from a public API (e.g., weather, time).
      </p>
      <Button
        onClick={handleFetchData}
        color="secondary"
        isLoading={isLoading}
        isDisabled={isLoading}
        endContent={!isLoading && <CloudArrowDownIcon className="w-5 h-5" />}
        className="py-2 text-lg font-semibold"
        radius="lg"
      >
        {isLoading ? "Fetching Data..." : "Fetch External Data"}
      </Button>
    </div>
  );
}

export default ApiDataLoader;
