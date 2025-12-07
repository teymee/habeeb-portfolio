import React, { useState } from "react";
import { Link } from "react-router-dom";

// 🚨 assets

import arrow from "@/assets/svg/left-arrow.svg";
import superPower from "@/assets/svg/superPower.svg";

export default function Superpowers() {
  const [active, setActive] = useState(0);
  const clipNotes = [
    {
      skill: "Product design",
      writeUp:
        "Turning ideas into refined product experiences that solve real-world problems.",
      img: superPower,
    },
    {
      skill: "Brand & Graphics design",
      writeUp:
        "Turning ideas into refined product experiences that solve real-world problems.",
      img: superPower,
    },
    {
      skill: "Package design & printing",
      writeUp:
        "Turning ideas into refined product experiences that solve real-world problems.",
      img: superPower,
    },
    {
      skill: "Product management",
      writeUp:
        "Turning ideas into refined product experiences that solve real-world problems.",
      img: superPower,
    },
  ];
  return (
    <section className="wrapper bg-black-600 rounded-2xl py-10  ">
      <section className="w-11/12 mx-auto space-y-20 ">
        {/* 🚨 header  */}
        <section>
          <h2 className="text-[40px] font-semibold">
            {" "}
            <span className="text-black-200 ">My</span> superpowers
          </h2>
          <div className="flex items-center w-full  justify-between">
            <h3>
              The core abilities that power my approach <br /> to product
              thinking and design.
            </h3>

            <div className="w-fit">
              <Link to={`/works`}>
                <button className="border-2 rounded-full border-black-300 cursor-pointer text-black-300 flex gap-x-3 items-center px-4 py-4 font-semibold text-sm ">
                  {" "}
                  <span>See more about me</span>
                  <img
                    src={arrow}
                    alt="view projects"
                    className="rotate-180 w-3"
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*  */}

        <section className="flex gap-x-4 items-stretch  ">
          {/* 🚨 clip notes  */}
          <section className="w-[40%] space-y-4">
            {clipNotes.map(({ skill, writeUp }, index) => {
              const isActive = active === index;
              return (
                <div
                  onClick={() => setActive(index)}
                  className={`bg-white w-full py-10 cursor-pointer`}
                >
                  <div className={` w-10/12 mx-auto space-y-3`}>
                    <h3
                      className={` font-semibold ${
                        isActive
                          ? "text-left text-[19.1px]"
                          : "text-center text-black-10 text-[19.4px]"
                      }`}
                    >
                      {skill}
                    </h3>

                    <p
                      className={` ${
                        isActive ? "block" : "hidden"
                      } text-black-300 text-base w-10/12 `}
                    >
                      {writeUp}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
          {/*  */}

          {/* 🚨 display section  */}
          <section className="bg-white w-[60%] flex items-center justify-center">
            <div className="w-10/12 h-[400px]  flex items-center justify-center">
              <img
                src={clipNotes[active].img}
                alt={clipNotes[active].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </section>

          {/*  */}
        </section>
      </section>
    </section>
  );
}
