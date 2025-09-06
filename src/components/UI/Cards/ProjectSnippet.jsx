import { urlFor } from "@/utils";
import React from "react";

export default function ProjectSnippet({ image, name, year }) {
  let snippet = urlFor(image?.asset?._ref);

  return (
    <section className="[ lg:w-[426px] lg:h-[310px] ] [ w-[300px] h-[230px] ] bg-white-600 rounded ">
      <section className="wrapper  py-4">
        <div className="w-full [ lg:h-[250px] h-[180px] ]  m-auto">
          <img src={snippet} alt="" className="w-full h-full" />
        </div>
        <div className="flex justify-between items-center text-black-1000 text-sm font-semibold mt-2">
          <p>{name}</p>

          <p>{year}</p>
        </div>
      </section>
    </section>
  );
}
