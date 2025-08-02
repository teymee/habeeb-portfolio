
import { Link, useLocation } from "react-router-dom";

// 🚨 assets
import work from "@/assets/svg/inactive-work.svg";
import contact from "@/assets/svg/inactive-contact.svg";
import cv from "@/assets/svg/inactive-cv.svg";
import about from "@/assets/svg/inactive-about.svg";

import aWork from "@/assets/svg/active-work.svg";
import home from "@/assets/svg/inactive-home.svg";
import aHome from "@/assets/svg/active-home.svg";

export default function Navbar() {
  const { pathname } = useLocation();

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
      link: "/work",
    },
    {
      activeIcon: about,
      icon: about,
      name: "About",
      link: "/about",
    },
    {
      activeIcon: cv,
      icon: cv,
      name: "Read CV",
      link: "/cv",
    },
    {
      activeIcon: contact,
      icon: contact,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav className="w-[40%] mx-auto rounded-full   shadow-lg bg-white-200">
      <section className="flex justify-between px-8 ">
        {navs.map(({ activeIcon, icon, name, link }) => {
          let isActive = pathname === link;
          return (
            <Link to={link} key={name} className="flex-1">
              <div
            //  first:rounded-bl-4xl
                className={` transition-all duration-150 flex flex-col items-center gap-y-2 font-medium py-6 mb-[-1px]    ${
                  isActive ? "text-green-100 border-b-4 border-green-100  " : "text-black-200"

                }`}
              >
                <img src={isActive ? activeIcon : icon} alt={name} />

                <p className="text-sm">{name}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </nav>
  );
}
