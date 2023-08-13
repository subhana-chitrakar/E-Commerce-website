import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutingSection from "./config/routing.config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoutingSection />
  </React.StrictMode>
);
