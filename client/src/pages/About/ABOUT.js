import React, { useState } from "react";
import HeroContent from "./HeroContent";
import AboutSection from "./AboutSection";
import FAQ from "./FAQ";

const ABOUT = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <HeroContent setHeroProps={props.setHeroProps} viewportWidth={width} />
      <AboutSection viewportWidth={width} />
      <FAQ viewportWidth={width} />
    </React.Fragment>
  );
};

export default ABOUT;
