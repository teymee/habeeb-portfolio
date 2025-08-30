import React from "react";

// 🚨 assets
import avatar from "@/assets/svg/avatar.svg";
import fm from "@/assets/svg/fm.svg";
import tracker from "@/assets/svg/tracker.svg";
import epump from "@/assets/svg/epump.svg";
import media from "@/assets/svg/media.svg";
import veda from "@/assets/svg/veda.svg";
import ap from "@/assets/svg/ardova.svg"
import cloud from "@/assets/svg/cloud.svg"
import print from "@/assets/svg/print.svg"

export default function Hero() {
  return (
    <section>
      {/* 🚨 Hero  */}
      <section className="h-screen items-center w-full bg-cover bg-[url(@/assets/svg/hero-bg.svg)] flex flex-col justify-center space-y-4">
        <div className="flex justify-center">
          <img src={avatar} alt="" className="[ lg:w-full w-[4.875rem] ]" />
        </div>

        <div className="space-y-4 text-center">
          <h1 className=" [ text-[45px] lg:text-[72px] ] font-medium">
            Hi, I’m Habeeb
          </h1>
          <h4 className="text-size20  mt-[-20px]">
            A designer who makes ideas click.
          </h4>
          <p className="text-center text-black-300 mt-4 [ lg:w-[80%] w-[90%] ] text-base font-medium mx-auto">
            Helping businesses scale with design that speaks clearly, performs
            effortlessly, and delivers measurable value.
          </p>
        </div>
      </section>
      {/*  */}

      {/* 🚨 Niche  */}
      <section className="wrapper global-gap space-y-4">
        <h1 className="text-black-200 text-[32px] font-semibold [ lg:w-[40%] ] ">
          I’ve been in various{" "}
          <span className="text-black">niches and domains, working </span>
          with design:
        </h1>

        {/* 🚨 cards  */}
        <section className="grid justify-between [ lg:grid-cols-3 grid-cols-1 ] [ lg:gap-x-4 gap-y-4  ] text-black-50 text-base font-medium ">
          {/* one  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black">Payments</span>, Fuel station
              Automation and project management solutions
            </p>

            <div className="flex gap-x-6">
              
              <img src={ap} alt="" />
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
              <img src={cloud} alt="" />
              <img src={print} alt="" />
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
