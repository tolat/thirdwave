import styles from "./NavBar.module.css";
import logo from "../../images/logo2.png";
import React, { useState } from "react";
import { responsive, useScrollPosition, handleToggleModal } from "../../utils";
import { Turn as Hamburger } from "hamburger-react";
import { toggleNavDrawer } from "../../utils";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";
import { borderLeft } from "@mui/system";

const NavBar = (props) => {
  const w = props.viewportWidth;
  const scrollPosition = useScrollPosition();
  const [isOpen, setOpen] = useState(false);
  const horizontalButtonsDisplay = responsive(w, "none");
  const burgerMenuDisplay = responsive(w, "flex");
  const reduceNavbarHeigthOnScroll = 2;

  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function capNumber(num, cap) {
    return num > cap ? cap : num;
  }

  const bgOpacity = capNumber(scrollPosition / convertRemToPixels(10), 1);

  const barHeight = `${
    5 -
    capNumber(
      (reduceNavbarHeigthOnScroll * scrollPosition) / convertRemToPixels(10),
      reduceNavbarHeigthOnScroll
    )
  }rem`;

  const buttonHeight =
    scrollPosition > convertRemToPixels(10) ? "1.9rem" : "3rem";

  const buttonBackgroundImage =
    scrollPosition > convertRemToPixels(10) ? "none" : "";

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  const onQuoteButtonClick = () => {
    handleToggleModal(props.setQuoteModalVis);
  };

  const logoMarginTop = `${
    0.8 - capNumber((0.8 * scrollPosition) / convertRemToPixels(10), 0.8)
  }rem`;

  return (
    <React.Fragment>
      <div
        className={styles.background}
        style={{ opacity: bgOpacity, height: barHeight }}></div>
      <div className={styles.container} style={{ height: barHeight }}>
        <div className={styles.innerContainer}>
          <div
            className={styles.logo}
            style={{
              backgroundImage: `url("${logo}")`,
              marginTop: logoMarginTop,
            }}></div>
          <div
            className={styles.buttons}
            style={{ display: horizontalButtonsDisplay }}>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}>
              <NavLink
                className={(navData) => (navData.isActive ? "bold" : "")}
                to="/home">
                Home
              </NavLink>
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}>
              <NavLink
                id="aboutButton"
                className={(navData) => (navData.isActive ? "bold" : "")}
                to="/about">
                About / FAQ
              </NavLink>
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}>
              <NavLink
                id="servicesButton"
                className={(navData) => (navData.isActive ? "bold" : "")}
                to="/services">
                Services
              </NavLink>
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}
              onClick={onContactButtonClick}>
              Contact
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
                fontWeight: "bold",
              }}
              onClick={onQuoteButtonClick}>
              GET QUOTE
            </NavButton>
          </div>
        </div>
      </div>
      <div
        className={`${styles.burgerButton} invertFilter`}
        style={{ height: barHeight, display: burgerMenuDisplay }}
        onClick={toggleNavDrawer}
        id="burgerMenu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
