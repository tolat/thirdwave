import React, { useState } from "react";
import Charters from "./Charters";
import HeroContent from "./HeroContent";
import SchoolRoutes from "./SchoolRoutes";
import ServiceRegions from "./ServiceRegions";
import ShopServices from "./ShopServices";
import UsedBusSales from "./UsedBusSales";

const SERVICES = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <HeroContent
        setQuoteModalVis={props.setQuoteModalVis}
        setHeroProps={props.setHeroProps}
        viewportWidth={width}
      />
      <SchoolRoutes
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
      />
      <Charters
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
      />
      <ShopServices
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
      />
      <ServiceRegions
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
      />
      <UsedBusSales
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
      />
    </React.Fragment>
  );
};

export default SERVICES;
