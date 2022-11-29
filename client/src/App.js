import "./App.css";
import { useWindowSize } from "usehooks-ts";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

import Flash from "./components/Flash/Flash";
import ContactModal from "./components/Modals/ContactModal";
import NavDrawer from "./components/Nav/NavDrawer";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

import heroBackground from "./images/bus1.jpeg";

import HOME from "./pages/Home/HOME";
import SERVICES from "./pages/Services/SERVICES";

function App() {
  const { width } = useWindowSize();
  const [contactModalVis, setContactModalVis] = useState({
    o: "0",
    v: "hidden",
  });
  const [heroProps, setHeroProps] = useState({
    responsiveHeights: ["40rem", "45rem", "45rem", "45rem"],
    bgImage: heroBackground,
    bgAttachment: "fixed",
    bgSize: "cover",
    bgOpacity: "0.7",
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
      <Hero heroProps={heroProps} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<HOME setHeroProps={setHeroProps} viewportWidth={width} />}
        />
        <Route
          path="/services"
          element={
            <SERVICES setHeroProps={setHeroProps} viewportWidth={width} />
          }
        />
      </Routes>
      <Footer viewportWidth={width} />
    </div>
  );
}

export default App;
