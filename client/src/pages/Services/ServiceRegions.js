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
  const headerJustify = responsive(width, "start", "start", "start", "start");
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
      backgroundColor="rgb(255,255,255)"
      justifyHeader={headerJustify}
      inquireOnClick={inquireClickHandler}>
      <div
        className={styles.container}
        style={{ flexDirection: contentFlexDirection }}>
          <div className={styles.imageContainer}>
          <SimpleMap />
        </div>
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
            If youre area is not mantioned here, please inquire
            with our head office using the email below.
          </div>
          <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.contactInfo}>
          <b>Dispatch:</b> dispatch@thirdwavebus.com{" "}
        </div>
        </div>
        
      </div>

      <div></div>
    </ServiceSection>
  );
};

export default ServiceRegions;
