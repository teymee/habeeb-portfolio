// 🚨 components
import WorkExperience from "@/components/About/WorkExperience";
import Recommendations from "@/components/Home/Recommendations";
import Intro from "@/components/About/Intro";
import { useGSAP } from "@gsap/react";
import { animateText, splitWords } from "@/utils";

import React, { useEffect, useState } from "react";

import { sanityClient } from "@/sanity/client";
import Loader from "@/components/Loader";

export default function About() {
  const [services, setServices] = useState(null);
  const [about, setAbout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const query = `{
      "services":*[_type == "superPowers"  ],
      "about": *[_type == "about" ]
      }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setServices(data?.services);
        setAbout(data?.about?.[0]?.about);
      })
      .catch(console.error)
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  useGSAP(() => {
    if (isLoading) return;
    const tags = {
      header: splitWords(".about-header"),
    };

    const { header } = tags;
    animateText(header, ".about-header");
  }, [isLoading]);
  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <section>
          <section className="wrapper py-10 space-y-20 ">
            <Intro services={services} about={about} />
          </section>
          <WorkExperience />
          <Recommendations isRounded={false} />
        </section>
      )}
    </>
  );
}
