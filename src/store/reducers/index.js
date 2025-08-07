// import { combineReducers } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";

// const rootReducer = combineReducers({
//   todos: todoReducer,
//   // Tambahkan reducers lain di sini jika ada
// });

// export default rootReducer;
import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import filtersReducer from "./todoSlice"; // Impor ini

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer, // Tambahkan ini
});

export default rootReducer;
