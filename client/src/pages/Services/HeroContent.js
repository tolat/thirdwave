import styles from "./HeroContent.module.css";
import CentralSection from "../../components/UI/CentralSection";
import {
  DOMReadyPortal,
  responsive,
  updateHeroResponsiveHeights,
  handleHeroFadeTransitions,
  scrollToId,
} from "../../utils";
import React, { useEffect, useState } from "react";

import expand from "../../images/icons/expand.svg";
import ExpandButton from "../../components/UI/ExpandButton";

const HeroContent = (props) => {
  const width = props.viewportWidth;
  const [contentOpacity, setContentOpacity] = useState("0");
  const [contentTransition, setContentTransition] =
    useState("opacity 1s ease-in");
  const headerMarginTop = responsive(width, "6rem");

  handleHeroFadeTransitions(
    useEffect,
    setContentTransition,
    setContentOpacity,
    props.heroProps
  );

  updateHeroResponsiveHeights(
    ["18rem", "30rem", "30rem", "30rem"],
    useEffect,
    props.setHeroProps
  );

  return (
    <DOMReadyPortal portal={document.getElementById("hero-content")}>
      <CentralSection>
        <div
          style={{ transition: contentTransition, opacity: contentOpacity }}
          className={styles.container}>
          <div className={styles.header} style={{ marginTop: headerMarginTop }}>
            Services
          </div>
          <ExpandButton scrollToId="SchoolRoutes" />
        </div>
      </CentralSection>
    </DOMReadyPortal>
  );
};

export default HeroContent;
