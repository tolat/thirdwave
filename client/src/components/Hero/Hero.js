import BlackFade from "../UI/BlackFade";
import { responsive } from "../../utils";

import styles from "./Hero.module.css";

const Hero = (props) => {
  const w = props.viewportWidth;
  const containerHeight = responsive(w, ...props.heroProps.responsiveHeights);

  return (
    <BlackFade
      backgroundImage={props.heroProps.bgImage}
      backgroundOpacity={props.heroProps.bgOpacity}
      backgroundAttachment={props.heroProps.bgAttachment}
      backgroundSize={props.heroProps.bgSize}>
      <div
        id="hero-content"
        className={styles.container}
        style={{ height: containerHeight }}>
        {props.children}
      </div>
    </BlackFade>
  );
};

export default Hero;
