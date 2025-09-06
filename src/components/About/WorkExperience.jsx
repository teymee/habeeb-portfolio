import React, { useEffect, useState } from "react";

// 🚨 assets
// import star from "@/assets/svg/star.svg";
// import figma from "@/assets/svg/figma.svg";
import { sanityClient } from "@/sanity/client";
import { urlFor } from "@/utils";
import useWindowSize from "@/hooks/useWindowSize";

export default function WorkExperience() {
  const [experiences, setExperiences] = useState(null);
  const [skills, setSkills] = useState(null);
  const [tools, setTools] = useState(null);

  const {isLargeScreen} = useWindowSize()

  console.log(isLargeScreen, 'mmm')

  useEffect(() => {
    const query = `{
    "experiences": *[_type == "experienceType"],
    "skills": *[_type == "mySkills"],
    "tools": *[_type == "myTools"]
    }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setExperiences(data?.experiences);
        setSkills(data?.skills?.[0]?.skills?.filter(Boolean));
        setTools(data?.tools?.[0]?.tools);
      })
      .catch(console.error);
  }, []);

  return (
    <section className={`bg-black-700  py-10`}>
      <section className="wrapper bg-black-800 rounded-xl px-8 py-10 space-y-20">
        {/* 🚨 Experience  */}
        <section className="space-y-6">
          <h1 className=" [ lg:text-[54px] text-[2.5rem] ] text-white">
            {" "}
            <span className="font-thin">Work </span>Experience{" "}
          </h1>

          <section className="space-y-6 mt-10">
            {experiences &&
              experiences?.map(({ timeline, companyDetails, description }) => {
                const { name, location, role, link } = companyDetails ?? {};
                return (
                  <section
                    key={name}
                    className="flex [ lg:flex-row flex-col ] pt-8 [ lg:gap-y-0 gap-y-10 ] justify-between border-b border-white/8 pb-18 px-4 text-white"
                  >
                    <div>
                      <p className="text-2xl">{timeline}</p>
                    </div>

                    <div className="">
                      <a
                        href={link}
                        className="font-medium underline underline-offset-10 text-2xl"
                      >
                        {name}
                      </a>

                      <div className="text-white/50">
                        <p className="text-sm my-4">{location}</p>
                        <p>{role}</p>
                      </div>
                    </div>

                    <div className="lg:w-[30%]">
                      <p className="text-base">{description}</p>
                    </div>
                  </section>
                );
              })}
          </section>
        </section>

        {/* 🚨 Skills  */}
        <section className="space-y-10">
          <h1 className=" [ lg:text-[54px] text-[2.5rem] ] text-white">
            {" "}
            <span className="font-thin">My </span> Skill sets
          </h1>
          <section className="[ lg:space-y-16 space-y-6 ]">
            <div className="flex-responsive flex-wrap gap-x-8">
              {skills?.map((skill) => (
                <section className="" key={skill}>
                  <div className="w-[80%] h-[1px] border-linear mx-auto mb-[-0.2px]"></div>

                  <div
                    key={skill}
                    className={` skill-bg flex gap-x-4 items-center rounded-2xl border border-[#ffffff10]  py-4 px-6 font-Manrope `}
                  >
                    <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                    <h1 className="text-white [ lg:text-[24px] text-base ] font-semibold">
                      {skill}
                    </h1>
                  </div>
                </section>
              ))}
            </div>
          </section>
        </section>

        {/* 🚨 tools  */}

        <section className="space-y-10">
          <h1 className="[ lg:text-[54px] text-[2.5rem] ] text-white">
            {" "}
            <span className="font-thin">My </span> Toolbox
          </h1>

          <section className="lg:bg-black-3000 lg:h-[100px] w-full ">
            <section className="overflow-hidden">
              <section
                className={`flex-responsive gap-x-10  [ lg:w-fit w-full  ] tools-carousel`}
              >
                {tools &&
                  [...tools, ...tools]?.map(({ image, name }, index) => {
                    const img = urlFor(image?.asset?._ref);
                    return (
                      <div
                        key={index}
                        className="flex flex-shrink-0 gap-x-2 items-center [ lg:text-[2.125rem] text-base ] text-white [ lg:bg-transparent bg-black-400 rounded py-4 px-6 ] [ lg:min-w-max w-full  ]"
                      >
                        <img
                          src={img}
                          alt=""
                          className="[ lg:w-[50px] w-[32px] ]"
                        />
                        <p className="whitespace-nowrap">{name}</p>
                      </div>
                    );
                  })}
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
