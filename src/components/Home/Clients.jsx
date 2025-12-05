import React from "react";
// 🚨 assets
import fm from "@/assets/svg/fm.svg";
import tracker from "@/assets/svg/tracker.svg";
import epump from "@/assets/svg/epump.svg";
import media from "@/assets/svg/media.svg";
import veda from "@/assets/svg/veda.svg";
import ap from "@/assets/svg/ardova.svg";
import cloud from "@/assets/svg/cloud.svg";
import print from "@/assets/svg/print.svg";
import { urlFor } from "@/utils";
export default function Clients({ clientList }) {
  return (
    <section>
      <section className="space-y-4">
        <h2 className="text-center font-bold text-2xl">
          Helping founders build impactful product. My clients <br /> have
          raised over $20M+ in funding.
        </h2>

        <section className="lg:h-[100px] w-full ">
          <section className="overflow-hidden">
            <section
              className={`flex-responsive gap-x-10  [ lg:w-fit w-full  ] clientList-carousel`}
            >
              {clientList &&
                [
                  ...clientList,
                  ...clientList,
                  ...clientList,
                  ...clientList,
                  ...clientList,
                ]?.map(({ image, _key }) => {
                  const img = urlFor(image?.asset?._ref);
                  return (
                    <div
                      key={_key}
                      className="flex flex-shrink-0 gap-x-2 items-center [ lg:text-[2.125rem] text-base ] text-white [ lg:bg-transparent bg-black-400 rounded py-4 px-6 ] [ lg:min-w-max w-full  ]"
                    >
                      <img
                        src={img}
                        alt=""
                        className="[ lg:w-[80px] w-[32px] ]"
                      />
                    </div>
                  );
                })}
            </section>
          </section>
        </section>
      </section>

      {/* 🚨 Niche  */}
      {/* <section className="wrapper global-gap space-y-4 niche">
        <h1 className="text-black-200 [ lg:text-[32px] text-2xl ] font-semibold [ lg:w-[40%] ] ">
          I've been in various{" "}
          <span className="text-black">niches and domains, working </span>
          with design:
        </h1>

        <section className="grid justify-between [ lg:grid-cols-3 grid-cols-1 ] [ lg:gap-x-4 gap-y-4  ] text-black-50 text-base font-medium ">
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black">Payments</span>, Fintech, Fuel
              station Automation
            </p>

            <div className="flex lg:gap-x-6 gap-x-4">
              <img src={ap} alt="" className="lg:w-fit w-8" />
              <img src={fm} alt="" className="lg:w-fit w-10" />
              <img src={tracker} alt="" className="lg:w-fit w-15" />

              <img src={epump} alt="" className="lg:w-fit w-15" />
            </div>
          </div>

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
      </section> */}
      {/*  */}
    </section>
  );
}
