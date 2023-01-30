import "./App.css";
import { useWindowSize } from "usehooks-ts";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

import Flash from "./components/Flash/Flash";
import ContactModal from "./components/Modals/ContactModal";
import QuoteModal from "./components/Modals/QuoteModal";
import NavDrawer from "./components/Nav/NavDrawer";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

import HOME from "./pages/Home/HOME";
import SERVICES from "./pages/Services/SERVICES";
import ABOUT from "./pages/About/ABOUT";
import { responsive } from "./utils";

function App() {
  const initModalVis = { o: "0", v: "hidden" };
  const { width, height } = useWindowSize();
  const [contactModalVis, setContactModalVis] = useState(initModalVis);
  const [contactModaltextareaPlaceholder, setContactModaltextareaPlaceholder] =
    useState(false);
  const [quoteModalVis, setQuoteModalVis] = useState(initModalVis);
  const bgAttachment = responsive(
    width,
    "scroll",
    `${height > 0.6 * width ? "scroll" : "fixed"}`,
    `${height > 0.6 * width ? "scroll" : "fixed"}`,
    `${height > 0.6 * width ? "scroll" : "fixed"}`
  );

  const [heroProps, setHeroProps] = useState({
    containerMinHeight: ["40rem", "40rem", "55rem", "55rem"],
    bgAttachment: bgAttachment,
    bgSize: "cover",
    bgOpacity: "0.8",
    setContactModaltextareaPlaceholder: setContactModaltextareaPlaceholder,
  });

  useEffect(() => {
    setHeroProps((prevState) => {
      prevState.bgAttachment = bgAttachment;
      return prevState;
    });
  }, [bgAttachment]);
  
  console.log(process.env)

  return (
    <React.Fragment>
      <Flash id="appFlash" />
      <ContactModal
        viewportWidth={width}
        modalVis={contactModalVis}
        setModalVis={setContactModalVis}
        contactModaltextareaPlaceholder={contactModaltextareaPlaceholder}
        style={{padding: responsive(width, "1rem", ),marginTop: "-2rem"}}
      />
      <QuoteModal
        viewportWidth={width}
        modalVis={quoteModalVis}
        setModalVis={setQuoteModalVis}
        style={{padding: responsive(width, "1rem"),marginTop: "-2rem"}}
      />
      <NavDrawer
        setContactModalVis={setContactModalVis}
        setQuoteModalVis={setQuoteModalVis}
        setContactModaltextareaPlaceholder={setContactModaltextareaPlaceholder}
      />
      <NavBar
        viewportWidth={width}
        setContactModalVis={setContactModalVis}
        setQuoteModalVis={setQuoteModalVis}
        setContactModaltextareaPlaceholder={setContactModaltextareaPlaceholder}
      />
      <Hero heroProps={heroProps} viewportWidth={width} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <HOME
              setHeroProps={setHeroProps}
              heroProps={heroProps}
              viewportWidth={width}
              setContactModalVis={setContactModalVis}
            />
          }
        />
        <Route
          path="/about"
          element={
            <ABOUT
              setHeroProps={setHeroProps}
              heroProps={heroProps}
              viewportWidth={width}
            />
          }
        />
        <Route
          path="/services"
          element={
            <SERVICES
              setHeroProps={setHeroProps}
              heroProps={heroProps}
              viewportWidth={width}
              setQuoteModalVis={setQuoteModalVis}
            />
          }
        />
      </Routes>
      <Footer viewportWidth={width} />
    </React.Fragment>
  );
}

export default App;
