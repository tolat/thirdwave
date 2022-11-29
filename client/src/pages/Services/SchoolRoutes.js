import React, { useState } from "react";
import CentralSection from "../../components/UI/CentralSection";
import styles from "./SchoolRoutes.module.css";

import fraser from "../../images/partner_icons/fraseracademy.png";
import northvan from "../../images/partner_icons/northvan.png";
import surrey from "../../images/partner_icons/surrey.png";
import richmond from "../../images/partner_icons/richmond.png";

const SchoolRoutes = (props) => {
  const width = props.viewportWidth;

  return (
    <CentralSection>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <img className={styles.iconImg} src={fraser} alt="fraser" />
          </div>
          <div className={styles.iconContainer}>
            <img className={styles.iconImg} src={northvan} alt="northvan" />
          </div>
          <div className={styles.iconContainer}>
            <img className={styles.iconImg} src={surrey} alt="surrey" />
          </div>
          <div className={styles.iconContainer}>
            <img className={styles.iconImg} src={richmond} alt="richmond" />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            Thirdwave Bus services offers full school route servicing in our
            principal areas:
          </div>
          <div className={styles.serviceAreas}>
            <li>Greater Vancouver / Lower Mainlad</li>
            <li>South Vancouver Island</li>
            <li>The Sunshine Coast</li>
          </div>
          <div className={styles.text}>
            To inquire about school route services, please contact us through
            the "Request Quote" button in the navigation bar.
          </div>
        </div>
      </div>
    </CentralSection>
  );
};

export default SchoolRoutes;
