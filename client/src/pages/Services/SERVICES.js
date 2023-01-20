import React, { useState } from "react";
import Charters from "./Charters";
import HeroContent from "./HeroContent";
import SchoolRoutes from "./SchoolRoutes";
import ServiceRegions from "./ServiceRegions";
import ShopServices from "./ShopServices";
import UsedBusSales from "./UsedBusSales";
import { responsive } from "../../utils";

const SERVICES = (props) => {
  const width = props.viewportWidth;
  const fontSize = responsive(width, "1rem");

  return (
    <React.Fragment>
      <HeroContent
        setQuoteModalVis={props.setQuoteModalVis}
        setHeroProps={props.setHeroProps}
        viewportWidth={width}
        fontSize={fontSize}
      />
      <SchoolRoutes
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
        fontSize={fontSize}
      />
      <Charters
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
        fontSize={fontSize}
      />
      {/* <ShopServices
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
        fontSize={fontSize}
      /> */}
      <ServiceRegions
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
        fontSize={fontSize}
      />
     {/*  <UsedBusSales
        setQuoteModalVis={props.setQuoteModalVis}
        viewportWidth={width}
        fontSize={fontSize}
      /> */}
    </React.Fragment>
  );
};

export default SERVICES;
