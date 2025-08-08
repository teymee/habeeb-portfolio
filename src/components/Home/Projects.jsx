import React from "react";
import { Link } from "react-router-dom";

// 🚨 assets
import arrowUp from "@/assets/svg/arrow-up.svg";
import epumpApp from "@/assets/svg/epump-app.svg";
import epump from "@/assets/svg/epump.svg";

// 🚨components 

import ProjectOverviewCard from "../UI/Cards/ProjectOverviewCard";

export default function Projects() {
  const details = {
    app: epumpApp,
    logo: epump,
    name: " Epump Station Companion App",
    desc: " An App that gives you realtime tank inventory view and control of your filling station stock from the comfort of your phone. Get sales report etc.",
    tags: ["STATION AUTOMATION", "Saas", "   OIL & GAS SECTOR"],
  };
  return (
    <section className="wrapper global-gap space-y-10">
      {/* 🚨 header  */}
      <section className="justify-between font-thin flex items-center">
        <h1 className="[ lg:text-[40px] text-[30px]  ] lg:leading-12 text-black-200">
          Selected <br />
          <span className="font-bold"> Projects </span>
        </h1>

        <Link to="/">
          <button className="w-fit border border-black-300 rounded-full flex gap-x-2 px-4 py-4 [ lg:text-base text-sm ] font-semibold text-black-300">
            <p>See all projects</p>
            <img src={arrowUp} alt="" />
          </button>
        </Link>
      </section>

      {/* 🚨 Project  */}

      <ProjectOverviewCard {...details} />

      {/*  */}
    </section>
  );
}
