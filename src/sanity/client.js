import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "qwax7ixz",
  dataset: "production",
  useCdn: false, // set to `false` to bypass the edge cache
 apiVersion: "2025-08-16", // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
});


