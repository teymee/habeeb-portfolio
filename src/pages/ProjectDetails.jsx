import Loader from "@/components/Loader";
import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import { ProjectContext } from "@/context/ProjectContext";
import { sanityClient } from "@/sanity/client";
import { animateText, splitWords, urlFor } from "@/utils";
import { useGSAP } from "@gsap/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const { fetchProject, isLoading } = useContext(ProjectContext);

  const [details, setDetails] = useState(null);
  const [isDetailsLoading, setIsDetailsLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "projects" && _id == $id][0]`;
    const params = { id };
    fetchProject();
    setIsDetailsLoading(true);

    sanityClient
      .fetch(query, params)
      .then((data) => setDetails(data))
      .catch(console.error)
      .finally(() => {
        setTimeout(() => {
          setIsDetailsLoading(false);
        }, 1500);
      });
  }, [id]);

  useGSAP(() => {
    if (isDetailsLoading) return;

    const tags = {
      tag: splitWords(".tag"),
      name: splitWords(".name"),
    };

    const { tag, name } = tags;
    animateText(tag, ".tag");
    animateText(name, ".name");
  }, [isDetailsLoading]);

  return (
    <>
      {isDetailsLoading && <Loader />}

      {!isDetailsLoading && (
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
          {!isLoading && <Snippet details={details} />}
        </section>
      )}
    </>
  );
}
