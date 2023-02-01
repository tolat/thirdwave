import React, { useState } from "react";
import styles from "./Charters.module.css";
import sectionStyles from "./ServiceSection.module.css";

import bus from "../../images/icons/bus.svg";
import ServiceSection from "./ServiceSection";
import { responsive, toggleModal } from "../../utils";

import FAQ from "../About/FAQ";

const Charters = (props) => {
  const width = props.viewportWidth;
  const headerJustify = responsive(width, "start", "end", "end", "end");
  const inquireClickHandler = () => {
    toggleModal(props.setQuoteModalVis, "Charters");
  };
  const faqTemplateCols = responsive(width, "100%","50% 50%", "33% 33% 33%","33% 33% 33%")

  const clickQuoteButton = () =>{
    document.getElementById("quoteButton").click()
  }

  return (
    <ServiceSection
      id="Charters"
      icon={bus}
      iconAlt="charters icon"
      headerText="Charters"
      justifyHeader={headerJustify}
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}>
      <div className={sectionStyles.textContainer}>
        <div className={styles.container}>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.text}>
          School bus charters can be a much more cost effective way of getting large groups form A to B. We offer professional charter services for anything from weddings, to business events, to sports shuttles. Whatever your needs, our buses will deliver you safely, and on time. Inquire about our rates using the email below, or 
          click <span className={styles.link} onClick={clickQuoteButton}>here</span> to request a quote now
        </div>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.contactInfo}>
          <b>Main Contact:</b> Darelene Mikitka - darlenem@thirdwavebus.com{" "}
        </div>
        <FAQ style={{border: "1px solid black", marginTop: "3rem", backgroundColor:"rgb(239,242,247)", borderRadius: "3px"}} hideHeader="true" templateCols={faqTemplateCols}/>
        </div>
      </div>
      
      
    </ServiceSection>
  );
};

export default Charters;
