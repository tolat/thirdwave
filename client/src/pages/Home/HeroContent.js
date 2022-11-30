import styles from "./HeroContent.module.css";
import CentralSection from "../../components/UI/CentralSection";
import {
  DOMReadyPortal,
  handleHeroFadeTransitions,
  responsive,
  scrollToId,
  updateHeroResponsiveHeights,
} from "../../utils";
import React, { useEffect, useState } from "react";

import maple_leaf from "../../images/maple_leaf.png";
import bus from "../../images/icons/bus.svg";
import wrench from "../../images/icons/build.svg";
import map from "../../images/icons/map.svg";
import family from "../../images/icons/fieldtrip.svg";
import tag from "../../images/icons/tag.svg";
import ExpandButton from "../../components/UI/ExpandButton";

const HeroContent = (props) => {
  const w = props.viewportWidth;
  const heroZoom = responsive(w, "0.65");
  const heroMarginTop = responsive(w, "25rem");
  const heroBorderBottom = responsive(w, "1px solid white");
  const header2BorderBottom = responsive(w, "none");
  const iconsContainerWidth = responsive(w, "unset");
  const iconsContainerZoom = responsive(w, "0.8");
  const servicesDisplay = responsive(w, "none");
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
    ["40rem", "45rem", "45rem", "45rem"],
    useEffect,
    props.setHeroProps
  );

  const servicesIconClickHandler = (e) => {
    const innerText = e.target.innerText;
    if (innerText) {
      document.getElementById("servicesButton").click();
    }

    setTimeout(() => {
      scrollToId(innerText.replaceAll(" ", ""));
    }, 800);
  };

  return (
    <DOMReadyPortal portal={document.getElementById("hero-content")}>
      <CentralSection>
        <div
          className={styles.centralContainer}
          style={{ transition: contentTransition, opacity: contentOpacity }}>
          <div
            className={styles.heroContainer}
            style={{
              zoom: heroZoom,
              marginTop: heroMarginTop,
              borderBottom: heroBorderBottom,
            }}>
            <img
              className={styles.canadianOwnedImg}
              src={maple_leaf}
              alt="canadian owned"
            />
            <div className={styles.headerContainer}>
              <div className={styles.header1}>Locally owned and operated</div>
              <div
                className={styles.header2}
                style={{ borderBottom: header2BorderBottom }}>
                {" "}
                Since 1987
              </div>
              <div
                className={styles.headerServices}
                style={{ display: servicesDisplay }}>
                <div className={styles.servicesItem}>Route Contracts</div>
                <div className={styles.servicesDot}>.</div>
                <div className={styles.servicesItem}>Rentals</div>
                <div className={styles.servicesDot}>.</div>
                <div className={styles.servicesItem}>Event Catering</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              className={styles.iconsContainer}
              style={{
                width: iconsContainerWidth,
                zoom: iconsContainerZoom,
              }}>
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="School Routes"
                imgUrl={family}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Charters"
                imgUrl={bus}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Shop Rental"
                imgUrl={wrench}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Service Regions"
                imgUrl={map}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Used Bus Sales"
                imgUrl={tag}
              />
            </div>
            <ExpandButton scrollToId="ThirdwaveBlurb" />
          </div>
        </div>
      </CentralSection>
      ,
    </DOMReadyPortal>
  );
};

const ServicesIcon = (props) => {
  const clickContainer = () => {
    document.getElementById(`${props.text}_linkid`).click();
  };
  return (
    <div
      id={`${props.text}_linkid`}
      onClick={props.onClick}
      className={`${styles.iconContainer} invertFilter`}>
      <img
        className={`${styles.iconImg} `}
        src={props.imgUrl}
        alt={props.alt}
        onClick={clickContainer}
      />
      <div className={styles.iconText}>{props.text}</div>
    </div>
  );
};

export default HeroContent;
