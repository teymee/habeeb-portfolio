import React from "react";

// 🚨 components
import WorkExperience from "@/components/About/WorkExperience";
import Recommendations from "@/components/Home/Recommendations";
import Intro from "@/components/About/Intro";

export default function About() {

  return (
    <section>
      <section className="wrapper py-10 space-y-20 ">

        <Intro/>
      
      </section>
      <WorkExperience />
      {/* Recommendations */}
      <Recommendations isRounded={false}/>
    </section>
  );
}
