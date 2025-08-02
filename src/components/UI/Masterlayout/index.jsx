import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Masterlayout() {
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
