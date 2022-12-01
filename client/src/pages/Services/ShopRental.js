import React, { useState } from "react";
import styles from "./ShopRental.module.css";
import sectionStyles from "./ServiceSection.module.css";

import wrench from "../../images/icons/build.svg";
import ServiceSection from "./ServiceSection";
import image from "../../images/bus_shop.jpeg";
import { responsive, handleToggleModal } from "../../utils";

const ShopRental = (props) => {
  const width = props.viewportWidth;
  const imageContainerWidth = responsive(width, "100%");

  const inquireClickHandler = () => {
    handleToggleModal(props.setQuoteModalVis, "Shop Rental");
  };

  return (
    <ServiceSection
      id="ShopRental"
      icon={wrench}
      iconAlt="shop rental icon"
      headerText="Shop Rental"
      viewportWidth={width}
      inquireOnClick={inquireClickHandler}>
      <div
        className={styles.imageContainer}
        style={{ width: imageContainerWidth }}>
        <img className={styles.image} src={image} alt="shop with bus" />
      </div>
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

export default ShopRental;
