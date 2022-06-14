import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useHeaderAnimation = (
  ref: React.RefObject<HTMLHeadingElement>
) => {
  useEffect(() => {
    //원래의 상태
    gsap.set(ref.current, {
      autoAlpha: 0,
    });
    //애니메이션으로 변경될 상태
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "bottom bottom",
        toggleActions: "play pause reserve reset",
      },
      duration: 1,
      delay: 0.2,
      autoAlpha: 1,
    });
  }, []);
};

// export const useDividerAnimation = (ref: React.RefObject<HTMLDivElement>) => {
//   useEffect(() => {
//     gsap.to(ref.current, {
//       scrollTrigger: {
//         trigger: ref.current,
//         start: "bottom bottom",
//         toggleActions: "play pause reserve reset",
//       },
//       duration: 1,
//       delay: 0.2,
//       autoAlpha: 1,
//       width: "100%",
//     });
//   }, []);
// };

export const useBodyTextAnimaition = (
  refArr: React.MutableRefObject<HTMLDivElement[]>
) => {
  useEffect(() => {
    refArr.current.forEach((ref, index) => {
      gsap.from(ref, {
        scrollTrigger: {
          trigger: ref,
          start: "bottom bottom",
          toggleActions: "play pause reserve reset",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);
};
