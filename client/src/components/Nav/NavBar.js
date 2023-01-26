import styles from "./NavBar.module.css";
import logo from "../../images/logo4.png";
import React, { useState } from "react";
import {
  responsive,
  useScrollPosition,
  toggleModal,
  convertRemToPixels,
} from "../../utils";
import { Turn as Hamburger } from "hamburger-react";
import { toggleNavDrawer } from "../../utils";
import NavButton from "./NavButton";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const w = props.viewportWidth;
  const scrollPosition = useScrollPosition();
  const [isOpen, setOpen] = useState(false);
  const horizontalButtonsDisplay = responsive(w, "none");
  const burgerMenuDisplay = responsive(w, "flex");
  const reduceNavbarHeigthOnScroll = 2;
  const initalBarHeight = responsive(w, "3rem", "5rem");

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

    const quoteButtonBorder =`2px solid rgb(250,250,250,${1-capNumber(scrollPosition/convertRemToPixels(4),1)})`;

  const logoMarginTop = `${
    0.8 - capNumber((0.8 * scrollPosition) / convertRemToPixels(10), 0.8)
  }rem`;

  const onContactButtonClick = () => {
    props.setContactModaltextareaPlaceholder(false);
    toggleModal(props.setContactModalVis);
  };

  const onQuoteButtonClick = () => {
    toggleModal(props.setQuoteModalVis);
  };

  const handleLogoClick = () => {
    document.getElementById("homeButton").click();
  };

  return (
    <React.Fragment>
      <div
        className={styles.background}
        style={{ opacity: bgOpacity, height: barHeight }}
      ></div>
      <div className={styles.container} style={{ height: barHeight }}>
        <div className={styles.innerContainer}>
          <div
            className={styles.logo}
            style={{
              backgroundImage: `url("${logo}")`,
              marginTop: logoMarginTop,
            }}
            onClick={handleLogoClick}
          />
          <div
            className={styles.buttons}
            style={{ display: horizontalButtonsDisplay }}
          >
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}
            >
              <NavLink
                className={(navData) => (navData.isActive ? "activePage" : "")}
                to="/home"
                id="homeButton"
              >
                Home
              </NavLink>
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}
            >
              <NavLink
                id="aboutButton"
                className={(navData) => (navData.isActive ? "activePage" : "")}
                to="/about"
              >
                About / FAQ
              </NavLink>
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}
            >
              <NavLink
                id="servicesButton"
                className={(navData) => (navData.isActive ? "activePage" : "")}
                to="/services"
              >
                Services
              </NavLink>
            </NavButton>
            <NavButton
              style={{
                backgroundImage: buttonBackgroundImage,
                height: buttonHeight,
              }}
              onClick={onContactButtonClick}
            >
              Contact
            </NavButton>
            <NavButton
              className={styles.quoteButton}
              style={{
                height: buttonHeight,
                backgroundImage: "none",
                border: quoteButtonBorder
              }}
              onClick={onQuoteButtonClick}
            >
              Get Quote
            </NavButton>
          </div>
        </div>
      </div>
      <div
        className={`${styles.burgerButton} invertFilter`}
        style={{ height: barHeight, display: burgerMenuDisplay }}
        onClick={toggleNavDrawer}
        id="burgerMenu"
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
