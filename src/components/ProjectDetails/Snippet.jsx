import React from "react";

import epump from "@/assets/svg/epump-snip.svg";
// import youtube from "@/assets/svg/youtube.svg";
import { urlFor } from "@/utils";
export default function Snippet({ details }) {
  const { prototype, testimonial } = details ?? {};
  const prototypeImage = urlFor(prototype?.asset?._ref);

  const videoId = testimonial.split("v=")[1]?.split("&")[0];
  console.log(videoId, "jjjj");
  return (
    <section className="space-y-10">
      <section className="wrapper space-y-10">
        <div className="border-b border-b-black-200 [ lg:pb-20 pb-8 ]">
          <h1 className={` header-style [ lg:w-[65%] w-10/12 ]`}>
            <span className="font-thin"> Prototype for </span>iOS and Android
          </h1>
        </div>

        {/* 🚨 prototype  */}

        <section className="w-full">
          <img src={prototypeImage} alt="" className="w-full" />
        </section>
      </section>

      <section className="wrapper space-y-10">
        <div className="border-b border-b-black-200 pb-10">
          <h1 className={`header-style w-[60%]`}>Users Testimonials</h1>
        </div>

        {/* 🚨 youtube  */}

        <section className="w-full ">
          {/* <img src={youtube} alt="" className="w-full" /> */}
          <div
            style={{
              position: "relative",
              paddingBottom: "30%",
              height: "200px",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </section>
      </section>

      {/* 🚨 next project  */}
      <section className="bg-black-700 w-full pt-10 border-b border-[#F5F3F02D] ">
        <section className="flex items-center flex-col wrapper text-center">
          <h4 className="text-black-500/20 text-size24">Next project</h4>
          <h1 className=" [ lg:text-[4.5rem] text-[2rem] ] text-white">
            {" "}
            Epump station
          </h1>

          <div className="overflow-y-hidden lg:mt-10">
            <img src={epump} alt="" className="w-[600px] h-[20.75rem]" />
          </div>
        </section>
      </section>
    </section>
  );
}
