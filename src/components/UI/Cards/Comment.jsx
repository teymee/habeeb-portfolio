import React from "react";

import quote from "@/assets/svg/quote.svg";
import linkedIn from "@/assets/svg/linkedIn.svg";
import { Link } from "react-router-dom";

export default function Comment({
  avatar,
  comment,
  name,
  position,
  company,
  link,
}) {
  return (
    <section className=" relative  rounded-xl bg-black-1000 [ lg:h-[530px] h-[430px] ]  [ lg:min-w-[423px]  min-w-[350px] ] ">
      <img src={quote} alt="" className="absolute top-10 right-10" />
      <section className=" wrapper pt-20 pb-8 flex flex-col h-full justify-between">
        <div className="text-black-50  w-10/12 font-medium [ lg:text-base text-sm ]">
          {comment}
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
              <p className="text-sm text-black-50">{position}</p>
            </div>
          </div>

          <Link target="_blank" to={link}>
            <img src={linkedIn} alt="open in linkedin " className="w-6" />
          </Link>
        </section>
      </section>
    </section>
  );
}
