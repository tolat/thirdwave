import "./App.css";
import Banner1 from "./components/Home/Banner1";
import NavBar from "./components/Nav/NavBar";
import { useWindowSize } from "usehooks-ts";
import ThirdwaveBlurb from "./components/Home/ThirdwaveBlurb";
import Partners from "./components/Home/Partners";
import { useState } from "react";

import Testimonials from "./components/Home/Testimonials";
import Footer from "./components/Footer/Footer";
import NavDrawer from "./components/Nav/NavDrawer";
import Flash from "./components/Flash/Flash";
import ContactModal from "./components/Modals/ContactModal";

function App() {
  const { width } = useWindowSize();
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
      <NavDrawer />
      <NavBar viewportWidth={width} setContactModalVis={setContactModalVis} />
      <Banner1 viewportWidth={width} />
      <ThirdwaveBlurb viewportWidth={width} />
      <Partners viewportWidth={width} />
      <Testimonials viewportWidth={width} />
      <Footer viewportWidth={width} />
    </div>
  );
}

export default App;
