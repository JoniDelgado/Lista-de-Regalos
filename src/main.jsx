import React from "react";
import ReactDOM from "react-dom/client";
import { ListProvider } from "./context/GiftListContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>
);
