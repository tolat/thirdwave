import CentralSection from "../UI/CentralSection";
import styles from "./Testimonials.module.css";
import AliceCarousel from "react-alice-carousel";
import BlackFade from "../UI/BlackFade";
import { useEffect } from "react";
import { selectTSML } from "../../utils";

import background from "../../images/bus3_medium.jpeg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    source: "Torin O'Regan-Latarius",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam",
    source: "Zeus",
  },
];

const Testimonials = (props) => {
  const w = props.viewportWidth;
  useEffect(() => {
    let prevArrow = document.getElementsByClassName(
      "alice-carousel__prev-btn"
    )[0];
    let nextArrow = document.getElementsByClassName(
      "alice-carousel__next-btn"
    )[0];

    prevArrow.style.zoom = "2";
    prevArrow.classList.add("invertFilter");

    nextArrow.style.zoom = "2";
    nextArrow.classList.add("invertFilter");
  }, []);

  return (
    <BlackFade
      backgroundImage={background}
      backgroundOpacity="0.4"
      backgroundAttachment="fixed"
      backgroundSize="cover">
      <CentralSection>
        <Carousel viewportWidth={w}></Carousel>
      </CentralSection>
    </BlackFade>
  );
};

const Carousel = (props) => {
  const w = props.viewportWidth;
  const testimonialContainerPadding = selectTSML(
    w,
    "0",
    "2rem",
    "2rem",
    "2rem"
  );

  const testimonialTextWidth = selectTSML(w, "85%", "70%", "70%", "70%");
  const testimonialTextAlign = selectTSML(
    w,
    "left",
    "justify",
    "justify",
    "justify"
  );

  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = testimonials.map((t) => (
    <div
      className={styles.testimonialContainer}
      style={{
        padding: testimonialContainerPadding,
      }}
      onDragStart={handleDragStart}>
      <div
        className={styles.testimonialText}
        style={{
          width: testimonialTextWidth,
          textAlign: testimonialTextAlign,
        }}>{`"${t.text}"`}</div>
      <div className={styles.testimonialSource}>{`- ${t.source}`}</div>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={false}
      items={productCrouselItems}
      disableButtonsControls={false}
      disableDotsControls={true}
      infinite={true}
      animationDuration={1000}
      responsive={{
        0: { items: 1 },
      }}
    />
  );
};

export default Testimonials;
