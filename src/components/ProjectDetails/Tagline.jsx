import React from "react";
import TagSection from "./TagSection";

export default function Tagline() {
  const problemArr = Array(4).fill(
    "Many trips are in remote areas with poor internet and users need offline maps and saved routes."
  );

  const problems = {
    title: "Problems and pain points",
    subtitle: "Problems and pain points",
    listArr: problemArr,
  };

  const goals = {
    title: "Goals and Objectives",
    subtitle: "Goals and Objectives",
    listArr: problemArr,
  };

  const target = {
    title: "Target Audience",
    subtitle: "WHO ARE THE PRODUCT FOR",
    listArr: problemArr,
  };
  return (
    <section>
      <section className="wrapper py-10 space-y-30 ">
    

        <TagSection {...problems} />
        <TagSection {...goals} />
        <TagSection {...target} />
      </section>
    </section>
  );
}
