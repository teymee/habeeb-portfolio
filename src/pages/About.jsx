import React from "react";

// 🚨 assets
import about from "@/assets/svg/about-img.svg";

export default function About() {
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
    <section className="wrapper py-10 space-y-20 ">
      {/* 🚨 about  */}
      <section className="w-[95%] space-y-10 mx-auto">
        <div className="space-y-10  text-black-900">
          <h1 className="text-[6rem]  leading-24">
            I turn experiences into <br />
            business success.
          </h1>

          <hr />
        </div>

        <section className="flex justify-between ">
          <div className="w-[40%] text-[20px]">
            With over three years of experience crafting intuitive user
            interfaces and smooth interactions, I excel at creating user-focused
            solutions that are not only visually appealing but also function
            flawlessly. From financial technology to Ecommerce, as a seasoned
            Product Designer, I've had the opportunity to work on projects that
            address genuine challenges in dynamic and demanding settings like
            <b> NNPC</b> and <b>Ardova</b>
          </div>

          <div className="w-[40.3125rem] h-[735px]">
            <img src={about} alt="" className="rounded-4xl w-full h-full" />
          </div>
        </section>
      </section>

      {/*🚨 my service  */}
      <section className="space-y-10">
        <div className="text-[72px]">I can help you with</div>

        <section className="grid grid-cols-3 gap-x-10 ">
          {services.map(({title,body}, index) => {
            return (
              <section>
                <div className="space-y-6 text-black-200">
                  <h4>0{++index}</h4>

                  <hr />
                </div>
                <div className="mt-4">
                    <h1 className="text-[1.5rem] font-medium mb-4">{title}</h1>
                    <p className="text-black-900 w-[95%]">{body}</p>
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
