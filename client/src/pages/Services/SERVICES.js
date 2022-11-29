import React, { useState } from "react";
import SchoolRoutes from "./SchoolRoutes";

const SERVICES = (props) => {
  const width = props.viewportWidth;

  return (
    <React.Fragment>
      <SchoolRoutes viewportWidth={width} />
    </React.Fragment>
  );
};

export default SERVICES;
