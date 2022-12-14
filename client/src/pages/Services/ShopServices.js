import React, { useState } from "react";
import styles from "./ShopServices.module.css";
import sectionStyles from "./ServiceSection.module.css";

import wrench from "../../images/icons/build.svg";
import ServiceSection from "./ServiceSection";
import image from "../../images/bus_shop.jpeg";
import { responsive, toggleModal } from "../../utils";

const ShopRental = (props) => {
  const width = props.viewportWidth;
  const imageContainerWidth = responsive(width, "100%");
  const imageMaxHeight = responsive(width, "17rem");

  const inquireClickHandler = () => {
    toggleModal(props.setQuoteModalVis, "Shop Rental");
  };

  return (
    <ServiceSection
      id="ShopServices"
      icon={wrench}
      iconAlt="shop rental icon"
      headerText="Shop Services"
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}>
      <div
        className={styles.imageContainer}
        style={{ width: imageContainerWidth }}>
        {/* <img
          style={{ maxHeight: imageMaxHeight }}
          className={styles.image}
          src={image}
          alt="shop with bus"
        /> */}
      </div>
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
          <b>Main Contact:</b> Guy McKay - guym@thirdwavebus.com{" "}
        </div>
      </div>
    </ServiceSection>
  );
};

export default ShopRental;
