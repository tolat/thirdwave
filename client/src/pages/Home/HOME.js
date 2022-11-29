import { useState } from "react";
import Flash from "../../components/Flash/Flash";
import NavDrawer from "../../components/Nav/NavDrawer";
import ContactModal from "../../components/Modals/ContactModal";
import NavBar from "../../components/Nav/NavBar";
import Banner1 from "./Banner1";
import ThirdwaveBlurb from "./ThirdwaveBlurb";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Footer from "../../components/Footer/Footer";

const HOME = (props) => {
  const width = props.viewportWidth;
  const [contactModalVis, setContactModalVis] = useState({
    o: "0",
    v: "hidden",
  });

  return (
    <div className="App">
      <Flash id="appFlash" />
      <ContactModal
        viewportWidth={width}
        modalVis={contactModalVis}
        setModalVis={setContactModalVis}
      />
      <NavDrawer setContactModalVis={setContactModalVis} />
      <NavBar viewportWidth={width} setContactModalVis={setContactModalVis} />
      <Banner1 viewportWidth={width} />
      <ThirdwaveBlurb viewportWidth={width} />
      <Partners viewportWidth={width} />
      <Testimonials viewportWidth={width} />
      <Footer viewportWidth={width} />
    </div>
  );
};

export default HOME;
