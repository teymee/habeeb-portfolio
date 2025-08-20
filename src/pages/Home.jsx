import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Recommendations from "@/components/Home/Recommendations";
import Showcase from "@/components/Home/Showcase";
import { sanityClient } from "@/sanity/client";
import { useEffect, useState } from "react";

export default function Home() {
  //   const data = sanityClient.fetch(`count(*)`);
  // console.log(`Number of documents: ${data}`);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{title, slug}`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);


  console.log(posts, 'kkk')
  return (
    <section>
      <Hero />
      <Projects />
      <Showcase />
      <Recommendations />
    </section>
  );
}
