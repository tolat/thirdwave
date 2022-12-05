import React, { useState } from "react";
import styles from "./SchoolRoutes.module.css";
import sectionStyles from "./ServiceSection.module.css";

import fraser from "../../images/partner_icons/fraseracademy.png";
import northvan from "../../images/partner_icons/northvan.png";
import surrey from "../../images/partner_icons/surrey.png";
import richmond from "../../images/partner_icons/richmond.png";
import family from "../../images/icons/fieldtrip.svg";
import ServiceSection from "./ServiceSection";
import { responsive, handleToggleModal } from "../../utils";

const SchoolRoutes = (props) => {
  const width = props.viewportWidth;

  const iconHeight = responsive(width, "4.5rem");
  const iconPadding = responsive(width, "1rem 0 1rem 0", "2rem 1rem 2rem 1rem");

  const inquireClickHandler = () => {
    handleToggleModal(props.setQuoteModalVis, "School Routes");
  };

  return (
    <ServiceSection
      id="SchoolRoutes"
      icon={family}
      iconAlt="family icon"
      headerText="School Routes"
      justifyHeader="start"
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={fraser}
            alt="fraser"
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={northvan}
            alt="northvan"
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={surrey}
            alt="surrey"
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={richmond}
            alt="richmond"
          />
        </div>
      </div>
      <div className={sectionStyles.textContainer}>
        <div className={sectionStyles.text}>
          Thirdwave Bus services offers full school route servicing in our
          principal areas:
        </div>
        <div>
          <li>Greater Vancouver / Lower Mainlad</li>
          <li>South Vancouver Island</li>
          <li>The Sunshine Coast</li>
        </div>
        <div className={sectionStyles.text}>
          To inquire about school route services, please contact us through the
          "Request Quote" button in the navigation bar.
        </div>
        <div className={sectionStyles.contactInfo}>
          <b>Main Contact:</b> Marcus Nicholl - marcusn@thirdwavebus.com{" "}
        </div>
        <div className={sectionStyles.contactInfo}>
          <b>Dispatch:</b> dispatch@thirdawavebus.com
        </div>
      </div>
    </ServiceSection>
  );
};

export default SchoolRoutes;
