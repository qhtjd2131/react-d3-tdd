import { useEffect } from "react";
import * as constants from "../../constants";
import { gsap } from "gsap";
import theme from "../../style/theme";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useSetNavLink = (
  refArr: React.MutableRefObject<HTMLAnchorElement[]>,
  pageRefs: React.MutableRefObject<HTMLElement[]>
) => {
  useEffect(() => {
    if (pageRefs.current === null) return;
    const clickHandlerArr = refArr.current.map((_, index) => {
      return (e: MouseEvent) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: index === 0 ? 0 : pageRefs.current[index - 1],
          duration: 0.5,
          ease: "power3.out",
          delay: 0,
        });
      };
    });

    refArr.current.forEach((ref, index) => {
      ref.addEventListener("click", clickHandlerArr[index]);
    });

    return () => {
      refArr.current.forEach((ref, index) => {
        ref.removeEventListener("click", clickHandlerArr[index]);
      });
    };
  }, []);
};

export const useSetLinkAnimation = (
  refArr: React.MutableRefObject<HTMLAnchorElement[]>
) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const refLen = refArr.current.length;
    refArr.current.forEach((ref, index) => {
      if (index != 0) {
        const startPosition = (1 / refLen) * 100 * index - 1 + "%";
        gsap.to(ref, {
          scrollTrigger: {
            trigger: document.body,
            start: `${startPosition} top`,
            toggleActions: "play pause reserve reset",
            markers: false,
          },
          color: theme.side_text_active_color,
        });
      }
    });
  }, []);
};

export const useSetPathAnimaition = (
  pathRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (pathRef != null) {
      gsap.registerPlugin(ScrollTrigger);

      const endPosition = 100 - (1 / constants.PAGE_COUNT) * 100 + "%";
      gsap.to(pathRef.current, {
        scrollTrigger: {
          id: "pathRef-controll",
          trigger: document.body,
          start: "top top",
          end: `${endPosition} top`, // page가 4개라서 75%임. 5개면 80%
          scrub: true,
          markers: false,
        },
        ease: "none",
        height: "100%",
      });
    }
  }, []);
};
