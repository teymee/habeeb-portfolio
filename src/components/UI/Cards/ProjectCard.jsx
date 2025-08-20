import { urlFor } from "@/utils";
import React from "react";

export default function ProjectCard({ imagePreview, name}) {
  const image = urlFor(imagePreview?.asset?._ref)
  return (
    <section className="space-y-4 lg:mt-20">
      <div className=" [ w-full h-[408px] lg:w-[450px] lg:h-[450px] ]  [ lg:rounded-4xl rounded-2xl ] bg-gray-1000">
        <div className="row-center w-full">
          <img src={image} alt="" className=" w-[90%] h-[80%] m-auto" />
        </div>
      </div>
      <h4 className="lg:text-size20 font-semibold [ lg:text-left text-center ]">{name}</h4>
    </section>
  );
}
