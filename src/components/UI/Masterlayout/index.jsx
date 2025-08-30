import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

// 🚨 assets
import avatar from "@/assets/svg/avatar.svg";
import text from "@/assets/svg/text.svg";

import contact from "@/assets/svg/inactive-contact.svg";

// 🚨 contact
import Contact from "./Contact";
import { Modal } from "antd";

export default function Masterlayout() {
  const { pathname } = useLocation();

  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <section className="relative h-full">
      {/* 🚨face  */}
      <section onClick={handleContactModal} className=" fixed [ lg:block hidden ] z-[999999999] bottom-30 right-10 cursor-pointer ">
        <section className="relative">
          <div className=" [animation-duration:12s] animate-spin absolute right-[60px] w-[120px]">
            <img src={text} alt="" />
          </div>
          <div className="relative bottom-[-25px] right-[85px] cursor-pointer  ">
            <img src={avatar} alt="" className=" [ lg:w-[4.3rem] ] " />
          </div>
        </section>
      </section>

      <section className="bottom-10 fixed w-full z-50">
        <Navbar />
      </section>
      <Outlet />
      <Footer />

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
