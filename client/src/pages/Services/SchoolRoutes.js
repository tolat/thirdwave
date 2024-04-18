import React from "react";
import styles from "./SchoolRoutes.module.css";
import sectionStyles from "./ServiceSection.module.css";

import mapleridge from "../../images/partner_icons/mapleridge.png";
import fraser from "../../images/partner_icons/fraseracademy.png";
import victoria from "../../images/partner_icons/sd61.png";
import stgeorges from "../../images/partner_icons/stgeorges.png";
import family from "../../images/icons/fieldtrip.svg";
import ServiceSection from "./ServiceSection";
import { responsive, toggleModal } from "../../utils";

const SchoolRoutes = (props) => {
  const width = props.viewportWidth;

  const iconHeight = responsive(width, "4.5rem");
  const iconPadding = responsive(width, "1rem 0 1rem 0", "2rem 1rem 2rem 1rem");

  const inquireClickHandler = () => {
    toggleModal(props.setQuoteModalVis, "School Routes");
  };

  return (
    <ServiceSection
      id="SchoolRoutes"
      icon={family}
      iconAlt="family icon"
      headerText="School Routes"
      justifyHeader="start"
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}
    >
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={mapleridge}
            alt="fraser"
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={victoria}
            alt="northvan"
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={stgeorges}
            alt="surrey"
          />
        </div>
        <div className={styles.iconContainer}>
          <img
            style={{ height: iconHeight, padding: iconPadding }}
            className={styles.iconImg}
            src={fraser}
            alt="richmond"
          />
        </div>
      </div>
      <div className={sectionStyles.textContainer}>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.text}
        >
          Thirdwave Bus services offers full school route servicing in our
          principal areas:
        </div>
        <div>
          <li style={{ fontSize: props.fontSize }}>
            Greater Vancouver / Lower Mainlad
          </li>
          <li style={{ fontSize: props.fontSize }}>South Vancouver Island</li>
          {/*           <li style={{ fontSize: props.fontSize }}>The Sunshine Coast</li>
           */}{" "}
        </div>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.text}
        >
          To inquire about school route services, please contact us through the
          "Contact" button in the navigation bar, or send an email to the main
          Contact as listed below.
        </div>
        <div
          style={{ fontSize: props.fontSize }}
          className={sectionStyles.contactInfo}
        >
          <b>Main Contact:</b> Murray Nicholl - murrayn@thirdwavebus.com{" "}
        </div>
        {/* <div className={sectionStyles.contactInfo}>
          <b>Dispatch:</b> dispatch@thirdawavebus.com
        </div> */}
      </div>
    </ServiceSection>
  );
};

export default SchoolRoutes;
