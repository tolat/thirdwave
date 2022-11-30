import styles from "./HeroContent.module.css";
import CentralSection from "../../components/UI/CentralSection";
import {
  DOMReadyPortal,
  responsive,
  updateHeroResponsiveHeights,
  handleHeroFadeTransitions,
} from "../../utils";
import React, { useEffect, useState } from "react";

const HeroContent = (props) => {
  const [contentOpacity, setContentOpacity] = useState("0");
  const [contentTransition, setContentTransition] =
    useState("opacity 1s ease-in");

  handleHeroFadeTransitions(
    useEffect,
    setContentTransition,
    setContentOpacity,
    props.heroProps
  );

  updateHeroResponsiveHeights(
    ["20rem", "20rem", "20rem", "20rem"],
    useEffect,
    props.setHeroProps,
    document.getElementById("servicesHeroContainer")
  );

  return (
    <DOMReadyPortal portal={document.getElementById("hero-content")}>
      <CentralSection>
        <div style={{ transition: contentTransition, opacity: contentOpacity }}>
          Services
        </div>
      </CentralSection>
    </DOMReadyPortal>
  );
};

export default HeroContent;
