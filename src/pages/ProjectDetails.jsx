import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import { sanityClient } from "@/sanity/client";
import { animateText, splitWords, urlFor } from "@/utils";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = `*[_type == "projects" && _id == $id][0]`;
    const params = { id };
    setIsLoading(true);
    sanityClient
      .fetch(query, params)
      .then((data) => setDetails(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id]);

  useGSAP(() => {
    if (isLoading) return;

    const tags = {
      tag: splitWords(".tag"),
      name: splitWords(".name"),
      
    };

    const { tag, name } = tags;
    animateText(tag, ".tag");
    animateText(name, ".name");
  }, [isLoading]);

  return (
    <>
      {!details && (
        <p className="text-center h-screen vertical-center "> Loading...</p>
      )}

      {details && (
        <section className="space-y-40 overflow-x-hidden">
          <ProjectIntro details={details} />
          <Tagline details={details} />

          {/* extra images  */}
          {details?.extraImages?.length > 0 && (
            <section className=" w-11/12 mx-auto grid  lg:grid-cols-4 gap-x-5 pverflow-x-hidden gap-y-4 ">
              {details?.extraImages?.map((image) => {
                const finalImg = urlFor(image?.asset?._ref);
                return (
                  <div
                    key={image?.asset?._ref}
                    className="bg-white-600  py-4 px-4 rounded-xl flex items-center justify-center"
                  >
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
