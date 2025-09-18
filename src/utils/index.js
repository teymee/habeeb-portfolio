import { sanityClient } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import gsap from "gsap";
import { SplitText } from "gsap/all";

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

export const animateText = (section, trigger) => {
  return gsap.from(section, {
    ...textAnimation,
    scrollTrigger: {
      trigger,
      marker: true,
      start: "top center",
      end: "bottom center",
    },
  });
};
export const splitWords = (tag, split) => {
  return SplitText.create(tag, { type: "words" })[split ?? 'words'];
};
