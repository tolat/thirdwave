import BlackFade from "../UI/BlackFade";
import { responsive } from "../../utils";

import styles from "./Hero.module.css";
import bg from "../../images/bus5.jpeg";
import bg_l from "../../images/bus5_large.jpeg";
import bg_s from "../../images/under_grouse.jpeg";

const Hero = (props) => {
  const w = props.viewportWidth;
  const containerMinHeight = responsive(
    w,
    ...props.heroProps.containerMinHeight
  );
  const background = responsive(w, bg_s, bg, bg_l, bg_l);

  return (
    <BlackFade
      backgroundImage={background}
      backgroundOpacity={props.heroProps.bgOpacity}
      backgroundAttachment={props.heroProps.bgAttachment}
      backgroundSize={props.heroProps.bgSize}>
      <div
        id="hero-content"
        className={styles.container}
        style={{ minHeight: containerMinHeight}}>
        {props.children}
      </div>
    </BlackFade>
  );
};

export default Hero;
