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
          School bus charters can be a much more cost effective way of getting large groups form A to B. We offer professional charter services for anything from weddings, to business events, to sports shuttles. Whatever your needs, our buses will deliver you safely, and on time. Inquire about our rates using the email below, or 
          <a>{" click here to request a quote now."}</a>
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
