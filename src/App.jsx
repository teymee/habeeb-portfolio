import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "@/pages/Home";
import Masterlayout from "@/components/UI/Masterlayout";
import Work from "./pages/Work";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Masterlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "works",
          element: <Work />,
        },
        { path: "about", element: <About /> },
        { path: "/project-details/:id", element: <ProjectDetails /> },
        { path: "contact", element: <ProjectDetails /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
