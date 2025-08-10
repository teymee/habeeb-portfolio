import React from "react";
import TagSection from "./TagSection";


// 🚨components=
import ProjectSnippet from "@/components/UI/Cards/ProjectSnippet";

export default function Tagline() {
  const problemArr = Array(4).fill(
    "Many trips are in remote areas with poor internet and users need offline maps and saved routes."
  );

  const problems = {
    title: "Problems and pain points",
    subtitle: "Problems and pain points",
    excerpt:
      "As a product designer on the team, I collaborated closely with my design team, engineers, and stakeholders to bring the tank management system to life. My contributions spanned across the following key areas:",
    listArr: problemArr,
  };

  const goals = {
    title: "Goals and Objectives",
    subtitle: "Goals and Objectives",
    excerpt:
      "As a product designer on the team, I collaborated closely with my design team, engineers, and stakeholders to bring the tank management system to life. My contributions spanned across the following key areas:",
    listArr: problemArr,
  };

  const target = {
    title: "Target Audience",
    subtitle: "WHO ARE THE PRODUCT FOR",
    excerpt:
      "As a product designer on the team, I collaborated closely with my design team, engineers, and stakeholders to bring the tank management system to life. My contributions spanned across the following key areas:",
    listArr: problemArr,
  };

  const role = {
    title: "My role",
    subtitle: "Role played",
    excerpt:
      "As a product designer on the team, I collaborated closely with my design team, engineers, and stakeholders to bring the tank management system to life. My contributions spanned across the following key areas:",
    listArr: problemArr,
  };

 
  return (
    <section className="">
      <section className="wrapper  [ lg:space-y-30 space-y-8 ] ">
        <TagSection {...problems} />
        <TagSection {...goals} />
        <TagSection {...target} />
        <TagSection {...role} />
      </section>

     
    </section>
  );
}
