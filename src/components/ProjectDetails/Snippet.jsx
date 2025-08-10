import React from "react";

import prototype from "@/assets/svg/prototype.svg"
import epump from "@/assets/svg/epump-snip.svg";
import youtube from "@/assets/svg/youtube.svg";
export default function Snippet() {
  return (
    <section className="space-y-10">
      <section className="wrapper space-y-10">
        <div className="border-b border-b-black-200 [ lg:pb-20 pb-8 ]">
          <h1 className={` header-style [ lg:w-[65%] w-10/12 ]`}>
            <span className="font-thin"> Prototype for </span>iOS and
            Android
          </h1>
        </div>

        {/* 🚨 prototype  */}

         <section className="w-full">
          <img src={prototype} alt="" className="w-full" />
        </section>
      </section>

      <section className="wrapper space-y-10">
        <div className="border-b border-b-black-200 pb-10">
          <h1 className={`header-style w-[60%]`}>
            Users Testimonials
          </h1>
        </div>

        {/* 🚨 youtube  */}

        <section className="w-full">
          <img src={youtube} alt="" className="w-full" />
        </section>
      </section>

      {/* 🚨 next project  */}
      <section className="bg-black-700 w-full pt-10 border-b border-[#F5F3F02D] ">
        <section className="flex items-center flex-col wrapper text-center">
          <h4 className="text-black-500/20 text-size24">Next project</h4>
          <h1 className=" [ lg:text-[4.5rem] text-[2rem] ] text-white"> Epump station</h1>

          <div className="overflow-y-hidden h-[12rem] lg:mt-10">
            <img src={epump} alt="" className="w-[600px] h-[20.75rem]" />
          </div>
        </section>
      </section>
    </section>
  );
}
