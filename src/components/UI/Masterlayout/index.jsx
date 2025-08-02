import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

// 🚨 assets
// import avatar from "@/assets/svg/avatar.svg";

export default function Masterlayout() {
//   const text = "Contact Me • Contact Me • Contact Me • ";
//   const chars = text.split("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <section className="relative h-full">
      <section className="bottom-10 fixed w-full z-50">
        <Navbar />
      </section>
      <Outlet />
      <Footer />
    </section>
  );
}

//    <section className="fixed z-50 bottom-0 right-0">
//         <div className="relative w-64 h-64 flex items-center justify-center">
//           {/* Circular text */}
//           <div className="absolute inset-0 " >
//             {chars.map((char, index) => (
//               <span
//                 key={index}
//                 className="absolute text-xs font-semibold text-black-200 origin-bottom"
//                 style={{
//                   transform: `rotate(${
//                     (index * 360) / chars.length
//                   }deg) translateY(-50px)`,
//                   left: "50%",
//                   top: "50%",
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>

//           {/* Center image */}
//           <div className=" z-10  absolute left-[38%] top-[42%]">
//              <img src={avatar} alt="" className="w-[70px] m-auto" />
//           </div>
//         </div>
//       </section>
