import React, { useEffect, useState } from "react";

// import epump from "@/assets/svg/epump-snip.svg";
import ProjectSnippet from "../UI/Cards/ProjectSnippet";
import { sanityClient } from "@/sanity/client";

export default function Showcase() {
  const [isLoading, setisLoading] = useState(false);
  const [shots, setShots] = useState(null);

  useEffect(() => {
    setisLoading(true);
    const query = `*[_type == "showcase" ]`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setShots(data);
        setisLoading(false);
      })
      .catch(console.error);
  }, []);

  // const obj = {
  //   snippet: epump,
  //   name: "Epump",
  //   year: "2025",
  // };

  let top, bottom;
  if (shots && !isLoading) {
    let images = [...shots];
    let half = Math.floor(images.length / 2);
    top = images.splice(0, half);
    bottom = images;
  }

  return (
    <section className="">
      {/* 🚨 header  */}
      <section className="wrapper justify-between flex items-center">
        <h1 className=" [ lg:text-[2.5rem] text-[2rem] ] leading-12 font-thin text-black-200">
          Shots from many other
          <br />
          <span className="font-bold"> Projects </span>
        </h1>
      </section>

      {/* 🚨showcase  */}
      {!isLoading && top?.length > 0 && (
        <section className="space-y-4 py-10 w-full">
          {/* 🚨top */}
          <section className="w-full">
            <section className="overflow-hidden">
              <section className="top-carousel w-fit flex [ lg:gap-x-10 gap-x-4 ] ">
                {[...top, ...top].map((data, index) => {
                  let item = data?.shots;

                  return <ProjectSnippet key={index} {...item} />;
                })}
              </section>
            </section>
          </section>
          {/*  */}

          {/* 🚨bottom */}
          <section className="justify-center w-full">
            <section className="overflow-hidden">
              <section className="bottom-carousel w-fit flex [ lg:gap-x-16 gap-x-8 ] ">
                {[...bottom, ...bottom].map((data, index) => {
                  let item = data?.shots;
                  return <ProjectSnippet key={index} {...item} />;
                })}
              </section>
            </section>
          </section>
          {/*  */}
        </section>
      )}
    </section>
  );
}
