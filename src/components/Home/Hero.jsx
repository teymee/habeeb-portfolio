import React, { useRef } from "react";

// 🚨 assets
import arrowUp from "@/assets/svg/arrow-up.svg";
import whiteArrow from "@/assets/svg/white-right-arrow.svg";

import avatar from "@/assets/svg/hero-avatar.svg";

// import bgImg from "@/assets/svg/hero-bg.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Hero() {
  const targetRef = useRef(null);
  // useGSAP(() => {
  //   if (!targetRef.current) return;

  //   const tl = gsap.timeline();

  //   const titleSplit = SplitText.create(".title", {
  //     type: "words",
  //   });
  //   const desc = SplitText.create(".desc", {
  //     type: "words",
  //     // linesClass: "line-overflow",
  //     // mask: "lines",
  //   });

  //   const aniStyle = {
  //     autoAlpha: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: "power2",
  //   };
  //   tl.from(".avatar", { opacity: 0, y: 100, duration: 1, ease: "power2" });
  //   tl.from(titleSplit.words, { ...aniStyle, stagger: 0.1 }, "-=0.3");
  //   tl.from(
  //     ".short-desc",
  //     {
  //       ...aniStyle,
  //     },
  //     "-=1"
  //   );

  //   tl.from(
  //     desc.words,
  //     {
  //       ...aniStyle,
  //       stagger: 0.1,
  //     },
  //     "-=1"
  //   );

  //   const animateText = (section, trigger) => {
  //     return gsap.from(section, {
  //       ...aniStyle,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger,
  //         start: "top center",
  //         end: "bottom center",
  //       },
  //     });
  //   };

  //   document.fonts.ready.then(() => {
  //     const splits = {
  //       title: SplitText.create(".title", {
  //         type: "words",
  //       }),

  //       nicheHI: SplitText.create(".niche h1", { type: "words" }).words,
  //       selectedProject: SplitText.create(".selected-project h1", {
  //         type: "words",
  //       }).words,
  //       projectShots: SplitText.create(".project-shots h1", {
  //         type: "words",
  //       }).words,
  //       taglineh1: SplitText.create(".tagline h1", {
  //         type: "words",
  //       }).words,
  //       taglineh2: SplitText.create(".tagline h2", {
  //         type: "words",
  //       }).words,
  //       commentTag: SplitText.create(".comment-tag h1", {
  //         type: "words",
  //       }).words,
  //       fadedText: SplitText.create(".faded-text h1", {
  //         type: "words",
  //       }).words,
  //       workHeader: SplitText.create(".work-header h1", {
  //         type: "words",
  //       }).words,
  //     };

  //     const {
  //       nicheHI,
  //       selectedProject,
  //       projectShots,
  //       taglineh1,
  //       taglineh2,
  //       commentTag,
  //       fadedText,
  //       workHeader,
  //     } = splits;
  //     animateText(nicheHI, ".niche");
  //     animateText(selectedProject, ".selected-project");
  //     animateText(projectShots, ".project-shots");
  //     animateText(taglineh1, ".tagline");
  //     animateText(taglineh2, ".tagline");
  //     animateText(commentTag, ".comment-tag");
  //     animateText(fadedText, ".tagline");
  //     animateText(workHeader, ".work-header");
  //   });
  // }, []);
  return (
    <section>
      {/* 🚨 Hero  */}
      <section
        ref={targetRef}
        className=" [ lg:h-screen h-[100vh] ]  hero  w-full bg-[url(@/assets/svg/hero-bg.svg)] bg-cover  space-y-4 [ lg:mt-[-10px] ]"
      >
        <section className="pt-10 items-center  flex flex-col justify-center h-full w-[90%] mx-auto">
          <section className="flex items-center gap-x-3 w-fit mb-4 py-2 rounded-full bg-black-600 px-4">
            <img
              src={avatar}
              alt="A profile picture of habeeb"
              className="[ w-[1.75rem] ]"
            />

            <p className="text-black-200 font-medium [ lg:text-base text-xs ]">
              Hi, it's Habeeb, Your product design expert!{" "}
            </p>
          </section>

          <section className="space-y-4 text-center intro">
            <h1 className=" [ text-[40px] lg:text-[72px] ] [ lg:leading-20 leading-12 ] font-bold font-public title">
              I help turn web & apps experiences <br /> into business success.
            </h1>
            <h2 className=" [ lg:text-size20 text-sm ] text-black-400 [  lg:w-[70%]  w-[90%] my-4 ]  mx-auto  short-desc">
              I've helped over 25+ founders across SaaS, AI, Fintech,
              e-Commerce, OilTech and more create web & apps that secure
              funding, convert users, and drive growth.
            </h2>

            <div className="flex gap-x-4 items-center w-fit mx-auto">
              <button className="border [ lg:flex hidden  ]  items-center gap-x-2 rounded-full py-4 px-6 border-black-300 font-medium text-black-300">
                <span> About me</span>
                <img src={arrowUp} alt="A link to the about page" />
              </button>

              <button className="border  flex items-center gap-x-2 rounded-full py-4 px-6 border-black font-medium text-white bg-black">
                <span> See projects</span>
                <img src={whiteArrow} alt="A link to the projects page" />
              </button>
            </div>
          </section>
        </section>
      </section>
      {/*  */}

 
    </section>
  );
}
