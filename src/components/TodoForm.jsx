// src/components/TodoForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/outline"; // Heroicons tetap berfungsi

function TodoForm() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const categories = ["Work", "Personal", "Shopping", "Health", "Others"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({
        type: "todos/addTodo",
        payload: {
          id: Date.now(),
          text: taskText,
          category: category || "Others",
          description: description,
          completed: false,
        },
      });
      setTaskText("");
      setCategory("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded-lg bg-gray-50 shadow-sm"
    >
      {" "}
      {/* Menambahkan kelas ke form */}
      {/* Input Task Name */}
      <div>
        <label
          htmlFor="taskName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Task Name
        </label>
        <input
          id="taskName"
          type="text"
          placeholder="Enter your task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
          // **Kelas Tailwind untuk input**
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm text-gray-700 placeholder-gray-400"
        />
      </div>
      {/* Textarea Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description (Optional)
        </label>
        <textarea
          id="description"
          placeholder="Add more details about your task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          // **Kelas Tailwind untuk textarea**
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm h-24 resize-y text-gray-700 placeholder-gray-400"
        ></textarea>
      </div>
      {/* Select Category */}
      <div className="relative">
        {" "}
        {/* Tambahkan relative untuk custom arrow */}
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          // **Kelas Tailwind untuk select**
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm text-gray-700 appearance-none pr-8" // appearance-none untuk custom arrow
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {/* Ikon panah kustom untuk select */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          style={{ top: "calc(1.5rem + 0.25rem)" }}
        >
          {" "}
          {/* Sesuaikan posisi panah */}
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.95 4.95z" />
          </svg>
        </div>
      </div>
      {/* Button Add Task */}
      <button
        type="submit"
        // **Kelas Tailwind untuk tombol**
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center gap-2"
      >
        Add Task <PlusIcon className="w-5 h-5" />
      </button>
    </form>
  );
}

export default TodoForm;
