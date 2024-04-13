import React from "react";
import GoogleMapReact from "google-map-react";
import regions from "../../images/regions.jpg";
import { responsive } from "../../utils";
import { useWindowSize } from "usehooks-ts";
import styles from "./SimpleMap.module.css";
import pindrop from "../../images/icons/pindrop.png";
import mapImg from "../../images/map.png";

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
  const mapMargin = responsive(width, "0");

  try {
    return (
      <div className={styles.container} style={{ margin: mapMargin }}>
        <img
          src={mapImg}
          alt="map"
          style={{ width: "100%", height: "100%" }}
        ></img>
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
