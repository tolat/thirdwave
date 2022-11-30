import React, { useState } from "react";
import styles from "./Charters.module.css";
import sectionStyles from "./ServiceSection.module.css";

import bus from "../../images/icons/bus.svg";
import ServiceSection from "./ServiceSection";

const Charters = (props) => {
  const width = props.viewportWidth;

  return (
    <ServiceSection
      id="Charters"
      icon={bus}
      iconAlt="charters icon"
      headerText="Charters"
      backgroundColor="rgb(251,251,251)"
      justifyHeader="end"
      viewportWidth={width}>
      <div className={sectionStyles.textContainer}>
        <div className={sectionStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div></div>
    </ServiceSection>
  );
};

export default Charters;
