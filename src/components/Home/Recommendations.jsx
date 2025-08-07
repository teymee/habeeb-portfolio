import React from "react";

// 🚨 assets
import avatar from "@/assets/svg/olaitan.svg";
import Comment from "../UI/Cards/Comment";
export default function Recommendations({isRounded = true}) {
  const obj = {
    avatar,
    comment:
      "Working with Habeeb Abdullahi over the past three years has been truly Amazing. As a UI/UX designer, he consistently brings clarity, creativity, and purpose to every project. His design approach is thoughtful and user-centered, always keeping the bigger picture in mind.",
    name: "Akinlade Olaitan",
    company: "Fuelmetrics Inc",
    position: "Lead Product Designer",
  };
  const comments = Array(4).fill(obj);
  return (
    <section
      className={`bg-black-700 py-20 bg-[url(@/assets/svg/noise.svg)] ${
        isRounded ? "rounded-t-2xl " : undefined
      }`}
    >
      <section className="wrapper space-y-10">
        <div>
          <h1 className="text-[2.5rem] text-black-500 font-semibold ">
            Don’t take my words <br /> for it.
          </h1>
        </div>

        <section className="overflow-x-scroll hide-scrollbar flex items-center gap-x-8 ">
          {comments?.map((comment) => {
            return <Comment {...comment} />;
          })}
        </section>
      </section>
    </section>
  );
}
