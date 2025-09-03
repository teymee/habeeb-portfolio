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




 

  useGSAP(() => {
    if (isLoading ) return;
    const cards = gsap.utils.toArray(".project-card");

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
          markers: true,
        },
      });
    });
  }, [isLoading]);

  //   useGSAP(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const cards = gsap.utils.toArray(".project-card");
  //     if (!cards.length) return;

  //     cards.forEach((card, i) => {
  //       const totalCards = cards.length;
  //       const baseScale = 1 - (totalCards - i - 1) * 0.05; // smaller for earlier cards
  //       const baseOffset = (totalCards - i - 1) * 40; // push earlier cards further back

  //       // Set initial stacked state
  //       gsap.set(card, {
  //         zIndex: i,
  //         scale: baseScale,
  //         y: baseOffset,
  //         transformOrigin: "center top",
  //       });

  //    ScrollTrigger.create({
  //   trigger: card,
  //   start: "top top",
  //   end: `+=${window.innerHeight}`,
  //   pin: true,
  //   pinSpacing: false, // important: prevents layout gaps
  //   scrub: 1,
  //   onUpdate: (self) => {
  //     const progress = self.progress;

  //     gsap.to(card, {
  //       scale: baseScale * (1 - progress * 0.1),
  //       y: baseOffset - progress * 100,
  //       overwrite: "auto",
  //       ease: "none",
  //     });
  //   },
  //   onLeave: () => {
  //     // lock it into its final stacked place
  //     gsap.set(card, {
  //       position: "absolute", // 👈 keeps it visible instead of disappearing
  //       top: 0,
  //       left: 0,
  //       right: 0,
  //       margin: "0 auto",
  //       scale: baseScale,
  //       y: baseOffset,
  //       zIndex: i, // stays in the deck
  //     });
  //   },
  // });

  //     });
  //   }, []);

  // useGSAP(() => {
  //   if (isLoading) return;
  //   const cards = gsap.utils.toArray(".project-card");
  //   console.log(cards, "here");

  //   // gsap.to(".square",{
  //   //   x: 100,
  //   //   scrollTrigger: {
  //   //     trigger: ".square",
  //   //     start: "top center",
  //   //     bottom: "bottom top",
  //   //     pin:true,
  //   //     markers: true,
  //   //   },
  //   // });
  //   if (cards?.length < 1) return;

  //   cards.forEach((card, i) => {
  //     gsap.to(card, {
  //       scale: 0.9,
  //       scrollTrigger: {
  //         trigger: card,
  //         pin: true,
  //         scrub: true,
  //         start: `top top`,
  //         end: `bottom top `,
  //         markers: true,
  //         onUpdate: (self) => {
  //           const { progress } = self ?? {};
  //           const currentY = progress * -5;

  //           gsap.set(card, {
  //             y: currentY,
  //           });

  //           cards.splice(i, cards.length).forEach((nextCard, nextIndex) => {
  //             gsap.to(nextCard, {
  //               y: -600,
  //               zIndex: 10 * (i * 5),
  //             });
  //           });
  //         },
  //         onLeave: ()=>{
  //           gsap.set(card,{
  //             y:0,
  //             background: "red",
  //           })
  //         }
  //       },
  //     });

  //     // cards.splice(i, cards.length).forEach((nextCard, nextIndex) => {
  //     //   gsap.to(nextCard, {
  //     //     y: 10 * (nextIndex * 5),
  //     //   });
  //     // });
  //   });
  // }, [isLoading]);

  return (
    <section className="wrapper global-gap space-y-10 relative">
      {/* 🚨 header  */}
      <section className="justify-between font-thin flex items-center">
        <h1 className="[ lg:text-[40px] text-[30px]  ] lg:leading-12 text-black-200">
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

      {/* <section>
        <div className="cont">
          <div className="square h-10 w-10 bg-red-500"></div>
        </div>
      </section> */}

      {/* 🚨 Project  */}

      <section ref={cardContainter} className="project-container">
        {!isLoading &&
          projects?.splice(0, 3)?.map((pro, index) => {
            const { appLock, tag, overview, industry, imagePreview } =
              pro ?? {};
            const details = {
              app: urlFor(imagePreview?.asset?._ref),
              logo: appLock,
              name: tag,
              desc: overview,
              tags: industry,
            };
            return (
              <section
                key={`${tag}-${index}`}
                ref={(el) => (cardsRef.current[index] = el)}
                className=" flex justify-between items-center project-card "
              >
                <ProjectOverviewCard {...details} />
              </section>
            );
          })}
      </section>

      {/*  */}
    </section>
  );
}
