import BlackFade from "../UI/BlackFade";
import { convertRemToPixels, responsive } from "../../utils";

import styles from "./Hero.module.css";
import bg from "../../images/bus5.jpeg";
import bg_l from "../../images/bus5_large.jpeg";
import bg_s from "../../images/under_grouse.jpeg";
import { useWindowSize } from "usehooks-ts";

const Hero = (props) => {
  const {width, height} = useWindowSize()
  const containerMinHeight = responsive(
    width,
    ...props.heroProps.containerMinHeight
  );
  const background = responsive(width, bg_s, bg_l, bg_l, bg_l, bg_l);
  const heightAttribute = height < convertRemToPixels(45)? "minHeight":"height"

  return (
    <BlackFade
      backgroundImage={background}
      backgroundOpacity={props.heroProps.bgOpacity}
      backgroundAttachment={props.heroProps.bgAttachment}
      backgroundSize={props.heroProps.bgSize}>
      <div
        id="hero-content"
        className={styles.container}
        style={{minHeight: containerMinHeight, maxHeight: "100vh"}}>
        {props.children}
      </div>
    </BlackFade>
  );
};

export default Hero;
