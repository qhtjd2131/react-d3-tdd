import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useSetMainAnimation = (
  mainRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    if (mainRef.current != null) {
      gsap.to(mainRef.current, {
        scrollTrigger: {
          id: "background",
          trigger: mainRef.current,
          scrub: true,
          start: "bottom bottom",
          end: "top top",
          pin: true,
          pinSpacing: false,
        },
        // autoAlpha: 0,
      });
    }
  }, [mainRef]);
};

export const useSetMainTextAnimation = (
  textRefs: React.MutableRefObject<HTMLDivElement[]>
) => {
  const [property, setProperty] = useState({
    fontSize: "0px",
    left: 0,
  });
  let timeline: gsap.core.Timeline = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.inOut",
    },
  });

  useEffect(() => {
    timeline.clear();

    const positionYArr = [450, 500, 600];
    textRefs.current.forEach((ref, index) => {
      const gsapSet = gsap.set(ref, {
        // right: 0,
        y: positionYArr[index],
      });

      timeline.add(gsapSet);
    });

    textRefs.current.forEach((ref, index) => {
      const gsapTo = gsap.to(ref, {
        // left: property.left,
        opacity: 1,
        x: -100,
        duration: 1,
      });
      timeline.add(gsapTo, 0.2 * (index + 1));
    });
  }, [property]);
};
