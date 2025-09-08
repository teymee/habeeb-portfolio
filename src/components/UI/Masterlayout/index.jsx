import React, { useEffect, useRef, useState } from "react";
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
  const [isFooter, setIsFooter] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };
  const navRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navRef.current;
      const footer = footerRef.current;
      if (!navbar || !footer) return;
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Get footer position and dimensions
      const footerRect = footer.getBoundingClientRect();
      const footerTop = footerRect.top + currentScroll;

      // Get navbar height
      const navHeight = navbar.offsetHeight;

      // Get viewport height
      const viewportHeight = window.innerHeight;

      // Calculate the trigger point where navbar would overlap footer
      const triggerPoint = footerTop - viewportHeight + navHeight;
      if (currentScroll >= triggerPoint) {
        setIsFooter(true);
      } else {
        setIsFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

 
  return (
    <section className="relative h-full">
      {/* 🚨face  */}
      <section
        onClick={handleContactModal}
        className=" fixed [ lg:block hidden ] z-[999999999] bottom-30 right-10 cursor-pointer "
      >
        <section className="relative">
          <div className=" [animation-duration:12s] animate-spin absolute right-[60px] w-[120px]">
            <img src={text} alt="" />
          </div>
          <div className="relative bottom-[-25px] right-[85px] cursor-pointer  ">
            <img src={avatar} alt="" className=" [ lg:w-[4.3rem] ] " />
          </div>
        </section>
      </section>

      <section
        ref={navRef}
        style={{
          top: isFooter ? "1rem" : "calc(100vh - 2.5rem - 12%)",
        }}
        className={` transition-all duration-500 ease-in-out fixed w-full z-40`}
      >
        <Navbar />
      </section>
      <Outlet />
      <section ref={footerRef}>
        <Footer />
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
