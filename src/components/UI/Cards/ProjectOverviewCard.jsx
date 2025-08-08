import React from "react";

export default function ProjectOverviewCard({ app, logo, name, desc, tags }) {
  return (
    <section className="bg-black-600 border border-white-100 min-h-[90vh] rounded-4xl flex flex-col items-center justify-center py-10 space-y-8">
      <div className="flex flex-col justify-center items-center">
        <img src={app} alt="" />
        <img src={logo} alt="" className="w-[100px]" />
      </div>

      <div className="flex flex-col text-center justify-center items-center space-y-3 font-medium">
        <h1 className=" [ lg:text-[1.5rem] text-base ] font-semibold text-black-400">{name}</h1>
        <p className=" [ lg:w-1/2 w-[90%]  ] [ lg:text-base text-xs ] text-white-900 ">{desc}</p>

        <div className="flex justify-center uppercase [ lg:gap-x-4  gap-x-2  ]">
          {tags?.map((tag) => {
            return (
              <p
                key={tag}
                className="bg-black [ lg:text-sm text-[7px] ] text-white font-medium rounded-full px-4 py-2 w-fit"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
