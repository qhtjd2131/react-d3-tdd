import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Page2 from "./Page2";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

describe("<Page2 />", () => {
  it("Page2 render", () => {
    const { getByText, getByAltText } = render(<Page2 />);

    expect(getByText("page 2")).toBeInTheDocument();
    expect(getByAltText("youtube_dark")).toBeInTheDocument();
    expect(getByAltText("youtube_light")).toBeInTheDocument();
    expect(getByAltText("image_airbnb")).toBeInTheDocument();
    expect(getByAltText("image_starbucks")).toBeInTheDocument();
  });

  it("image hover event", async () => {
    render(<Page2 />);
    fireEvent.mouseOver(screen.getByAltText("youtube_dark"));
    await waitFor(() => screen.getByAltText("youtube_dark"));

    expect(screen.getByAltText("youtube_dark")).toBeInTheDocument();
  });
});
