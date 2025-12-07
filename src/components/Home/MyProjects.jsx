import { ProjectContext } from "@/context/ProjectContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../UI/Cards/ProjectCard";
import { trimText, urlFor } from "@/utils";

// 🚨 hooks
import useWindowSize from "@/hooks/useWindowSize";

import arrow from "@/assets/svg/left-arrow.svg";

export default function MyProjects() {
  const { projects, isLoading } = useContext(ProjectContext);
  const { isLargeScreen } = useWindowSize();
  console.log(projects, "projects");
  return (
    <section className="w-full bg-black-600 py-10 space-y-10">
      <section className="wrapper ">
        <h2 className="text-[3.25rem] leading-15">
          <span className="font-thin">My</span> <br />
          <span className="font-bold ">Projects</span>
        </h2>
      </section>

      <section>
        {!isLoading && (
          <section>
            {/* 🚨 projects  */}
            <section className=" ">
              {projects?.length > 0 && (
                <section>
                  <section className=" grid [ lg:grid-cols-2 grid-cols-1 gap-10 ] [ lg:w-[80%] w-[95%] ]  mx-auto  space-y-4">
                    {projects
                      .slice(0, 4)
                      ?.map(
                        (
                          {
                            imagePreview,
                            name,
                            _id,
                            tag,
                            overview,
                            appLogo,
                            industry,
                          },
                          index
                        ) => {
                          const image = urlFor(imagePreview?.asset?._ref);
                          const logo = urlFor(appLogo?.asset?._ref);
                          const bgStyle = {
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                          };
                          return (
                            <article
                              key={index}
                              className=" overflow-hidden  h-[610px] shadow-lg hover:border-green-100 border-black-2000 rounded-xl border-2 space-y-4"
                            >
                              {/* 🚨 background image  */}
                              <div
                                style={bgStyle}
                                className=" lg:h-[340px] h-[339px] "
                              ></div>
                              {/*  */}
                              <section className="px-4 space-y-4">
                                <img
                                  src={logo}
                                  alt={name}
                                  className="h-[60px]"
                                />
                                {/* 🚨 industries  */}
                                <div className="flex flex-wrap items-center gap-2">
                                  {industry?.map((field) => {
                                    return (
                                      <p
                                        key={field}
                                        className="w-fit px-3 uppercase text-xs py-2 text-white bg-black rounded-full"
                                      >
                                        {field}
                                      </p>
                                    );
                                  })}
                                </div>
                                {/* 🚨 overview  */}
                                <div className="space-y-2 text-sm">
                                  <h2 className="font-bold text-black-400">
                                    {tag}
                                  </h2>
                                  <p className="text-white-900">
                                    {trimText(
                                      overview,
                                      isLargeScreen ? 100 : 80
                                    )}
                                  </p>
                                </div>

                                <Link to={`/project-details/${_id}`}>
                                  <div className="flex gap-x-1 items-center mt-4 font-semibold text-sm">
                                    <p className="">View projects </p>
                                    <img
                                      src={arrow}
                                      alt="view projects"
                                      className="rotate-180 w-3"
                                    />
                                  </div>
                                </Link>
                              </section>
                            </article>
                          );
                        }
                      )}
                  </section>

                  <div className="w-fit mx-auto my-10">
                    <Link to={`/works`}>
                      <button className="border-2 rounded-full border-black-300 cursor-pointer text-black-300 flex gap-x-3 items-center px-4 py-4 font-semibold text-sm ">
                        {" "}
                        <span>See all projects</span>
                        <img
                          src={arrow}
                          alt="view projects"
                          className="rotate-180 w-3"
                        />
                      </button>
                    </Link>
                  </div>
                </section>
              )}

              {projects?.length < 1 && (
                <p className="text-3xl text-center w-full py-40">
                  {" "}
                  No available projects{" "}
                </p>
              )}
            </section>
          </section>
        )}
      </section>
    </section>
  );
}
