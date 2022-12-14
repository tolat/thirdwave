import React, { useState } from "react";
import styles from "./Charters.module.css";
import sectionStyles from "./ServiceSection.module.css";

import bus from "../../images/icons/bus.svg";
import ServiceSection from "./ServiceSection";
import { responsive, toggleModal } from "../../utils";

const Charters = (props) => {
  const width = props.viewportWidth;
  const headerJustify = responsive(width, "start", "end", "end", "end");
  const inquireClickHandler = () => {
    toggleModal(props.setQuoteModalVis, "Charters");
  };

  return (
    <ServiceSection
      id="Charters"
      icon={bus}
      iconAlt="charters icon"
      headerText="Charters"
      backgroundColor="rgb(251,251,251)"
      justifyHeader={headerJustify}
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}>
      <div className={sectionStyles.textContainer}>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.contactInfo}>
          <b>Main Contact:</b> Darelene Mikitka - darlenem@thirdwavebus.com{" "}
        </div>
      </div>
      <div></div>
    </ServiceSection>
  );
};

export default Charters;
