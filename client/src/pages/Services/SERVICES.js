import React, { useState } from "react";
import Charters from "./Charters";
import HeroContent from "./HeroContent";
import SchoolRoutes from "./SchoolRoutes";
import ServiceRegions from "./ServiceRegions";
import ShopRental from "./ShopRental";
import UsedBusSales from "./UsedBusSales";

const SERVICES = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <HeroContent setHeroProps={props.setHeroProps} viewportWidth={width} />
      <SchoolRoutes viewportWidth={width} />
      <Charters viewportWidth={width} />
      <ShopRental viewportWidth={width} />
      <ServiceRegions viewportWidth={width} />
      <UsedBusSales viewportWidth={width} />
    </React.Fragment>
  );
};

export default SERVICES;
