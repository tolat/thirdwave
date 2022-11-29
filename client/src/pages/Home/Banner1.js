import styles from "./Banner1.module.css";
import CentralSection from "../../components/UI/CentralSection";
import { selectFromWidth } from "../../utils";
import React, { useEffect, useState } from "react";
import BlackFade from "../../components/UI/BlackFade";

import maple_leaf from "../../images/maple_leaf.png";
import bus from "../../images/icons/bus.svg";
import wrench from "../../images/icons/build.svg";
import map from "../../images/icons/map.svg";
import family from "../../images/icons/fieldtrip.svg";
import tag from "../../images/icons/tag.svg";
import expand from "../../images/icons/expand.svg";
import heroBackground from "../../images/bus1.jpeg";

const Banner1 = (props) => {
  const w = props.viewportWidth;
  const containerHeight = selectFromWidth(
    w,
    "40rem",
    "45rem",
    "45rem",
    "45rem"
  );
  const [contentOpacity, setContentOpacity] = useState("0");
  const heroZoom = selectFromWidth(w, "0.65");
  const heroMarginTop = selectFromWidth(w, "25rem");
  const heroBorderBottom = selectFromWidth(w, "1px solid white");
  const header2BorderBottom = selectFromWidth(w, "none");
  const iconsContainerWidth = selectFromWidth(w, "unset");
  const iconsContainerZoom = selectFromWidth(w, "0.8");
  const servicesDisplay = selectFromWidth(w, "none");

  const onExpand = () => {
    let offsetPosition = document
      .getElementById("ThirdwaveBlurb")
      .getBoundingClientRect().top;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setContentOpacity("1");
  }, []);

  return (
    <BlackFade
      backgroundImage={heroBackground}
      backgroundOpacity="0.7"
      backgroundAttachment="fixed"
      backgroundSize="cover">
      <div className={styles.container} style={{ height: containerHeight }}>
        <CentralSection containerStyle={{ height: "100%" }}>
          <div
            className={styles.centralContainer}
            style={{ opacity: contentOpacity }}>
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
                <StatIcon text="School Routes" imgUrl={family} />
                <StatIcon text="Charters" imgUrl={bus} />
                <StatIcon text="Shop Rental" imgUrl={wrench} />
                <StatIcon text="Service Regions" imgUrl={map} />
                <StatIcon text="Used Bus Sales" imgUrl={tag} />
              </div>
              <div
                className={`${styles.expandButton} invertFilter`}
                onClick={onExpand}>
                <img
                  className={styles.expandButtonImg}
                  src={expand}
                  alt="expand"
                />
              </div>
            </div>
          </div>
        </CentralSection>
      </div>
    </BlackFade>
  );
};

const StatIcon = (props) => {
  return (
    <div className={`${styles.iconContainer} invertFilter`}>
      <img
        className={`${styles.iconImg} `}
        src={props.imgUrl}
        alt={props.alt}
      />
      <div className={styles.iconText}>{props.text}</div>
    </div>
  );
};

export default Banner1;
