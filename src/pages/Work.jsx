import React, { useContext, useEffect, useState } from "react";

// 🚨components
import ProjectCard from "@/components/UI/Cards/ProjectCard";

import { Link } from "react-router-dom";
import { ProjectContext } from "@/context/ProjectContext";

export default function Work() {
  const { projects, fetchProject, isLoading } = useContext(ProjectContext);

  const [tab, setTab] = useState("all");
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetchProject();
  }, [tab]);

  useEffect(() => {
    if (projects) {
      let filteredWork =
        tab === "all"
          ? projects
          : projects.filter((item) => item?.category?.toLowerCase() === tab);

      setWorks(filteredWork);
    }
  }, [tab, projects]);

  const getNavCount = (nav) => {
    return projects
      ? projects.filter((item) => item?.category?.toLowerCase() === nav)?.length
      : 0;
  };

  const navs = [
    {
      name: "All",
      value: "all",
      num: projects?.length ?? 0,
    },

    {
      name: "Branding",
      value: "branding",
      num: getNavCount("branding"),
    },

    {
      name: "Mobile App",
      value: "mobile",
      num: getNavCount("mobile"),
    },

    {
      name: "Web app",
      value: "web",
      num: getNavCount("web"),
    },
  ];

  return (
    <section className="wrapper py-10 [ lg:space-y-10 space-y-4 ] ">
      <div className=" ">
        <h1 className=" [ lg:text-[6rem] text-[34px] ] [ lg:leading-24 leading-10 ] text-[#333333]   [ lg:w-[70%] w-[90%] ]">
          Creating next level digital products
        </h1>
      </div>

      {/* 🚨 toggle buttons  */}
      <section className="[ lg:gap-x-4 gap-x-1 ] flex items-center">
        {navs.map(({ name, num, value }) => {
          return (
            <div
              key={name}
              onClick={() => setTab(value?.toLowerCase())}
              className={` ${
                tab === value
                  ? "bg-black text-white"
                  : "bg-transparent text-black"
              } [ lg:py-4 py-2 ] [ lg:gap-x-2  px-3  ]  [ lg:w-[200px] ] lg:h-[80px] font-light border border-black-200 rounded-full cursor-pointer`}
            >
              <h1 className=" flex items-center h-full justify-center  [ lg:text-size20 text-[9px] ]">
                {name} ({num})
              </h1>
            </div>
          );
        })}
      </section>
      {/*  */}

      {isLoading && <p className="text-center"> Loading...</p>}

      {!isLoading && (
        <section>
          {/* 🚨 works  */}
          <section>
            {works?.length > 0 && (
              <section className="grid [ lg:grid-cols-2 grid-cols-1 ] [ lg:w-[80%] w-[95%] ]  mx-auto global-gap space-y-4">
                {works?.map((project, index) => {
                  return (
                    <div
                      key={index}
                      className=" even:lg:mt-20 odd:lg:mt-[-40px]"
                    >
                      <Link to={`/project-details/${project?._id}`}>
                        <ProjectCard {...project} />
                      </Link>
                    </div>
                  );
                })}
              </section>
            )}

            {works.length < 1 && (
              <p className="text-3xl text-center w-full py-40"> No work </p>
            )}
          </section>
        </section>
      )}
    </section>
  );
}
