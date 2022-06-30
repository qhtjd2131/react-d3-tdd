import React, { useEffect, useRef } from "react";
import * as style from "./App.style";
import { useCustomHeight } from "./hooks/useCustomHeight";
import Main from "./pages/Main";
import SideBar from "./components/sidebar/SideBar";
import { getPageContents } from "./pageInfo";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useCustomHeight();

  const appRef = useRef(null);
  const pageRefs = useRef<HTMLTableSectionElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const pageContents: JSX.Element[] = getPageContents(pageRefs);

  return (
    <style.GlobalWrapper ref={appRef}>
      <Main data-testid="main-com" />
      <SideBar pageRefs={pageRefs} />

      {pageContents}
    </style.GlobalWrapper>
  );
};

export default App;
