import { sanityClient } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return source ? builder.image(source) : "";
}

export function trimText(text, num = 300) {
  if (!text) return "n/a";
  return text.length > num ? `${text?.slice(0, num)}...` : text;
}

export const textAnimation = {
  autoAlpha: 0,
  y: 50,
  duration: 1,
  ease: "power2",
  stagger: 0.1,
};
