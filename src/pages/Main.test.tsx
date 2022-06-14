import { getByTestId, render, screen } from "@testing-library/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import React, { useRef } from "react";
import Main from "./Main";
import Tsparticles from "../components/Tsparticles";


describe("<Main />", () => {
  it("Tsparticles rendering in main", () => {
    render(<Tsparticles />);
  });

});
