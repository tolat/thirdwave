import BlackFade from "../UI/BlackFade";
import { responsive } from "../../utils";

import styles from "./Hero.module.css";

const Hero = (props) => {
  const w = props.viewportWidth;
  const containerMinHeight = responsive(
    w,
    ...props.heroProps.containerMinHeight
  );

  return (
    <BlackFade
      backgroundImage={props.heroProps.bgImage}
      backgroundOpacity={props.heroProps.bgOpacity}
      backgroundAttachment={props.heroProps.bgAttachment}
      backgroundSize={props.heroProps.bgSize}>
      <div
        id="hero-content"
        className={styles.container}
        style={{ minHeight: containerMinHeight }}>
        {props.children}
      </div>
    </BlackFade>
  );
};

export default Hero;
