import styles from "./NavBar.module.css";
import logo from "../../images/logo2.png";
import React, { useState } from "react";
import { useScrollPosition } from "../../utils";

const NavBar = (props) => {
  const scrollPosition = useScrollPosition();

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
          <div className={styles.buttons}>
            <NavButton style={{ height: buttonHeight }}>Home</NavButton>
            <NavButton style={{ height: buttonHeight }}>About</NavButton>
            <NavButton style={{ height: buttonHeight }}>Services</NavButton>
            <NavButton style={{ height: buttonHeight }}>Contact</NavButton>
            <NavButton style={{ height: buttonHeight }}>FAQ</NavButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const NavButton = (props) => {
  return (
    <button className={styles.navButton} style={props.style}>
      {props.children}
    </button>
  );
};

export default NavBar;
