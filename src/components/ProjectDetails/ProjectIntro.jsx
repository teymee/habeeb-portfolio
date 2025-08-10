import React from "react";

// 🚨 assets
import appAd from "@/assets/svg/app-ad.svg";
import app from "@/assets/svg/app-mock.svg";

export default function ProjectIntro() {
  const desc = [
    {
      title: "ROLE / SERVICES",
      body: ["PRODUCT DESIGNER", "INTERACTION DESIGN"],
    },

    {
      title: "INDUSTRY",
      body: ["OIL & GAS", "B2B"],
    },
    {
      title: "DURATION",
      body: ["6 WEEKS"],
    },
  ];
  return (
    <section className=" lg:py-10 pt-10 space-y-20">
      <section className="wrapper  [ lg:space-y-10 space-y-4 ]">
        {/* 🚨 name  */}
        <div className="text-black-400 space-y-8">
          <h5 className="text-size20 font-medium">
            Epump Station Companion App
          </h5>
          <h1 className="[ lg:text-size103 text-size40 ]    [ w-[30%] lg:leading-28 leading-14 ]">
            Tank 
            Management
          </h1>
        </div>

        {/* 🚨 desc  */}
        <section className="grid lg:grid-cols-3 [ lg:gap-x-10 gap-y-10 ] ">
          {desc.map(({ title, body }, index) => {
            return (
              <section key={index} className="text-base space-y-4">
                <div className="space-y-6 text-black-200 w-8/12">
                  <h4>{title}</h4>

                  <hr />
                </div>

                <div className="space-y-4 font-medium">
                  {body.map((item) => {
                    return <h4>{item}</h4>;
                  })}
                </div>
              </section>
            );
          })}
        </section>
      </section>
      <section className=" [ lg:h-screen h-[60vh] ] w-screen ">
        <img src={app} alt="" className="w-full h-full" />
      </section>

      {/* 🚨 overview  */}
      <section className="wrapper space-y-20">
        <section className="flex justify-between [ flex-col lg:flex-row  gap-y-4 ] ">
          <h3 className="w-[20%] uppercase">Overview</h3>

          <div className="space-y-10">
            <p className="text-black-400 w-[80%]">
              An application that effortlessly track fuel levels and dispensing
              operations in real-time, ensure accurate inventory, prevent
              overflow, and optimize fuel usage all with areliable, easy-to-use
              system.
            </p>

            <div className="flex gap-x-10 items-center">
              <p className="underline underline-offset-8">Live website</p>
              <p className="underline underline-offset-8">App store</p>
              <p className="underline underline-offset-8">Google play</p>
            </div>
          </div>
        </section>

        <div className="w-[80%] rounded-t-2xl mx-auto">
            <img src={appAd} alt="" />
        </div>
      </section>
    </section>
  );
}
