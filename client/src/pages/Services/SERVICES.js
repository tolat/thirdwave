import React, { useState } from "react";
import HeroContent from "./HeroContent";
import SchoolRoutes from "./SchoolRoutes";

const SERVICES = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <HeroContent setHeroProps={props.setHeroProps} viewportWidth={width} />
      <SchoolRoutes viewportWidth={width} />
    </React.Fragment>
  );
};

export default SERVICES;
