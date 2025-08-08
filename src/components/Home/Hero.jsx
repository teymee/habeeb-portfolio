import React from "react";

// 🚨 assets
import avatar from "@/assets/svg/avatar.svg";
import fm from "@/assets/svg/fm.svg";
import tracker from "@/assets/svg/tracker.svg";
import epump from "@/assets/svg/epump.svg";
import media from "@/assets/svg/media.svg";
import veda from "@/assets/svg/veda.svg";

export default function Hero() {
  return (
    <section>
      {/* 🚨 Hero  */}
      <section className="h-screen items-center w-full bg-cover bg-[url(@/assets/svg/hero-bg.svg)] flex flex-col justify-center space-y-4">
        <div className="flex justify-center">
          <img src={avatar} alt="" />
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-[72px] font-bold">I'm Habeeb Abdullahi.</h1>
          <h4 className="text-size20 font-semibold mt-[-20px]">
            I turn experiences into business success.
          </h4>
          <p className="text-center text-black-300 mt-4 w-[50%] text-base font-medium mx-auto">
            With over three years of experience crafting intuitive user
            interfaces and smooth interactions, I excel at creating user-focused
            solutions that are not only visually appealing but also function
            flawlessly.{" "}
          </p>
        </div>
      </section>
      {/*  */}

      {/* 🚨 Niche  */}
      <section className="wrapper global-gap space-y-4">
        <h1 className="text-black-200 text-[2rem] font-semibold">
          I’ve been in various{" "}
          <span className="text-black">
            niches and <br /> domains, working{" "}
          </span>
          with design:
        </h1>

        {/* 🚨 cards  */}
        <section className="grid grid-cols-3 gap-x-10 text-black-50 text-base font-medium ">
          {/* one  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black">Payments</span>, Fuel station
              Automation and project management solutions
            </p>

            <div className="flex gap-x-10">
              <img src={fm} alt="" />
              <img src={tracker} alt="" />

              <img src={epump} alt="" />
            </div>
          </div>

          {/* two  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black"> Islamic Financing</span>, Broadcast
              Media Production and Distribution
            </p>

            <div className="flex gap-x-10">
              <img src={media} alt="" />

            </div>
          </div>

          {/* three  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black"> Custom software development</span>,,
              A.I software solutions
            </p>

            <div className="flex gap-x-10">
              <img src={veda} alt="" />
            </div>
          </div>
        </section>
      </section>
      {/*  */}
    </section>
  );
}
