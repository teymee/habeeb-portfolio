import React from "react";
import { Link, useLocation } from "react-router-dom";

// 🚨 assets
import arrowUp from "@/assets/svg/white-arrow.svg";
import insta from "@/assets/svg/instagram.svg";
import twitter from "@/assets/svg/twitter.svg";
import linkedIn from "@/assets/svg/linkedIn.svg";
export default function Footer() {
  const { pathname } = useLocation();
  return (
    <section
      className={`bg-black-700  py-20 bg-[url(@/assets/svg/noise.svg)] ${
        pathname !== "/" && "rounded-t-2xl"
      }`}
    >
      <section className="wrapper bg-black-800 rounded-xl space-y-10 py-10 flex flex-col justify-center">
        <div className="text-center text-[4.5rem] leading-20 text-white w-full">
          <h1 className="font-thin">Have amazing</h1>
          <h1 className="font-semibold">ideas?</h1>

          <Link to="/">
            <button className="w-fit mx-auto mt-10  border border-white rounded-full flex gap-x-2 px-4 py-4 text-base font-semibold text-white">
              <p>See an email</p>
              <img src={arrowUp} alt="" />
            </button>
          </Link>
        </div>

        <div className="border-b border-white-300 h-[100px] overflow-y-hidden">
          <h1 className="text-center text-[100px] text-white-300 opacity-70 font-semibold ">
            Habeeb Abdullahi.
          </h1>
        </div>

        <section className="w-fit mx-auto text-[32px] text-white font-thin flex items-center gap-x-8">
          <div className="w-fit px-8 py-4 flex gap-x-2 border rounded-full">
            <img src={insta} alt="" />
            <h1 className="underline ">Instagram</h1>
            <img src={arrowUp} alt="" />
          </div>

           <div className="w-fit px-8 py-4 flex gap-x-2 border rounded-full">
            <img src={twitter} alt="" />
            <h1 className="underline ">X</h1>
            <sup className="text-sm ">(twitter)</sup>
            <img src={arrowUp} alt="" />
          </div>

           <div className="w-fit px-8 py-4 flex gap-x-2 border rounded-full">
            <img src={linkedIn} alt="" className="w-[32px]" />
            <h1 className="underline ">LinkedIn</h1>
            <img src={arrowUp} alt="" />
          </div>
        </section>
      </section>
    </section>
  );
}
