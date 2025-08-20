import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import { sanityClient } from "@/sanity/client";
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
        <section className="space-y-40">
          <ProjectIntro details={details} />
          <Tagline details={details}  />
          <Snippet details={details} />
        </section>
      )}
    </>
  );
}
