import { trimText } from "@/utils";
import React from "react";

// 🚨 assets
import arrow from "@/assets/svg/left-arrow.svg";
import { Link } from "react-router-dom";

// 🚨 hooks
import useWindowSize from "@/hooks/useWindowSize";

export default function ProjectOverviewCard({
  app,
  logo,
  name,
  desc,
  tags,
  id,
}) {
  const { isLargeScreen } = useWindowSize();

  return (
    <section className=" bg-black-600 border w-full border-white-100 [ lg:h-[100vh] h-fit  ]  flex flex-col items-center justify-center py-10 space-y-8 [ lg:rounded-4xl rounded-2xl  ]">
      <div className="flex flex-col justify-center items-center">
        <img src={app} alt="" className=" [ lg:w-full w-[70%] ] " />
        <img src={logo} alt="" className="w-[100px] " />
      </div>

      <div className="flex flex-col text-center justify-center items-center space-y-3 font-medium">
        <h1 className=" [ lg:text-[1.5rem] text-base ] font-semibold text-black-400">
          {name}
        </h1>
        <p className=" [ lg:w-[70%] w-[90%]  ] [ lg:text-base text-xs ] text-white-900 ">
          {trimText(desc, isLargeScreen ? 300 : 100)}
        </p>

        <div className="flex justify-center uppercase [ lg:gap-x-4  gap-x-2  ]">
          {tags?.map((tag) => {
            return (
              <p
                key={tag}
                className="bg-black [ lg:text-sm text-[7px] ] text-white font-medium rounded-full px-4 py-2 w-fit"
              >
                {tag}
              </p>
            );
          })}
        </div>

        <Link to={`/project-details/${id}`}>
          <div className="flex gap-x-3 items-center mt-4 font-semibold text-md">
            <p className="">View projects </p>
            <img src={arrow} alt="view projects" className="rotate-180 w-3" />
          </div>
        </Link>
      </div>
    </section>
  );
}
