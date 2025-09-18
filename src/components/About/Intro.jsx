

// 🚨 assets
import arrow from "@/assets/svg/left-arrow.svg";

import { Link } from "react-router-dom";
import { urlFor } from "@/utils";

export default function Intro({ services, about }) {
  let img1 = urlFor(about?.img1?.asset?._ref);
  let img2 = urlFor(about?.img2?.asset?._ref);
  let img3 = urlFor(about?.img3?.asset?._ref);
  let mainImg = urlFor(about?.mainImage?.asset?._ref);

  return (
    <section>
      {!about && <p>Loading...</p>}
      {about && (
        <section className="space-y-10">
          {/* 🚨 about  */}
          <section className="w-[95%] space-y-10 mx-auto">
            <div className=" [ lg:space-y-10 space-y-6 ]  text-black-400">
              <h1 className=" [ lg:text-[6rem] text-[32px] ]  [ lg:leading-24 leading-9 ] about-header lg:w-10/12">
                {about?.title}
              </h1>

              <hr />
            </div>

            <section className="flex-responsive justify-between  ">
              <section className="lg:w-[40%] [ lg:text-size20 text-base ] space-y-10 text-black-400">
                <div className="">
                  I'm habeeb, an experienced product designer who speaks fluent
                  Design and design with business goals at heart . In the last 4
                  years, I helped businesses in industries like Fintech, Oil
                  &Gas and Artificial intelligence(AI), turn blank pages into
                  bold identities and dull interfaces into delightful
                  experiences.
                </div>

                <div className="">
                  Whether it's a web Application, a sleek mobile application, or
                  a complete design system, I bring clarity, consistency, and a
                  bit of clever charm to the game.
                </div>

                <div className="">
                  But beyond pixels and color palettes, I care about people
                  especially users, team members and people who have my best
                  interest at heart.
                </div>

                <div>
                  I do always say this to people I work with <br />
                  <b>
                    “Great design isn't just how it looks, it's how it works,
                    and how it makes people feel”.
                  </b>
                </div>
              </section>

              <div className="[ lg:w-[40.3125rem] lg:h-[735px] ] ">
                <div className=" lg:h-[500px]  w-full">
                  <img
                    src={mainImg}
                    alt=""
                    className="rounded-4xl w-full  h-full object-cover"
                  />
                </div>
                <section className="grid grid-cols-3 gap-x-4 mt-4 h-[20%]">
                  <img src={img1} alt="" className="rounded-xl w-full  " />

                  <img src={img2} alt="" className="rounded-xl w-full  " />

                  <img src={img3} alt="" className="rounded-xl w-full" />
                </section>
              </div>
            </section>
          </section>

          {/*🚨 my service  */}
          <section className="[ lg:space-y-10 space-y-6 ]  lg:my-20">
            <div className="  [ lg:text-[4.5rem] text-[32px] ]">
              My superpowers
            </div>

            <section className="grid lg:grid-cols-3 gap-x-10 gap-y-10  ">
              {services &&
                services?.map(({ title, description, category }, index) => {
                  return (
                    <section key={title}>
                      <div className="space-y-6 text-black-200">
                        <h4>0{++index}</h4>

                        <hr />
                      </div>
                      <div className="mt-4">
                        <h1 className=" [ lg:text-[1.5rem]  text-base ] font-medium mb-4">
                          {title}
                        </h1>
                        <p className="text-black-400 w-[95%]">{description}</p>

                        <Link to={`/works?cat=${category}`}>
                          <div className="flex gap-x-3 items-center mt-4 font-semibold text-md">
                            <p className="">View projects </p>
                            <img
                              src={arrow}
                              alt="view projects"
                              className="rotate-180 w-3"
                            />
                          </div>
                        </Link>
                      </div>
                    </section>
                  );
                })}
            </section>
          </section>
          {/*  */}
        </section>
      )}
    </section>
  );
}
