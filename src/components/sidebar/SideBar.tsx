import React from "react";
import ScrollNav from "./ScrollNav";
import * as style from "./SideBar.style";

interface SideBarProps {
  pageRefs: React.MutableRefObject<HTMLElement[]>;
}

const SideBar = (props: SideBarProps) => {
  console.log(props.pageRefs);
  return (
    <style.SideBarBox>
      <style.PortFolioTextLogo>PortFolio</style.PortFolioTextLogo>
      <ScrollNav pageRefs={props.pageRefs} />;
    </style.SideBarBox>
  );
};

export default SideBar;
