import React from "react";

// 🚨 assets
import star from "@/assets/svg/star.svg";
import figma from "@/assets/svg/figma.svg";

export default function WorkExperience() {
  const skills = [
    "Design Thinking",
    "User Research",
    "User Interface Design",
    "Product Design",
    "Graphic Design",
    "Package Design",
    "No-code Dev",
    "Prototyping",
    "Printing",
    "Social media management",
  ];

  const obj = {
    img: figma,
    name: "Figma",
  };

  const tools = Array(4).fill(obj);
  return (
    <section
      className={`bg-black-700  py-10`}
    >
      <section className="wrapper bg-black-800 rounded-xl px-8 py-10 space-y-10">
        {/* 🚨 Experience  */}
        <section className="space-y-6">
          <h1 className="text-[3.375rem] text-white">
            {" "}
            <span className="font-thin">Work </span>Experience{" "}
          </h1>

          <section className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-green-100 font-light text-[1.5rem]">
                Product Designer at{" "}
                <span className="font-medium underline underline-offset-2">
                  Fuelmetrics Limited
                </span>
              </h4>
              <h5 className="text-black-2000 text-[1.25rem]">2022 - Present</h5>
            </div>

            <div className="space-y-4">
              <h4 className="text-green-100 font-light text-[1.5rem]">
                Senior product designer at{" "}
                <span className="font-medium underline underline-offset-2">
                  Veda AI{" "}
                </span>{" "}
                (Contract)
              </h4>
              <h5 className="text-black-2000 text-[1.25rem]">2025</h5>
            </div>

            <div className="space-y-4">
              <h4 className="text-green-100 font-light text-[1.5rem]">
                Product designer at{" "}
                <span className="font-medium underline underline-offset-2">
                  IFING MEDIA
                </span>{" "}
                (Contract){" "}
              </h4>
              <h5 className="text-black-2000 text-[1.25rem]">2022 - 2023</h5>
            </div>
          </section>
        </section>

        {/* 🚨 Skills  */}
        <section className="space-y-10">
          <h1 className="text-[3.375rem] text-white">
            {" "}
            <span className="font-thin">My </span> Skill sets
          </h1>
          <section className="space-y-16">
            {Array.from(
              { length: Math.ceil(skills.length / 3) },
              (_, i) => i * 3
            ).map((startIndex, rowIndex) => (
              <div key={startIndex} className="flex gap-x-8">
                {skills
                  .slice(startIndex, startIndex + 3)
                  .map((skill, index) => (
                    <div
                      key={skill}
                      className={`flex gap-x-4 items-center bg-black-400 rounded py-4 px-6 font-Manrope ${
                        index === 0 &&
                        rowIndex !== Math.ceil(skills.length / 3) - 1
                          ? "w-[350px]"
                          : "w-fit"
                      }`}
                    >
                      <img
                        src={star}
                        alt={skill}
                        className="w-[2rem] h-[2rem]"
                      />
                      <h1 className="text-white text-[30px] font-semibold">
                        {skill}
                      </h1>
                    </div>
                  ))}
              </div>
            ))}
          </section>
        </section>

        {/* 🚨 tools  */}

        <section className="space-y-10">
          <h1 className="text-[3.375rem] text-white">
            {" "}
            <span className="font-thin">My </span> Toolbox
          </h1>

          <section className="bg-black-3000 h-[100px] flex gap-x-4 justify-between">
            {tools.map(({ img, name }, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-x-2 items-center text-[2.125rem] text-white"
                >
                  <img src={img} alt="" />
                  <p>{name}</p>
                </div>
              );
            })}
          </section>
        </section>

        
      </section>
    </section>
  );
}
