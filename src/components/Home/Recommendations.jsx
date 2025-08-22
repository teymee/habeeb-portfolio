import React, { useEffect, useState } from "react";

// 🚨 assets
import Comment from "../UI/Cards/Comment";
import { sanityClient } from "@/sanity/client";

export default function Recommendations({ isRounded = true }) {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'recommendation']`)
      .then((data) => setComments(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);



  return (
    <section
      className={`bg-black-700 py-20 bg-[url(@/assets/svg/noise.svg)] ${
        isRounded ? "rounded-t-2xl " : undefined
      }`}
    >
      {error}
      <section className="wrapper space-y-10">
        <div>
          <h1 className="text-[2.5rem] text-black-500/20 font-semibold [ lg:leading-10 leading-10 ]  ">
            Don’t take my words <br /> for it.
          </h1>
        </div>

        <section className="overflow-x-scroll hide-scrollbar flex items-center gap-x-8 ">
          {!isLoading && comments?.map((comment, index) => {
            return <Comment {...comment} key={index} />;
          })}
        </section>
      </section>
    </section>
  );
}
