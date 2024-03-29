import HeroContent from "./HeroContent";
import ThirdwaveBlurb from "./ThirdwaveBlurb";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import React from "react";

const HOME = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <HeroContent
        heroProps={props.heroProps}
        setHeroProps={props.setHeroProps}
        viewportWidth={width}
        setContactModalVis={props.setContactModalVis}
      />
      <ThirdwaveBlurb viewportWidth={width} />
      <Partners viewportWidth={width} />
     {/*  <Testimonials viewportWidth={width} /> */}
    </React.Fragment>
  );
};

export default HOME;
