import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import React from "react";

export default function ProjectDetails() {
  return (
    <section className="space-y-40">
      <ProjectIntro />
      <Tagline/>  
      <Snippet/>
    </section>
  );
}
