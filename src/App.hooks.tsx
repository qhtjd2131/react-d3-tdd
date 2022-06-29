import { useEffect } from "react";
import gsap from "gsap";

export const useSetAppAnimation = (
  refArr: React.MutableRefObject<HTMLTableSectionElement[]>
) => {
  useEffect(() => {


    refArr.current.forEach((ref,index)=>{
        gsap.to(ref, {
            scrollTrigger : {
                trigger: ref,
                start: "top top",
                pinSpacing: false,
            },
        })
    })
  }, []);
};
