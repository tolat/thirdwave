import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CentralSection from "../../components/UI/CentralSection";

import fraser from "../../images/partner_icons/fraseracademy.png";
import mapleridge from "../../images/partner_icons/mapleridge.png";
import stgeorges from "../../images/partner_icons/stgeorges.png";
import pgatour from "../../images/partner_icons/pgatour.png";
import sunshinecoast from "../../images/partner_icons/sunshinecoast.png";
import greaterheights from "../../images/partner_icons/greaterheights.png";
import talmud from "../../images/partner_icons/talmud.png";
import kingdavid from "../../images/partner_icons/kingdavid.png";
import rcs from "../../images/partner_icons/rcs.png";
import sarah from "../../images/partner_icons/sarah.png";
import yale from "../../images/partner_icons/yale.png";

import { responsive } from "../../utils";

const imageLinks = [
  mapleridge,
  sunshinecoast,
  stgeorges,
  kingdavid,
  sarah,
  talmud,
  pgatour,
  fraser,
  yale,
  rcs,
  greaterheights,
];

const Partners = (props) => {
  const w = props.viewportWidth;
  return (
    <CentralSection style={{ flexDirection: "column" }} backgroundColor="white">
      <div style={{ margin: "4rem 0rem 6rem 0rem" }}>
        <Carousel viewportWidth={w} />
      </div>
    </CentralSection>
  );
};

const Carousel = (props) => {
  const w = props.viewportWidth;
  const partnerLogoHeight = responsive(w, "70rem", "90rem", "110rem", "110rem");
  // Alice carousel for products
  const handleDragStart = (e) => e.preventDefault();
  const productCrouselItems = imageLinks.map((l) => (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        height={partnerLogoHeight}
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
