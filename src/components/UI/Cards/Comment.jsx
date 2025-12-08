import React from "react";

import quote from "@/assets/svg/quote.svg";
import linkedIn from "@/assets/svg/white-linkedin.svg";
import arrow from "@/assets/svg/white-arrow.svg"
import { urlFor } from "@/utils";

export default function Comment({
  image,
  text,
  name,
  role,
  company,
  link,
}) {
  const avatar = urlFor(image?.asset?._ref)
  return (
    <section className=" relative  rounded-xl bg-black-1000 [ lg:h-[530px] h-[430px] ]  [ lg:w-[420px]  w-[350px] ] ">
      <img src={quote} alt="" className="absolute top-10 right-4" />
      <section className=" wrapper pt-20 pb-8 flex flex-col h-full justify-between">
        <div className="text-black-2000 pl-4  w-11/12 font-medium [ lg:text-base text-sm ]">
          {text}
        </div>

        <section className="flex justify-between items-center">
          <div className="flex gap-x-4 items-center">
            <div>
              <img
                src={avatar}
                alt=""
                className="w-[2.875rem] h-[2.875rem] rounded-full"
              />
            </div>

            <div className="font-medium text-base">
              <p className=" text-white "> {name}</p>
              <p className="text-green-1000">{company}</p>
              <p className="text-sm text-black-50">{role}</p>
            </div>
          </div>

          <a href={link} target="_blank" className="flex items-center gap-x-1" >
            <img src={linkedIn} alt="open in linkedin " className="w-6" />
            <img src={arrow} alt="open in linkedin " className="w-6" />
          </a>
        </section>
      </section>
    </section>
  );
}
