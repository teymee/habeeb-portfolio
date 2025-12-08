import useWindowSize from "@/hooks/useWindowSize";
import { trimText, urlFor } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { isLargeScreen } = useWindowSize();

  const { imagePreview, name, _id, tag, overview, appLogo, industry } =
    project ?? {};

  const logo = urlFor(appLogo?.asset?._ref);

  const image = urlFor(imagePreview?.asset?._ref);
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  return (
    <article
      key={_id}
      className=" overflow-hidden  h-[570px] shadow-lg hover:border-green-100 border-black-2000 rounded-xl border-2 space-y-4"
    >
      {/* 🚨 background image  */}
      <Link to={`/project-details/${_id}`}>
        <div style={bgStyle} className=" lg:h-[340px] h-[339px] "></div>
      </Link>

      {/*  */}
      <section className="px-4 space-y-4">
        <img src={logo} alt={name} className="h-[60px]" />
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
          <h2 className="font-bold text-black-400">{tag}</h2>
          <p className="text-white-900">
            {trimText(overview, isLargeScreen ? 100 : 80)}
          </p>
        </div>

        {/* <Link to={`/project-details/${_id}`}>
          <div className="flex gap-x-1 items-center mt-4 font-semibold text-sm">
            <p className="">View projects </p>
            <img src={arrow} alt="view projects" className="rotate-180 w-3" />
          </div>
        </Link> */}
      </section>
    </article>

    // <section className="space-y-4 lg:mt-20 project-card">
    //   <div className=" [ w-full h-[408px] lg:w-[450px] lg:h-[450px] ]  [ lg:rounded-4xl rounded-2xl ] bg-gray-1000">
    //     <div className="row-center w-full">
    //       <img src={image} alt="" className=" w-[90%] h-[80%] m-auto object-contain" />
    //     </div>
    //   </div>
    //   <h4 className="lg:text-size20 font-semibold [ lg:text-left text-center ]">{name}</h4>
    // </section>
  );
}
