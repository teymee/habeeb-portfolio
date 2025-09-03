import { urlFor } from "@/utils";
import React from "react";

export default function ProjectSnippet({ image, name, year }) {
  let snippet = urlFor(image?.asset?._ref);
 
  return (
    <section className=" w-[426px] bg-white-600 rounded ">
      <section className="wrapper space-y-4 py-4">
        <div>
          <img src={snippet} alt="" className="w-full" />
        </div>
        <div className="flex justify-between items-center text-black-1000 text-sm font-semibold">
          <p>{name}</p>

          <p>{year}</p>
        </div>
      </section>
    </section>
  );
}
