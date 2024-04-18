import React from "react";
import regions from "../../images/regions.jpg";
import { responsive } from "../../utils";
import { useWindowSize } from "usehooks-ts";
import styles from "./SimpleMap.module.css";
import pindrop from "../../images/icons/pindrop.png";
import mapImg from "../../images/map.png";

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
