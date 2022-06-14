import React, { forwardRef, useImperativeHandle, useRef } from "react";
import HeaderSection from "../components/pageCommonComponents/HeaderSection";
import SectionDivider from "../components/pageCommonComponents/SectionDivider";
import { usePageStartAnimation } from "./Page2.hooks";
import * as style from "./Page2.style";
import * as commonStyle from "./PageCommon.style";

const Page2 = forwardRef<HTMLTableSectionElement>((prop, ref) => {
  const startRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLTableSectionElement>(null);

  const anchorRefs = useRef<HTMLAnchorElement[]>([]);

  useImperativeHandle(ref, () => pageRef.current as HTMLTableSectionElement);
  usePageStartAnimation(pageRef, startRef, anchorRefs);

  return (
    <commonStyle.PageBox ref={pageRef}>
      <commonStyle.ContentsWrapper>
        <HeaderSection text="page 2" />

        <SectionDivider />
        <commonStyle.BodySection>
          <style.StartDiv ref={startRef}>
            <style.HyperLinkWrapper
              href="https://qhtjd2131.github.io/react_youtube_clone"
              target="_blank"
              rel="noopener noreferrer"
              left="0px"
              zIndex={900}
              ref={(el: HTMLAnchorElement) => (anchorRefs.current[0] = el)}
            >
              <style.ImageYoutubeDark
                src="https://user-images.githubusercontent.com/34260967/171848441-985edf96-242d-4bec-a164-a69f1606c27e.png"
                alt="youtube_dark"
              />
            </style.HyperLinkWrapper>

            {/* ------------------------------------------ */}

            <style.HyperLinkWrapper
              href="https://qhtjd2131.github.io/react_youtube_clone"
              target="_blank"
              rel="noopener noreferrer"
              left="100px"
              zIndex={899}
              ref={(el: HTMLAnchorElement) => (anchorRefs.current[1] = el)}
            >
              <style.ImageYoutubeLight
                src="https://user-images.githubusercontent.com/34260967/171859719-babd7d7c-d29f-41c5-ad11-1e7107605a07.png"
                alt="youtube_light"
              />
            </style.HyperLinkWrapper>

            {/* ------------------------------------------ */}

            <style.HyperLinkWrapper
              href="https://qhtjd2131.github.io/react_airbnb_clone/"
              target="_blank"
              rel="noopener noreferrer"
              left="200px"
              zIndex={898}
              ref={(el: HTMLAnchorElement) => (anchorRefs.current[2] = el)}
            >
              <style.ImageAirbnb
                src="https://user-images.githubusercontent.com/34260967/171860255-a8f680e8-b942-463d-b6a5-e22f849d0274.png"
                alt="image_airbnb"
              />
            </style.HyperLinkWrapper>

            <style.HyperLinkWrapper
              href="https://qhtjd2131.github.io/react_starbucks_clone"
              target="_blank"
              rel="noopener noreferrer"
              left="300px"
              zIndex={897}
              ref={(el: HTMLAnchorElement) => (anchorRefs.current[3] = el)}
            >
              <style.ImageStarBucks
                src="https://user-images.githubusercontent.com/34260967/171860874-c473b753-ad82-457c-bb2b-2786bb1ab0ce.png"
                alt="image_starbucks"
              />
            </style.HyperLinkWrapper>
          </style.StartDiv>
        </commonStyle.BodySection>
      </commonStyle.ContentsWrapper>
    </commonStyle.PageBox>
  );
});

export default Page2;
