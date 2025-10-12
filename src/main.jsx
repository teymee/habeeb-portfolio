import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "@/assets/tailwind.css";
import App from "./App.jsx";
import { ProjectProvider } from "./context/ProjectContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>{" "}
  </StrictMode>
);
