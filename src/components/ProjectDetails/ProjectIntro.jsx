import React from "react";

import { urlFor } from "@/utils";

import leftArrow from "@/assets/svg/left-arrow.svg";
import { useNavigate } from "react-router-dom";

export default function ProjectIntro({ details }) {
  const navigate = useNavigate();
  const {
    name,
    tag,
    roles,
    industry,
    duration,
    bgImage,
    overview,
    overviewThumbnail,
    overviewLinks,
    client,
  } = details ?? {};

  const { appStore, googlePlay, liveWebsite } = overviewLinks ?? {};

  const appImage = urlFor(bgImage?.asset?._ref);
  const thumbnail = urlFor(overviewThumbnail?.asset?._ref);

  const desc = [
    {
      title: "ROLE / SERVICES",
      body: roles,
    },

    {
      title: "CLIENT",
      body: client,
    },

    {
      title: "INDUSTRY",
      body: industry,
    },
    {
      title: "DURATION",
      body: [duration],
    },
  ];
  return (
    <section className=" lg:py-10 pt-10 space-y-20">
      <section className="wrapper  [ lg:space-y-10 space-y-4 ]">
        <div
          onClick={() => navigate(-1)}
          className="flex gap-x-2 cursor-pointer fixed top-10 bg-white w-fit px-4 py-1 rounded-md"
        >
          <img src={leftArrow} alt="go back" />
          <p>Back</p>
        </div>

        {/* 🚨 name  */}
        <div className="text-black-400 space-y-8 mt-20">
          <h5 className="text-size20 font-medium">{tag}</h5>
          <h1 className="[ lg:text-size103 text-size40 ]    [ w-[30%] lg:leading-28 leading-14 ]">
            {name}
          </h1>
        </div>

        {/* 🚨 desc  */}
        <section className="grid lg:grid-cols-4 [ lg:gap-x-10 gap-y-10 ] ">
          {desc.map(({ title, body }, index) => {
            return (
              <section key={index} className="text-base space-y-4">
                <div className="space-y-6 text-black-200 w-8/12">
                  <h4>{title}</h4>

                  <hr />
                </div>

                <div className="space-y-4 font-medium">
                  {body.map((item, index) => {
                    return <h4 key={index}>{item}</h4>;
                  })}
                </div>
              </section>
            );
          })}
        </section>
      </section>
      <section className=" [ lg:h-screen h-[60vh] ] w-screen ">
        <img src={appImage} alt="" className="w-full h-full object-cover" />
      </section>

      {/* 🚨 overview  */}
      <section className="wrapper space-y-20">
        <section className="flex justify-between [ flex-col lg:flex-row  gap-y-4 ] ">
          <h3 className="w-[20%] uppercase">Overview</h3>

          <div className="space-y-10">
            <p className="text-black-400 w-[80%]">{overview}</p>

            <div className="flex gap-x-10 items-center">
              {liveWebsite && (
                <a href={liveWebsite} target="_blank">
                  {" "}
                  <p className="underline underline-offset-8">Live website</p>
                </a>
              )}

              {appStore && (
                <a href={appStore} target="_blank">
                  {" "}
                  <p className="underline underline-offset-8">App store</p>
                </a>
              )}

              {googlePlay && (
                <a href={googlePlay} target="_blank">
                  {" "}
                  <p className="underline underline-offset-8">Google play</p>
                </a>
              )}
            </div>
          </div>
        </section>

        <div className="w-[80%] rounded-t-2xl mx-auto">
          <img src={thumbnail} alt="" />
        </div>
      </section>
    </section>
  );
}
