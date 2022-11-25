import styles from "./Banner1.module.css";
import CentralSection from "../UI/CentralSection";
import { selectTSML } from "../../utils";
import React, { useEffect, useState } from "react";

import maple_leaf from "../../images/maple_leaf.png";
import bus from "../../images/icons/bus.svg";
import wrench from "../../images/icons/build.svg";
import city from "../../images/icons/city.svg";
import family from "../../images/icons/fieldtrip.svg";
import tag from "../../images/icons/tag.svg";
import expand from "../../images/icons/expand.svg";

const Banner1 = (props) => {
  const w = props.viewportWidth;
  const containerHeight = selectTSML(w, "45rem", "45rem", "45rem", "45rem");
  const [contentOpacity, setContentOpacity] = useState("0");

  useEffect(() => {
    setContentOpacity("1");
  }, []);

  return (
    <div className={styles.container} style={{ height: containerHeight }}>
      <CentralSection containerStyle={{ height: "100%" }}>
        <div
          className={styles.centralContainer}
          style={{ opacity: contentOpacity }}>
          <div className={styles.heroContainer}>
            <img
              className={styles.canadianOwnedImg}
              src={maple_leaf}
              alt="canadian owned"
            />
            <div className={styles.headerContainer}>
              <div className={styles.header1}>Locally owned and operated</div>
              <div className={styles.header2}> Since 1987</div>
              <div className={styles.headerServices}>
                <div className={styles.servicesItem}>Route Contracts</div>
                <div className={styles.servicesDot}>.</div>
                <div className={styles.servicesItem}>Rentals</div>
                <div className={styles.servicesDot}>.</div>
                <div className={styles.servicesItem}>Event Catering</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.iconsContainer}>
              <StatIcon text="School Routes" imgUrl={family} />
              <StatIcon text="Charters" imgUrl={bus} />
              <StatIcon text="Shop Rental" imgUrl={wrench} />
              <StatIcon text="Multiple Cities" imgUrl={city} />
              <StatIcon text="Used Bus Sales" imgUrl={tag} />
            </div>
            <div className={`${styles.expandButton} invertFilter`}>
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
