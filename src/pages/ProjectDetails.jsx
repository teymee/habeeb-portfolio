import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import { sanityClient } from "@/sanity/client";
import { urlFor } from "@/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const query = `*[_type == "projects" && _id == $id][0]`;
    const params = { id };
    sanityClient
      .fetch(query, params)
      .then((data) => setDetails(data))
      .catch(console.error);
  }, [id]);

  return (
    <>
      {details && (
        <section className="space-y-40 overflow-x-hidden">
          <ProjectIntro details={details} />
          <Tagline details={details} />

          {/* extra images  */}
          {details?.extraImages?.length > 0 && (
            <section className=" w-11/12 mx-auto grid grid-cols-4 gap-x-5 pverflow-x-hidden gap-y-4 ">
              {details?.extraImages?.map((image) => {
                const finalImg = urlFor(image?.asset?._ref);
                return (
                  <div key={image?.asset?._ref} className="bg-white-600  py-4 px-4 rounded-xl flex items-center justify-center">
                    <img src={finalImg} className="h-[240px]" />
                  </div>
                );
              })}
            </section>
          )}
          {/*  */}
          <Snippet details={details} />
        </section>
      )}
    </>
  );
}
