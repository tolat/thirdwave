import React from "react";
import GoogleMapReact from "google-map-react";
import regions from "../../images/regions.jpg";
import { responsive } from "../../utils";
import { useWindowSize } from "usehooks-ts";
import styles from "./SimpleMap.module.css";
import pindrop from "../../images/icons/pindrop.png";

const Marker = (props) => {
  return (
    <div className={styles.marker}>
      <img className={styles.markerImg} src={pindrop} alt="pindrop" />
    </div>
  );
};

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 48.98673014875695,
      lng: -123.32449064907355,
    },
    zoom: 8,
  };

  const { width } = useWindowSize();
  const imageMaxHeight = responsive(width, "17rem");
  const mapMargin = responsive(width,"0")

  try {
    return (
      <div className={styles.container} style={{margin: mapMargin}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBDmVfnf67kwRkhrf6sLOCDo7avem9USvU" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
          <Marker lat={49.193980300332264} lng={-123.07466601572757} />
          <Marker lat={49.45305677049311} lng={-123.71170810493598} />
          <Marker lat={48.44424484650976} lng={-123.37689530818076} />
        </GoogleMapReact>
      </div>
    );
  } catch (error) {
    return (
      <img
        style={{ maxHeight: imageMaxHeight }}
        className={styles.image}
        src={regions}
        alt="regions"
      />
    );
  }
};

export default SimpleMap;
