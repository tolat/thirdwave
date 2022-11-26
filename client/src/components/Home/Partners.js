import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CentralSection from "../UI/CentralSection";

import fraser from "../../images/partner_icons/fraseracademy.png";
import northvan from "../../images/partner_icons/northvan.png";
import surrey from "../../images/partner_icons/surrey.png";
import richmond from "../../images/partner_icons/richmond.png";

const imageLinks = [fraser, northvan, surrey, richmond];

const Partners = (props) => {
  return (
    <CentralSection style={{ flexDirection: "column" }} backgroundColor="white">
      <div style={{ margin: "4rem 0rem 6rem 0rem" }}>
        <Carousel />
      </div>
    </CentralSection>
  );
};

const Carousel = (props) => {
  // Alice carousel for products
  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = imageLinks.map((l) => (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        height="70rem"
        src={l}
        alt="poduct-logo"
        onDragStart={handleDragStart}></img>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      items={productCrouselItems}
      disableButtonsControls={true}
      disableDotsControls={true}
      infinite={true}
      animationDuration={2000}
      responsive={{
        0: { items: 2 },
        550: { items: 3 },
        [`${process.env.REACT_APP_BREAKPOINT_S}`]: { items: 4 },
      }}
    />
  );
};

export default Partners;
