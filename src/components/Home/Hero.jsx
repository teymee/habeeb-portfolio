import React from "react";

// 🚨 assets
import avatar from "@/assets/svg/avatar.svg";
import fm from "@/assets/svg/fm.svg";
import tracker from "@/assets/svg/tracker.svg";
import epump from "@/assets/svg/epump.svg";
import media from "@/assets/svg/media.svg";
import veda from "@/assets/svg/veda.svg";
import ap from "@/assets/svg/ardova.svg";
import cloud from "@/assets/svg/cloud.svg";
import print from "@/assets/svg/print.svg";
// import bgImg from "@/assets/svg/hero-bg.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
      },
    });

    const titleSplit = SplitText.create(".title", {
      type: "words",
    });
    const desc = SplitText.create(".desc", {
      type: "lines",
      linesClass: "line-overflow",
      mask: "lines",
    });

    const aniStyle = {
      autoAlpha: 0,
      y: 50,
      duration: 1,
      ease: "power2",
    };
    tl.from(".avatar", { autoAlpha: 0, y: 50, duration: 1.5 });
    tl.from(titleSplit.words, { ...aniStyle, stagger: 0.1 }, "-=0.3");
    tl.from(
      ".short-desc",
      {
        ...aniStyle,
      },
      "-=1"
    );

    tl.from(
      desc.lines,
      {
        ...aniStyle,
        stagger: 0.1,
      },
      "-=1"
    );

    const splits = {
      title: SplitText.create(".title", {
        type: "words",
      }),

      nicheHI: SplitText.create(".niche h1", { type: "words" }).words,
      selectedProject: SplitText.create(".selected-project h1", {
        type: "words",
      }).words,
      projectShots: SplitText.create(".project-shots h1", {
        type: "words",
      }).words,
      taglineh1: SplitText.create(".tagline h1", {
        type: "words",
      }).words,
      taglineh2: SplitText.create(".tagline h2", {
        type: "words",
      }).words,
      commentTag: SplitText.create(".comment-tag h1", {
        type: "words",
      }).words,
      fadedText: SplitText.create(".faded-text h1", {
        type: "words",
      }).words,
         workHeader: SplitText.create(".faded-text h1", {
        type: "words",
      }).words,
    };

    const animateText = (section, trigger) => {
      return gsap.from(section, {
        ...aniStyle,
        stagger: 0.1,
        scrollTrigger: {
          trigger,
          start: "top center",
          end: "bottom center",
        },
      });
    };

    const {
      nicheHI,
      selectedProject,
      projectShots,
      taglineh1,
      taglineh2,
      commentTag,
      fadedText,
      workHeader
    } = splits;
    animateText(nicheHI, ".niche");
    animateText(selectedProject, ".selected-project");
    animateText(projectShots, ".project-shots");
    animateText(taglineh1, ".tagline");
    animateText(taglineh2, ".tagline");
    animateText(commentTag, ".comment-tag");
    animateText(fadedText, ".tagline");
    animateText(workHeader, ".work-header");
  }, []);
  return (
    <section>
      {/* 🚨 Hero  */}
      <section className="h-screen hero items-center w-full bg-[url(@/assets/svg/hero-bg.svg)] bg-cover flex flex-col justify-center space-y-4 [ lg:mt-[-10px] ]">
        <div className="flex justify-center avatar">
          <img src={avatar} alt="" className="[ lg:w-full w-[4.875rem] ]" />
        </div>

        <div className="space-y-4 text-center intro">
          <h1 className=" [ text-[45px] lg:text-[79px] ] font-medium title">
            Hi, I'm Habeeb
          </h1>
          <h4 className="text-size20  mt-[-20px] short-desc">
            A designer who makes ideas click.
          </h4>
          <p className="text-center text-black-300 mt-4 [ lg:w-full w-[90%] ] [ lg:text-lg text-base ] font-medium mx-auto desc">
            Helping businesses scale with design that speaks clearly, performs
            effortlessly, <br />
            and delivers measurable value.
          </p>
        </div>
      </section>
      {/*  */}

      {/* 🚨 Niche  */}
      <section className="wrapper global-gap space-y-4 niche">
        <h1 className="text-black-200 text-[32px] font-semibold [ lg:w-[40%] ] ">
          I've been in various{" "}
          <span className="text-black">niches and domains, working </span>
          with design:
        </h1>

        {/* 🚨 cards  */}
        <section className="grid justify-between [ lg:grid-cols-3 grid-cols-1 ] [ lg:gap-x-4 gap-y-4  ] text-black-50 text-base font-medium ">
          {/* one  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black">Payments</span>, Fintech, Fuel
              station Automation
            </p>

            <div className="flex gap-x-6">
              <img src={ap} alt="" />
              <img src={fm} alt="" />
              <img src={tracker} alt="" />

              <img src={epump} alt="" />
            </div>
          </div>

          {/* two  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black"> Islamic Financing</span>, Broadcast
              Media Production and Distribution
            </p>

            <div className="flex gap-x-10">
              <img src={media} alt="" />
              <img src={cloud} alt="" />
              <img src={print} alt="" />
            </div>
          </div>

          {/* three  */}
          <div className="bg-black-600 rounded-2xl py-4 px-6 space-y-4">
            <p>
              <span className="text-black"> Custom software development</span>,,
              A.I software solutions
            </p>

            <div className="flex gap-x-10">
              <img src={veda} alt="" />
            </div>
          </div>
        </section>
      </section>
      {/*  */}
    </section>
  );
}
