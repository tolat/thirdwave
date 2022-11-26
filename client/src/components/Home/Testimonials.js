import CentralSection from "../UI/CentralSection";
import styles from "./Testimonials.module.css";
import AliceCarousel from "react-alice-carousel";
import BlackFade from "../UI/BlackFade";
import { useEffect } from "react";

import background from "../../images/bus3_medium.jpeg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    source: "Torin O'Regan-Latarius",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ",
    source: "Zeus",
  },
];

const Testimonials = (props) => {
  useEffect(() => {
    let prevArrow = document.getElementsByClassName(
      "alice-carousel__prev-btn"
    )[0];
    let nextArrow = document.getElementsByClassName(
      "alice-carousel__next-btn"
    )[0];

    prevArrow.style.zoom = "2";
    prevArrow.classList.add("invertFilter");
    prevArrow.classList.add("makeWhite");

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
        <Carousel></Carousel>
      </CentralSection>
    </BlackFade>
  );
};

const Carousel = (props) => {
  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = testimonials.map((t) => (
    <div
      className={styles.testimonialContainer}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
      }}
      onDragStart={handleDragStart}>
      <div className={styles.testimonialText}>{`"${t.text}"`}</div>
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
