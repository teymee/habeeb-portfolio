import React from "react";

import epump from "@/assets/svg/epump-snip.svg";
import ProjectSnippet from "../UI/Cards/ProjectSnippet";

export default function Showcase() {
  const obj = {
    snippet: epump,
    name: "Epump",
    year: "2025",
  };

  const top = Array(4).fill(obj);
  const bottom = Array(3).fill(obj);
  return (
    <section className="[ lg:block hidden ]">
      {/* 🚨 header  */}
      <section className="wrapper justify-between flex items-center">
        <h1 className="text-[2.5rem] leading-12 font-thin text-black-200">
          Shots from many other
          <br />
          <span className="font-bold"> Projects </span>
        </h1>
      </section>

      {/* 🚨showcase  */}
      <section className="space-y-4 py-10 w-full">
        {/* 🚨top */}
        <section className="w-full">
          <section className="overflow-hidden">
            <section className="top-carousel w-fit flex gap-x-10">
              {[...top, ...top].map((item, index) => {
                return <ProjectSnippet key={index} {...item} />;
              })}
            </section>
          </section>
        </section>
        {/*  */}

        {/* 🚨bottom */}
        <section className="justify-center w-full">
          <section className="overflow-hidden">
            <section className="bottom-carousel w-fit flex gap-x-20 ">
              {[...bottom, ...bottom].map((item, index) => {
                return <ProjectSnippet key={index} {...item} />;
              })}
            </section>
          </section>
        </section>
        {/*  */}
      </section>
    </section>
  );
}
