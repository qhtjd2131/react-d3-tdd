import gsap from "gsap";
import { useEffect, useState } from "react";

export const usePageStartAnimation = (
  pageRef: React.RefObject<HTMLTableSectionElement>,
  ref: React.RefObject<HTMLDivElement>,
  imageRefs: React.MutableRefObject<HTMLAnchorElement[]>
) => {
  useEffect(() => {
    const t: any = ref.current?.clientWidth;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "50% bottom",
          markers: true,
        },
      })
      .from(ref.current, {
        rotate: 180,
      })
      .from(ref.current, {
        width: "1%",
      })
      .from(imageRefs.current[0], {
        // width: "50%",
        autoAlpha: 0,
      })
      .from(imageRefs.current[1], {
        autoAlpha: 0,
      })
      .from(imageRefs.current[2], {
        autoAlpha: 0,
      })
      .from(imageRefs.current[3], {
        autoAlpha: 0,
      });
  }, []);
};
