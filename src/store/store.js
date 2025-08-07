import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers"; // Anda akan membuat ini
import rootSaga from "./sagas/rootSaga"; // Anda akan membuat ini

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Nonaktifkan Redux Thunk karena kita pakai Redux Saga
      serializableCheck: {
        ignoredActions: ["YOUR_ACTION_TYPE_HERE"], // Tambahkan action yang tidak ingin di-check serializability-nya jika ada
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
