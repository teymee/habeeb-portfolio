import React from "react";

// 🚨 assets
import about from "@/assets/svg/about-img.svg";

export default function Intro() {
  const services = [
    {
      title: "Brand & graphics design",
      body: "With over three years of experience crafting intuitive user interfaces and smooth interactions, I excel at creating user-focused solutions that are not only visually",
    },
    {
      title: "Brand & graphics design",
      body: "With over three years of experience crafting intuitive user interfaces and smooth interactions, I excel at creating user-focused solutions that are not only visually",
    },
    {
      title: "Brand & graphics design",
      body: "With over three years of experience crafting intuitive user interfaces and smooth interactions, I excel at creating user-focused solutions that are not only visually",
    },
  ];
  return (
    <section>
      {/* 🚨 about  */}
      <section className="w-[95%] space-y-10 mx-auto">
        <div className="space-y-10  text-black-400">
          <h1 className="text-[6rem]  leading-24">
            I turn experiences into <br />
            business success.
          </h1>

          <hr />
        </div>

        <section className="flex justify-between ">
          <section className="w-[40%] text-[20px] space-y-10 text-black-400">
            <div className="">
              I’m habeeb, an experienced product designer who speaks fluent
              Design and design with business goals at heart . In the last 4
              years, I helped businesses in industries like Fintech, Oil &Gas
              and Artificial intelligence(AI), turn blank pages into bold
              identities and dull interfaces into delightful experiences.
            </div>

            <div className="">
              Whether it's a web Application, a sleek mobile application, or a
              complete design system, I bring clarity, consistency, and a bit of
              clever charm to the game.
            </div>

            <div className="">
              But beyond pixels and color palettes, I care about people
              especially users, team members and people who have my best
              interest at heart.
            </div>

            <div>
              I do always say this to people I work with <br />
              <b>
                “Great design isn’t just how it looks, it’s how it works, and
                how it makes people feel”.
              </b>
            </div>
          </section>

        
          <div className="w-[40.3125rem] h-[735px]">
            <img src={about} alt="" className="rounded-4xl w-full h-full" />
          </div>
        </section>
      </section>

      {/*🚨 my service  */}
      <section className="space-y-10">
        <div className="text-[72px]">My superpowers</div>

        <section className="grid grid-cols-3 gap-x-10 ">
          {services.map(({ title, body }, index) => {
            return (
              <section>
                <div className="space-y-6 text-black-200">
                  <h4>0{++index}</h4>

                  <hr />
                </div>
                <div className="mt-4">
                  <h1 className="text-[1.5rem] font-medium mb-4">{title}</h1>
                  <p className="text-black-400 w-[95%]">{body}</p>
                </div>
              </section>
            );
          })}
        </section>
      </section>
      {/*  */}
    </section>
  );
}
