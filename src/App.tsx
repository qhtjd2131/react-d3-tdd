import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import React, { useEffect, useRef } from "react";
import * as style from "./App.style"
import { useCustomHeight } from "./hooks/useCustomHeight";
import Main from "./pages/Main";
import * as constants from "./constants";
import { useSetAppAnimation } from "./App.hooks";
import SideBar from "./components/sidebar/SideBar";
import { getPageContents } from "./pageInfo";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const App = () => {
  useCustomHeight();

  const appRef = useRef(null);
  const pageRefs = useRef<HTMLTableSectionElement[]>([]);

  useSetAppAnimation(pageRefs);

  const pageContents : JSX.Element[] = getPageContents(pageRefs);


  return (
    <style.GlobalWrapper ref={appRef}>
      <Main data-testid="main-com"/>
      <SideBar pageRefs={pageRefs} />

      {pageContents}
    </style.GlobalWrapper>
  );
};

export default App;

// ,
//   "jest": {
//     "transform": {
//       "^.+\\.(js|jsx)?$": "babel-jest",
//       "^.+\\.(ts|tsx)$": "ts-jest"
//     },
//     "transformIgnorePatterns": [
//       "node_modules/(?!gsap/.*)"
//     ],
//     "testEnvironment": "jsdom",
//     "testMatch": [
//       "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
//       "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
//     ],
//     "setupFilesAfterEnv": [
//       "<rootDir>/src/jest-setup.tsx"
//     ],
//     "moduleNameMapper": {
//       "\\.(css|less)$": "identity-obj-proxy"
//     }
//   }