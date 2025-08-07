// // src/main.jsx (Vite)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store"; // Impor store Anda
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Bungkus App dengan Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
