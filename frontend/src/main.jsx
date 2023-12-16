import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider>
    <BrowserRouter>
      <MainLayout>
        <App />
      </MainLayout>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
);
