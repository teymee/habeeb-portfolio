import React from "react";

// 🚨 assets

import travel from "@/assets/svg/travel-app.svg";
import epump from "@/assets/svg/epump-snip.svg";

export default function Work() {
  return (
    <section className="wrapper py-10 ">
      <div className="space-y-10 ">
        <h1 className="text-[6rem] text-[#333333] leading-24">
          Creating next level <br /> digital products
        </h1>

        {/* 🚨 toggle buttons  */}
        <section className="gap-x-4 flex items-center">
          <div className=" w-[200px] h-[80px] font-light py-4 flex gap-x-2 border border-black-200 rounded-full">
            <h1 className=" w-fit m-auto text-size20">All (4)</h1>
          </div>

          <div className=" w-[200px] h-[80px] font-light py-4 flex gap-x-2 border border-black-200 rounded-full">
            <h1 className=" w-fit m-auto text-size20">Branding (4)</h1>
          </div>

          <div className=" w-[200px] h-[80px] font-light py-4 flex gap-x-2 border border-black-200 rounded-full">
            <h1 className=" w-fit m-auto text-size20">Mobile App (4)</h1>
          </div>

          <div className=" w-[200px] h-[80px] font-light py-4 flex gap-x-2 border border-black-200 rounded-full">
            <h1 className=" w-fit m-auto text-size20">Web app (4)</h1>
          </div>
        </section>
        {/*  */}
      </div>

      {/* 🚨 works  */}

      <section className="grid grid-cols-2 w-[80%] mx-auto global-gap">
        <section className="space-y-4">
          <div className="w-[450px] h-[450px] rounded-4xl bg-gray-1000">
            <div className="row-center">
              <img src={travel} alt="" className="" />
            </div>
          </div>
          <h4 className="text-size20 font-semibold">Branding</h4>
        </section>
        <section className="space-y-4 mt-20">
          <div className="w-[450px] h-[450px] rounded-4xl bg-gray-1000">
            <div className="row-center">
              <img src={epump} alt="" className="" />
            </div>
          </div>
          <h4 className="text-size20 font-semibold">Mobile Applications</h4>
        </section>
        <section className="space-y-4 mt-[-40px]">
          <div className="w-[450px] h-[450px] rounded-4xl bg-gray-1000">
            <div className="row-center">
              <img src={epump} alt="" className="" />
            </div>
          </div>
          <h4 className="text-size20 font-semibold">Mobile Applications</h4>
        </section>

        <section className="space-y-4 mt-20">
          <div className="w-[450px] h-[450px] rounded-4xl bg-gray-1000">
            <div className="row-center">
              <img src={epump} alt="" className="" />
            </div>
          </div>
          <h4 className="text-size20 font-semibold">Mobile Applications</h4>
        </section>
      </section>
    </section>
  );
}
