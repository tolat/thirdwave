import styles from "./HeroContent.module.css";
import CentralSection from "../../components/UI/CentralSection";
import {
  DOMReadyPortal,
  updateHeroResponsiveHeights,
  handleHeroFadeTransitions,
  responsive,
  scrollToOffset,
  convertRemToPixels,
} from "../../utils";
import React, { useEffect, useState } from "react";
import ExpandButton from "../../components/UI/ExpandButton";

const HeroContent = (props) => {
  const width = props.viewportWidth;
  const [contentOpacity, setContentOpacity] = useState("0");
  const [contentTransition, setContentTransition] =
    useState("opacity 1s ease-in");
  const headerMarginTop = responsive(width, "6rem");
  const justifyCentralContent = responsive(width, "center");
  const heroZoom = responsive(width, "0.8");

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

  useEffect(() => {
    width < process.env.REACT_APP_BREAKPOINT_T &&
      scrollToOffset(convertRemToPixels(17));
  }, []);

  return (
    <DOMReadyPortal portal={document.getElementById("hero-content")}>
      <CentralSection>
        <div
          style={{
            justifyContent: justifyCentralContent,
            transition: contentTransition,
            opacity: contentOpacity,
          }}
          className={styles.container}>
          <div
            className={styles.header}
            style={{ zoom: heroZoom, marginTop: headerMarginTop }}>
            About / FAQ
          </div>
          <ExpandButton scrollToId="AboutSection" />
        </div>
      </CentralSection>
    </DOMReadyPortal>
  );
};

export default HeroContent;
