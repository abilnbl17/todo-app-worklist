// src/components/TodoItem.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Checkbox,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@heroui/react";
// import {
//   TrashIcon,
//   PencilIcon,
//   CheckIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [editedDescription, setEditedDescription] = useState(
    todo.description || ""
  );
  const [editedCategory, setEditedCategory] = useState(
    todo.category || "Others"
  );

  const categories = ["Work", "Personal", "Shopping", "Health", "Others"];

  const handleToggleComplete = () => {
    dispatch({ type: "todos/toggleComplete", payload: todo.id });
  };

  const handleRemove = () => {
    dispatch({ type: "todos/removeTodo", payload: todo.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim()) {
      dispatch({
        type: "todos/editTodo", // Anda perlu membuat action 'editTodo' di todoSlice
        payload: {
          id: todo.id,
          text: editedText,
          description: editedDescription,
          category: editedCategory,
        },
      });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.text);
    setEditedDescription(todo.description || "");
    setEditedCategory(todo.category || "Others");
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0 ${
        todo.completed ? "bg-green-50" : "bg-white"
      } hover:bg-gray-50 transition-colors`}
    >
      <div className="flex items-start flex-grow gap-3">
        <Checkbox
          isSelected={todo.completed}
          onValueChange={handleToggleComplete}
          color="success"
          size="lg"
          className="flex-shrink-0 mt-1"
        />
        {isEditing ? (
          <div className="flex flex-col gap-3 w-full">
            <Input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              variant="bordered"
              radius="md"
              size="sm"
              classNames={{
                inputWrapper:
                  "border-blue-300 hover:border-blue-500 focus-within:border-blue-600",
                input: "text-md",
              }}
            />
            <Textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              variant="bordered"
              radius="md"
              size="sm"
              placeholder="Edit description"
              classNames={{
                inputWrapper:
                  "border-blue-300 hover:border-blue-500 focus-within:border-blue-600",
              }}
            />
            <Select
              label="Category"
              placeholder="Select a category"
              selectedKeys={
                editedCategory ? new Set([editedCategory]) : new Set([])
              }
              onSelectionChange={(keys) =>
                setEditedCategory(Array.from(keys).join(""))
              }
              variant="bordered"
              radius="md"
              size="sm"
              classNames={{
                trigger:
                  "border-blue-300 hover:border-blue-500 focus-within:border-blue-600",
                value: "text-md",
              }}
            >
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </Select>
          </div>
        ) : (
          <div className="flex flex-col flex-grow">
            <span
              className={`text-lg font-medium ${
                todo.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
            {todo.description && (
              <p className="text-sm text-gray-500 mt-1">{todo.description}</p>
            )}
            {todo.category && (
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 mt-1">
                {todo.category}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
        {isEditing ? (
          <>
            <Button
              isIconOnly
              color="success"
              size="sm"
              onClick={handleSaveEdit}
              aria-label="Save"
            >
              <CheckIcon className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              color="danger"
              size="sm"
              onClick={handleCancelEdit}
              aria-label="Cancel"
            >
              <XMarkIcon className="w-5 h-5" />
            </Button>
          </>
        ) : (
          <>
            <Button
              isIconOnly
              color="secondary"
              size="sm"
              onClick={handleEdit}
              aria-label="Edit"
            >
              <PencilIcon className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              color="danger"
              size="sm"
              onClick={handleRemove}
              aria-label="Delete"
            >
              <TrashIcon className="w-5 h-5" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
