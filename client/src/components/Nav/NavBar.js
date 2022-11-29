import styles from "./NavBar.module.css";
import logo from "../../images/logo2.png";
import React, { useState } from "react";
import { responsive, useScrollPosition, handleToggleModal } from "../../utils";
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
    5 - capNumber((2 * scrollPosition) / convertRemToPixels(10), 2)
  }rem`;
  const buttonHeight =
    scrollPosition > convertRemToPixels(10) ? "1.8rem" : "3rem";

  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
  };

  return (
    <React.Fragment>
      <div
        className={styles.background}
        style={{ opacity: bgOpacity, height: barHeight }}></div>
      <div className={styles.container} style={{ height: barHeight }}>
        <div className={styles.innerContainer}>
          <div
            className={styles.logo}
            style={{ backgroundImage: `url("${logo}")` }}></div>
          <div
            className={styles.buttons}
            style={{ display: horizontalButtonsDisplay }}>
            <NavButton style={{ height: buttonHeight }}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.activePage : ""
                }
                to="/home">
                Home
              </NavLink>
            </NavButton>
            <NavButton style={{ height: buttonHeight }}>About</NavButton>
            <NavButton style={{ height: buttonHeight }}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.activePage : ""
                }
                to="/services">
                Services
              </NavLink>
            </NavButton>
            <NavButton
              style={{ height: buttonHeight }}
              onClick={onContactButtonClick}>
              Contact
            </NavButton>
            <NavButton style={{ height: buttonHeight }}>FAQ</NavButton>
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
