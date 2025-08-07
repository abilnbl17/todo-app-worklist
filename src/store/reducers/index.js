import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  // Tambahkan reducers lain di sini jika ada
});

export default rootReducer;
