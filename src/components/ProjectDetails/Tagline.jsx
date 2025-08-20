import React from "react";
import TagSection from "./TagSection";

// 🚨components=
// import ProjectSnippet from "@/components/UI/Cards/ProjectSnippet";


export default function Tagline({ details }) {
  const { problems, goals, target, role} = details ?? {};

  const problemsObj = {
    title: "Problems and pain points",
    subtitle: "Problems and pain points",
    excerpt: problems?.description,
    listArr: problems?.lists,
  };

  const goalsObj = {
    title: "Goals and Objectives",
    subtitle: "Goals and Objectives",
    excerpt: goals?.description,
    listArr: goals?.lists,
  };

  const targetObj = {
    title: "Target Audience",
    subtitle: "WHO ARE THE PRODUCT FOR",
    excerpt: target?.description,
    listArr: target?.lists,
  };

  const roleObj = {
    title: "My role",
    subtitle: "Role played",
    excerpt: role?.description,
    listArr: role?.lists,
  };

  return (
    <section className="">
      <section className="wrapper  [ lg:space-y-30 space-y-8 ] ">
        <TagSection {...problemsObj} />
        <TagSection {...goalsObj} />
        <TagSection {...targetObj} />
        <TagSection {...roleObj} />
      </section>
    </section>
  );
}
