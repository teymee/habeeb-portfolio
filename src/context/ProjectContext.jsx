import { sanityClient } from "@/sanity/client";
import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: null,
  isLoading: false,
  error: null,
  fetchProject: () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projects, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProject = () => {
    setIsLoading(true);
    sanityClient
      .fetch(`*[_type == "projects"]`)
      .then((data) => setProject(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <ProjectContext.Provider
      value={{ projects, isLoading, error, fetchProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
