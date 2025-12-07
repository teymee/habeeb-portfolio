import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import Meetme from "@/components/Home/Meetme";
import MyProjects from "@/components/Home/MyProjects";
import Projects from "@/components/Home/Projects";
import Recommendations from "@/components/Home/Recommendations";
import Showcase from "@/components/Home/Showcase";
import Superpowers from "@/components/Home/Superpowers";
import Loader from "@/components/Loader";
import { ProjectContext } from "@/context/ProjectContext";
import { sanityClient } from "@/sanity/client";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { fetchProject, isLoading } = useContext(ProjectContext);

  const [clientList, setClientList] = useState(null);
  const [clientLoader, setClientLoader] = useState(false);

  useEffect(() => {
    fetchProject();
  }, []);

  useEffect(() => {
    setClientLoader(true);
    const query = `{
     "clients": *[_type == "clients"]
     }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        //  setTools(data?.tools?.[0]?.tools);

        setClientList(data?.clients?.[0]?.clientList);
      })
      .catch(console.error)
      .finally(() => setClientLoader(false));
  }, []);
  console.log(clientList);
  return (
    <section>
      {isLoading && clientLoader && <Loader />}
      {!isLoading && (
        <section className="">
          <Hero />
          <Superpowers />
          <Clients clientList={clientList} />
          <MyProjects />
          <Meetme />
          <Recommendations />
          <Showcase />

          {/* <Projects /> */}
        </section>
      )}
    </section>
  );
}
