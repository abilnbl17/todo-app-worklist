// src/store/reducers/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setTodos: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    editTodo: (state, action) => {
      // Tambahkan action ini untuk edit
      const { id, text, description, category } = action.payload;
      const todo = state.list.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
        todo.description = description;
        todo.category = category;
      }
    },
  },
  // Tambahkan extraReducers jika Anda ingin menangani action dari saga
  // atau action non-slice lainnya (opsional untuk kasus ini)
  // extraReducers: (builder) => {
  //   builder
  //     .addCase('FETCH_API_DATA', (state) => {
  //       state.loading = true; // Atau tangani di saga seperti yang sudah ada
  //       state.error = null;
  //     });
  // },
});

// Ekspor semua action yang dibutuhkan
export const {
  addTodo,
  removeTodo,
  toggleComplete,
  setTodos,
  setLoading,
  setError,
  editTodo,
} = todoSlice.actions;

// Tambahkan action type yang akan di-dispatch dari komponen dan di-listen oleh saga
// Ini adalah cara eksplisit untuk mendefinisikan action yang tidak memiliki reducer di slice ini.
// Atau, Anda bisa membuat action creator terpisah jika action ini hanya untuk saga.
export const FETCH_API_DATA = "FETCH_API_DATA"; // <-- Tambahkan ini

export default todoSlice.reducer;
