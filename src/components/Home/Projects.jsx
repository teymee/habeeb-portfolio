import React, { useContext, useEffect, useRef, useState } from "react";
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
import useWindowSize from "@/hooks/useWindowSize";

export default function Projects() {
  const { fetchProject, projects, isLoading } = useContext(ProjectContext);
  const [mounted, setMounted] = useState(false);

  const cardContainter = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    fetchProject();
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    cardsRef.current = [];
  }, [projects]);

  const { isLargeScreen } = useWindowSize();

  useGSAP(() => {
    if (!mounted || isLoading || !projects || projects.length === 0) return;
    const cards = cardsRef.current.filter(Boolean);

    // Kill all existing ScrollTriggers for this component
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars?.id?.startsWith?.("project-card-")) {
        trigger.kill();
      }
    });

    const animations = [];

    cards.forEach((card, i) => {
      if (!card || !card.parentNode) return;
      const animation = gsap.to(card, {
        scale: 0.8 + 0.2 * (i / cards?.length - 1),

        scrollTrigger: {
          trigger: card,
          start: `top ${15 + 35 * i}`,
          end: !isLargeScreen ? "bottom 70%" : "bottom bottom",
          endTrigger: ".project-container",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          invalidateOnRefresh: true,
          id: `project-card-${i}`,
          anticipatePin: !isLargeScreen ? 0 : 1, // Better mobile performance
          refreshPriority: !isLargeScreen ? -1 : 0, // Lower priority on mobile

          // trigger: card,
          // start: `top ${15 + 35 * i}`,
          // end: "bottom bottom",
          // endTrigger: ".project-container",
          // pin: true,
          // pinSpacing: false,
          // scrub: 1,
          // invalidateOnRefresh: true,
          // id: `project-card-${i}`, // Add unique identifier
          // onRefresh: () => {
          //   // Check if element still exists when refreshing
          //   if (!card.parentNode) {
          //     ScrollTrigger.getById(`card-${i}`)?.kill();
          //   }
          // },
          // markers: true,
        },
      });

      animations.push(animation);
    });
    return () => {
      animations.forEach((animation) => {
        if (animation && animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
      });
      ScrollTrigger.refresh();
    };
  }, [isLoading, projects]);

  // Add this cleanup on component unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.id?.startsWith?.("project-card-")) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="wrapper global-gap space-y-10 relative">
      {/* 🚨 header  */}
      <section className="justify-between font-thin flex items-center  selected-project">
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

      <section
        ref={cardContainter}
        className="project-container relative z-50 "
      >
        {!isLoading &&
          projects &&
          [...projects]?.slice(0, 3)?.map((pro, index) => {
            const { appLock, tag, cardOverview, industry, imagePreview, _id } =
              pro ?? {};
            const details = {
              app: urlFor(imagePreview?.asset?._ref),
              logo: appLock,
              name: tag,
              desc: cardOverview,
              tags: industry,
              id: _id,
            };
            return (
              <section
                key={`${tag}-${index}`}
                ref={(el) => {
                  if (el) {
                    cardsRef.current[index] = el;
                  }
                }}
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
