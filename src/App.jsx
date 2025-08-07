// src/App.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Impor komponen Anda
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterSection from "./components/FilterSection";
import ApiDataLoader from "./components/ApiDataLoader";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);

  return (
    // Body utama dengan background dan centering
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Kartu utama untuk aplikasi */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
        {" "}
        {/* Mengganti Card dengan div */}
        {/* Header Kartu */}
        <div className="flex flex-col items-center gap-2 p-6 border-b border-gray-200">
          {" "}
          {/* Mengganti CardHeader dengan div */}
          <h1 className="text-4xl font-extrabold text-blue-700 text-center">
            My Creative To-Do List
          </h1>
          <p className="text-md text-gray-500 text-center">
            Organize your tasks with style and efficiency.
          </p>
        </div>
        {/* Body Kartu */}
        <div className="p-6 space-y-6">
          {" "}
          {/* Mengganti CardBody dengan div */}
          {/* Section Tambah Tugas */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Add New Task
            </h2>
            <TodoForm />
          </section>
          <hr className="my-6 border-t border-gray-200" />{" "}
          {/* Mengganti Divider dengan hr */}
          {/* Section Filter & Pencarian */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Filter & Search Tasks
            </h2>
            <FilterSection />
          </section>
          <hr className="my-6 border-t border-gray-200" />{" "}
          {/* Mengganti Divider dengan hr */}
          {/* Loading, Error, dan List Tugas */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Your Tasks
            </h2>
            {isLoading && (
              <div className="flex justify-center items-center py-8">
                <LoadingSpinner />
                <span className="ml-3 text-lg text-blue-600">
                  Loading tasks...
                </span>
              </div>
            )}
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline ml-2">{error}</span>
              </div>
            )}
            {!isLoading && !error && <TodoList />}
          </section>
          <ApiDataLoader />
        </div>
      </div>
    </div>
  );
}

export default App;
