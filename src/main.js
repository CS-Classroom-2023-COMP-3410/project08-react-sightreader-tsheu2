import React from "react";
import ReactDOM from "react-dom/client";

// Import Sightreader logic
import "./sightreader.js";

// Create a simple root element for the app
const sightreaderContainer = React.createElement("div", { id: "sightreader-container" }, [

]);

// Render React into #root
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(sightreaderContainer);

// Ensure scripts execute after page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Vite-powered Sightreader is initialized.");
});
