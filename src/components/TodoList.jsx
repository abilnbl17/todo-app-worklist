// src/components/TodoList.jsx
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
// HAPUS IMPORT INI: import { Listbox, ListboxItem } from "@heroui/react";

function TodoList() {
  const todos = useSelector((state) => state.todos.list);
  const filters = useSelector((state) => state.filters);
  const {
    status: currentStatusFilter,
    category: currentCategoryFilter,
    searchTerm,
  } = filters;

  const lowerCaseSearchTerm = (searchTerm || "").toLowerCase();

  const filteredTodos = todos.filter((todo) => {
    const matchesStatus =
      currentStatusFilter === "all" ||
      (currentStatusFilter === "completed" && todo.completed) ||
      (currentStatusFilter === "pending" && !todo.completed);

    const matchesCategory =
      currentCategoryFilter === "all" ||
      todo.category === currentCategoryFilter;

    const todoText = todo.text || "";
    const todoDescription = todo.description || "";

    const matchesSearch =
      todoText.toLowerCase().includes(lowerCaseSearchTerm) ||
      todoDescription.toLowerCase().includes(lowerCaseSearchTerm);

    return matchesStatus && matchesCategory && matchesSearch;
  });

  if (filteredTodos.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg mt-8">
        No tasks found. Try adding a new one or adjusting your filters!
      </p>
    );
  }

  return (
    // Gunakan elemen HTML <ul> dengan kelas Tailwind untuk styling dasar list
    <ul className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
      {filteredTodos.map((todo) => (
        // Gunakan elemen HTML <li> untuk setiap item list
        <li key={todo.id} className="p-0">
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
