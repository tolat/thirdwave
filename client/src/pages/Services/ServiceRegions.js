import React, { useState } from "react";
import styles from "./ServiceRegions.module.css";
import sectionStyles from "./ServiceSection.module.css";

import map from "../../images/icons/map.svg";
import ServiceSection from "./ServiceSection";
import { responsive, toggleModal } from "../../utils";
import SimpleMap from "../../components/Utils/SimpleMap";

const ServiceRegions = (props) => {
  const width = props.viewportWidth;
  const contentFlexDirection = responsive(width, "column", "column");
  const headerJustify = responsive(width, "start", "end", "end", "end");
  const inquireClickHandler = () => {
    toggleModal(props.setQuoteModalVis, "Service Regions");
  };

  return (
    <ServiceSection
      id="Regions"
      icon={map}
      iconAlt="service regions icon"
      headerText="Regions"
      viewportWidth={width}
      backgroundColor="rgb(251,251,251)"
      justifyHeader={headerJustify}
      inquireOnClick={inquireClickHandler}>
      <div
        className={styles.container}
        style={{ flexDirection: contentFlexDirection }}>
        <div className={styles.textContainer}>
          <div style={{ fontSize: props.fontSize }} className={styles.text}>
            Our principle locations for regular routes are:
          </div>
          <li style={{ fontSize: props.fontSize }}>
            Greater Vancouver / The Lower Mainlad
          </li>
          <li style={{ fontSize: props.fontSize }}>South Vancouver Island</li>
          <li style={{ fontSize: props.fontSize }}>The Sunshine Coast</li>
          <li style={{ fontSize: props.fontSize }}>Squamish + Whistler</li>
          <div style={{ fontSize: props.fontSize }} className={styles.text}>
            We also service charters and field trips all across British
            Columbia, and in the past we have had buses travel into the United
            Staes as well. If youre area is not mantioned here, please inquire
            with our head office.
          </div>
        </div>
        <div className={styles.imageContainer}>
          <SimpleMap />
        </div>
      </div>

      <div></div>
    </ServiceSection>
  );
};

export default ServiceRegions;
