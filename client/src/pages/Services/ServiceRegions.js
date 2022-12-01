import React, { useState } from "react";
import styles from "./ServiceRegions.module.css";
import sectionStyles from "./ServiceSection.module.css";

import map from "../../images/icons/map.svg";
import ServiceSection from "./ServiceSection";
import regions from "../../images/regions.jpg";
import { responsive, handleToggleModal } from "../../utils";

const ServiceRegions = (props) => {
  const width = props.viewportWidth;
  const contentFlexDirection = responsive(width, "column", "column");
  const headerJustify = responsive(width, "start", "end", "end", "end");

  const inquireClickHandler = () => {
    handleToggleModal(props.setQuoteModalVis, "Service Regions");
  };

  return (
    <ServiceSection
      id="ServiceRegions"
      icon={map}
      iconAlt="service regions icon"
      headerText="Service Regions"
      viewportWidth={width}
      backgroundColor="rgb(251,251,251)"
      justifyHeader={headerJustify}
      inquireOnClick={inquireClickHandler}>
      <div
        className={styles.container}
        style={{ flexDirection: contentFlexDirection }}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            Our principle locations for regular routes are:
          </div>
          <li>Greater Vancouver / The Lower Mainlad</li>
          <li>South Vancouver Island</li>
          <li>The Sunshine Coast</li>
          <li>Squamish + Whistler</li>
          <div className={styles.text}>
            We also service charters and field trips all across British
            Columbia, and in the past we have had buses travel into the United
            Staes as well. If youre area is not mantioned here, please inquire
            with our head office.
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={regions} alt="regions" />
        </div>
      </div>

      <div></div>
    </ServiceSection>
  );
};

export default ServiceRegions;
