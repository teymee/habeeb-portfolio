import { useLocation, useNavigate } from "react-router-dom";

import { Modal } from "antd";
import { useState } from "react";

// 🚨 assets
import work from "@/assets/svg/inactive-work.svg";
import contact from "@/assets/svg/inactive-contact.svg";
import cv from "@/assets/svg/inactive-cv.svg";
import about from "@/assets/svg/inactive-about.svg";

import aWork from "@/assets/svg/active-work.svg";
import aContact from "@/assets/svg/active-contact.svg";
import aAbout from "@/assets/svg/active-about.svg";
import home from "@/assets/svg/inactive-home.svg";
import aHome from "@/assets/svg/active-home.svg";

// 🚨 components
import ReadCV from "./ReadCV";
import Contact from "./Contact";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();
  const openCV = () => {
    setIsModalOpen(true);
  };

  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navs = [
    {
      activeIcon: aHome,
      icon: home,
      name: "Home",
      link: "/",
    },
    {
      activeIcon: aWork,
      icon: work,
      name: "Work",
      link: "/works",
    },
    {
      activeIcon: aAbout,
      icon: about,
      name: "About me",
      link: "/about",
    },
    {
      activeIcon: cv,
      icon: cv,
      name: "Read CV",
      // link: "/cv",
    },
    {
      activeIcon: aContact,
      icon: contact,
      name: "Get in touch",
      // link: "/contact",
    },
  ];

  const handleNavigation = (link, name) => {
    if (name === "Read CV") {
      openCV();
    } else if (name === "Get in touch") {
      handleContactModal();
    } else {
      navigate(link);
    }
  };
  return (
    <nav className="[ lg:w-[40%] w-[90%] ] mx-auto rounded-full max-w-[1500px]  shadow-lg bg-white-200">
      <section className="flex justify-between [ lg:px-8 px-4 ] ">
        {navs.map(({ activeIcon, icon, name, link }) => {
          let isActive;
          if (name == "Work") {
            isActive =
              pathname === link || pathname.includes("project-details");
          } else {
            isActive = pathname === link;
          }

          return (
            <div
              key={name}
              //  first:rounded-bl-4xl
              className={` cursor-pointer transition-all lg:px-6 duration-150 flex flex-col items-center gap-y-2 font-medium mb-[-1px] [ lg:py-6  py-4 ]    ${
                isActive
                  ? "text-green-100 border-b-4 border-green-100  "
                  : "text-black-200"
              }`}
              onClick={() => handleNavigation(link, name)}
            >
              <img src={isActive ? activeIcon : icon} alt={name} />

              <p className="[ lg:text-sm text-[10px] ]">{name}</p>
            </div>
          );
        })}
      </section>



      {/* 🚨 Modal  */}

      <Modal
        title={null}
        closable={false}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <div className="flex items-center justify-between py-4 px-4 border-b border-gray-600">
          <img src={about} alt="icon" className="h-8" />

          <button
            onClick={handleCancel}
            aria-label="Close"
            className="text-3xl  cursor-pointer"
          >
            ×
          </button>
        </div>
        <ReadCV />
      </Modal>

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
    </nav>
  );
}
