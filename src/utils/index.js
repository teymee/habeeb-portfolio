import { sanityClient } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return source ? builder.image(source) : '';
}