import React, { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

// 🚨 assets
import arrowUp from "@/assets/svg/arrow-up.svg";

// 🚨components

import ProjectOverviewCard from "../UI/Cards/ProjectOverviewCard";
import { ProjectContext } from "@/context/ProjectContext";
import { urlFor } from "@/utils";

export default function Projects() {
  const { fetchProject, projects, isLoading } = useContext(ProjectContext);

  useEffect(() => {
    fetchProject();
  }, []);

  const details = useMemo(() => {
    if (!projects) null;
    if (projects) {
      const randomProject = Math.floor(Math.random() * projects.length );
 
      const { appLock, tag, overview, industry, imagePreview } =
        projects[randomProject];

      return {
        app: urlFor(imagePreview?.asset?._ref),
        logo: appLock,
        name: tag,
        desc: overview,
        tags: industry,
      };
    }
  }, [projects]);
  return (
    <section className="wrapper global-gap space-y-10">
      {/* 🚨 header  */}
      <section className="justify-between font-thin flex items-center">
        <h1 className="[ lg:text-[40px] text-[30px]  ] lg:leading-12 text-black-200">
          Selected <br />
          <span className="font-bold"> Projects </span>
        </h1>

        <Link to="/works">
          <button className="w-fit border border-black-300 rounded-full flex gap-x-2 px-4 py-4 [ lg:text-base text-sm ] font-semibold text-black-300">
            <p>See all projects</p>
            <img src={arrowUp} alt="" />
          </button>
        </Link>
      </section>

      {/* 🚨 Project  */}

      {!isLoading && <ProjectOverviewCard {...details} />}

      {/*  */}
    </section>
  );
}
