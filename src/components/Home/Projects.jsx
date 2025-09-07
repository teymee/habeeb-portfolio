import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// 🚨 assets
import arrowUp from "@/assets/svg/arrow-up.svg";

// 🚨components

import ProjectOverviewCard from "../UI/Cards/ProjectOverviewCard";
import { ProjectContext } from "@/context/ProjectContext";
import { urlFor } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Projects() {
  const { fetchProject, projects, isLoading } = useContext(ProjectContext);

  const cardContainter = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    fetchProject();
  }, []);

  useEffect(() => {
    cardsRef.current = [];
  }, [projects]);

  useGSAP(() => {
    if (isLoading || !projects) return;
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, i) => {
      gsap.to(card, {
        scale: 0.8 + 0.2 * (i / cards?.length - 1),
        scrollTrigger: {
          trigger: card,
          start: `top ${15 + 35 * i}`,
          end: "bottom bottom",
          endTrigger: ".project-container",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    });
  }, [isLoading]);

  return (
    <section className="wrapper global-gap space-y-10 relative">
      {/* 🚨 header  */}
      <section className="justify-between font-thin flex items-center">
        <h1 className="[ lg:text-[40px] text-[30px] ] lg:leading-12 text-black-200">
          Selected <br />
          <span className="font-bold"> Projects </span>
        </h1>

        <Link to="/works">
          <button className="w-fit border border-black-300 rounded-full flex gap-x-2 px-4 py-4 [ lg:text-base text-sm ] font-semibold text-black-300">
            <p>See all projects</p>
            <img src={arrowUp} alt="" />
          </button>
        </Link>
      </section>

      {/* 🚨 Project  */}

      <section ref={cardContainter} className="project-container relative z-50 ">
        {!isLoading &&
          projects &&
          [...projects]?.slice(0, 3)?.map((pro, index) => {
            const { appLock, tag, overview, industry, imagePreview, _id } =
              pro ?? {};
            const details = {
              app: urlFor(imagePreview?.asset?._ref),
              logo: appLock,
              name: tag,
              desc: overview,
              tags: industry,
              id: _id,
            };
            return (
              <section
                key={`${tag}-${index}`}
                ref={(el) => (cardsRef.current[index] = el)}
                className=" flex justify-between items-center project-card "
              >
                {/* <Link     to={`/project-details/${_id}`}> */}
                 <ProjectOverviewCard {...details} />
                {/* </Link> */}
               
              </section>
            );
          })}
      </section>

      {/*  */}
    </section>
  );
}
