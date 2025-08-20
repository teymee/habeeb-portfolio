import React, { useEffect, useState } from "react";

// 🚨components
import ProjectCard from "@/components/UI/Cards/ProjectCard";
import { sanityClient } from "@/sanity/client";
import { Link } from "react-router-dom";

export default function Work() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "projects"]{name, category, imagePreview,_id}`)
      .then((data) => setWorks(data))
      .catch(console.error);
  }, []);
  // const works = [
  //   {
  //     image: travel,
  //     name: "Mobile development",
  //   },
  //   {
  //     image: epump,
  //     name: "Mobile development",
  //   },
  //   {
  //     image: travel,
  //     name: "Mobile development",
  //   },
  //   {
  //     image: epump,
  //     name: "Mobile development",
  //   },
  // ];

  const navs = [
    {
      name: "All",
      num: 4,
    },

    {
      name: "Branding",
      num: 4,
    },

    {
      name: "Mobile App",
      num: 4,
    },

    {
      name: "Web app",
      num: 4,
    },
  ];

  return (
    <section className="wrapper py-10 ">
      <div className="[ lg:space-y-10 space-y-4 ] ">
        <h1 className=" [ lg:text-[6rem] text-[34px] ] [ lg:leading-24 leading-10 ] text-[#333333]   [ lg:w-[70%] w-[90%] ]">
          Creating next level digital products
        </h1>

        {/* 🚨 toggle buttons  */}
        <section className="[ lg:gap-x-4 gap-x-1 ] flex items-center">
          {navs.map(({ name, num }) => {
            return (
              <div
                key={name}
                className=" [ lg:py-4 py-2 ] [ lg:gap-x-2  px-3  ]  [ lg:w-[200px] ] lg:h-[80px] font-light border border-black-200 rounded-full"
              >
                <h1 className=" flex items-center h-full justify-center  [ lg:text-size20 text-[9px] ]">
                  {name} ({num})
                </h1>
              </div>
            );
          })}
        </section>
        {/*  */}
      </div>

      {/* 🚨 works  */}

      <section className="grid [ lg:grid-cols-2 grid-cols-1 ] [ lg:w-[80%] w-[95%] ]  mx-auto global-gap space-y-4">
        {works?.map((project, index) => {
          return (
            <div key={index} className=" even:lg:mt-20 odd:lg:mt-[-40px]">
              <Link to={`/project-details/${project?._id}`}>
                <ProjectCard {...project} />
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
}
