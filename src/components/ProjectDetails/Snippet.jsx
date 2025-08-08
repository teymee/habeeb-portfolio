import React from "react";

import travel from "@/assets/svg/travel-app.svg";
import epump from "@/assets/svg/epump-snip.svg";

export default function Snippet() {
  return (
    <section>
      <section className="wrapper space-y-10">
        <div className="border-b border-b-black-200 pb-20">
          <h1 className={`text-[96px] leading-24  w-[65%]`}>
            <span className="font-thin"> Development app for </span>iOS and
            Android
          </h1>
        </div>

        {/* 🚨 snippets  */}

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

      {/* 🚨 next project  */}
      <section className="bg-black-700 w-full pt-10 border-b border-[#F5F3F02D] ">
        <section className="flex items-center flex-col wrapper text-center">
          <h4 className="text-black-500/20 text-size24">Next project</h4>
          <h1 className="text-[4.5rem] text-white"> Epump station</h1>

          <div className="overflow-y-hidden h-[12rem] mt-10">
              <img src={epump} alt="" className="w-[600px] h-[20.75rem]" />
          </div>
        </section>
      </section>
    </section>
  );
}
