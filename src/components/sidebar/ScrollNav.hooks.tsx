import { useEffect } from "react";
import * as constants from "../../constants";
import gsap from "gsap";
import theme from "../../style/theme";

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
    const refLen = refArr.current.length;
    refArr.current.forEach((ref, index) => {
      if (index != 0) {
        const startPosition = (1 / refLen) * 100 * index - 1 + "%";
        gsap.to(ref, {
          scrollTrigger: {
            trigger: document.body,
            start: `${startPosition} top`,
            toggleActions: "play pause reserve reset",
            markers : false,
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
      console.log("resize hook");

      const endPosition = 100 - (1 / constants.PAGE_COUNT) * 100 + "%";
      gsap.to(pathRef.current, {
        scrollTrigger: {
          id: "pathRef-controll",
          trigger: document.body,
          // start: () => "top top",
          // end: () => `${endPosition} top`, // page가 4개라서 75%임. 5개면 80%
          start: "top top",
          end: `${endPosition} top`, // page가 4개라서 75%임. 5개면 80%
          scrub: true,
          // invalidateOnRefresh: true,
          markers: false,
        },
        ease: "none",
        height: "100%",
      });
    }
  }, []);
};

//Refactoring 타임

// 반복되는 gsap 에니메이션 정의를 줄여보자

// side bar navigation 컴포넌트를 디자인하고 구현하자.

// 코드컨벤션에 맞춰서 구조를 짜보자.

//  페이지 수가 늘었을 때 변수 하나만 변경해도 적용되게 만들어 보자.

