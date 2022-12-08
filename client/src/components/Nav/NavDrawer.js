import styles from "./NavDrawer.module.css";
import NavButton from "./NavButton";
import { toggleModal, clickBurgerMenuIcon } from "../../utils";
import { NavLink } from "react-router-dom";
import { style } from "@mui/system";

const NavDrawer = (props) => {
  const onContactButtonClick = () => {
    toggleModal(props.setContactModalVis);
    clickBurgerMenuIcon(true);
  };

  const onQuoteButtonClick = () => {
    toggleModal(props.setQuoteModalVis);
    clickBurgerMenuIcon(true);
  };

  const onNavButtonClick = () => {
    clickBurgerMenuIcon(true);
  };

  return (
    <div id="navDrawer" className={styles.container}>
      <div className={styles.dropdownButtons}>
        <div>
          <NavButton classname={styles.button}>
            <NavLink
              className={(navData) => (navData.isActive ? "bold" : "")}
              to="/home"
              onClick={onNavButtonClick}>
              Home
            </NavLink>
          </NavButton>
        </div>
        <div>
          <NavButton classname={styles.button}>
            <NavLink
              className={(navData) => (navData.isActive ? "bold" : "")}
              to="/about"
              onClick={onNavButtonClick}>
              About / FAQ
            </NavLink>
          </NavButton>
        </div>
        <div>
          <NavButton classname={styles.button}>
            <NavLink
              className={(navData) => (navData.isActive ? "bold" : "")}
              to="/services"
              onClick={onNavButtonClick}>
              Services
            </NavLink>
          </NavButton>
        </div>
        <div>
          <NavButton classname={styles.button} onClick={onContactButtonClick}>
            Contact
          </NavButton>
        </div>
        <div>
          <NavButton classname={styles.button} onClick={onQuoteButtonClick}>
            Get Quote
          </NavButton>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
