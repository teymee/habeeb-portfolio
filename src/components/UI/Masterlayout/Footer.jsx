import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// 🚨 assets
import arrowUp from "@/assets/svg/white-arrow.svg";
import insta from "@/assets/svg/instagram.svg";
import twitter from "@/assets/svg/twitter.svg";
import linkedIn from "@/assets/svg/linkedIn.svg";

import contact from "@/assets/svg/inactive-contact.svg";
import Contact from "./Contact";
import { Modal } from "antd";
export default function Footer() {
  const { pathname } = useLocation();

  const applyRadius = pathname !== "/" || pathname !== "/about";

  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  return (
    <section
      className={`bg-black-700 footer py-20 bg-[url(@/assets/svg/noise.svg)] ${
        !applyRadius ? "rounded-t-2xl" : undefined
      }`}
    >
      <section className="wrapper bg-black-800 rounded-xl space-y-10 py-10 flex flex-col justify-center">
        <div className="text-center tagline   text-white w-full [ lg:text-[72px] text-[40px] ] [ lg:leading-20 leading-13 ]">
          <h1 className="font-thin">Let's create something amazing</h1>
          <h2 className="font-semibold">together!</h2>

          <button
            onClick={handleContactModal}
            className="w-fit mx-auto  cursor-pointer   border border-white rounded-full flex gap-x-2 text-base font-semibold text-white [ lg:mt-10 mt-5 ] [ px-4 lg:py-4  py-3 ]"
          >
            <p>Get in touch</p>
            <img src={arrowUp} alt="" />
          </button>
        </div>

        <div className="border-b border-white-300  overflow-y-hidden  [ lg:h-[100px] h-[37px] ] faded-text ">
          <h1 className="text-center  text-white-300 opacity-70 font-semibold  [ lg:text-[100px] text-[38px] ] ">
            Habeeb Abdullahi.
          </h1>
        </div>

        <section className="w-fit lg:mx-auto text-[32px] text-white font-thin flex  gap-x-8 [ lg:flex-row flex-col ] [ lg:items-center items-start ] ">
          <a
            href="https://www.instagram.com/made.by.habscreative/"
            target="_blank"
            className="w-fit px-8 py-4 flex gap-x-2 lg:border rounded-full"
          >
            <img src={insta} alt="" />
            <h1 className="underline ">Instagram</h1>
            <img src={arrowUp} alt="" />
          </a>

          <a
            href="https://x.com/habib_oluwaseun"
            target="_blank"
            className="w-fit px-8 py-4 flex gap-x-2 lg:border rounded-full"
          >
            <img src={twitter} alt="" />
            <h1 className="underline ">X</h1>
            <sup className="text-sm ">(twitter)</sup>
            <img src={arrowUp} alt="" />
          </a>

          <a
            href="https://www.linkedin.com/in/habeeb-abdullahi/"
            target="_blank"
            className="w-fit px-8 py-4 flex gap-x-2 lg:border rounded-full"
          >
            <img src={linkedIn} alt="" className="w-[32px]" />
            <h1 className="underline ">LinkedIn</h1>
            <img src={arrowUp} alt="" />
          </a>
        </section>
      </section>

      {/* 🚨 contact modal  */}

      <Modal
        title={null}
        closable={false}
        open={isContactOpen}
        onCancel={handleContactModal}
        footer={false}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
        style={{ top: 30 }}
      >
        <div className="flex items-center justify-between py-4 px-4 border-b border-gray-600">
          <img src={contact} alt="icon" className="h-8" />

          <button
            onClick={handleContactModal}
            aria-label="Close"
            className="text-3xl  cursor-pointer"
          >
            ×
          </button>
        </div>
        <Contact />
      </Modal>
      {/*  */}
    </section>
  );
}
