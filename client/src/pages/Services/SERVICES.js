import React, { useState } from "react";
import Charters from "./Charters";
import HeroContent from "./HeroContent";
import SchoolRoutes from "./SchoolRoutes";
import ShopRental from "./ShopRental";

const SERVICES = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <HeroContent setHeroProps={props.setHeroProps} viewportWidth={width} />
      <SchoolRoutes viewportWidth={width} />
      <Charters viewportWidth={width} />
      <ShopRental viewportWidth={width} />
    </React.Fragment>
  );
};

export default SERVICES;
