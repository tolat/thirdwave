import styles from "./NavDrawer.module.css";
import NavButton from "./NavButton";
import { handleToggleModal, clickBurgerMenuIcon } from "../../utils";
import { NavLink } from "react-router-dom";

const NavDrawer = (props) => {
  const onContactButtonClick = () => {
    handleToggleModal(props.setContactModalVis);
    clickBurgerMenuIcon(true);
  };

  const onNavButtonClick = () => {
    clickBurgerMenuIcon(true);
  };

  return (
    <div id="navDrawer" className={styles.container}>
      <div className={styles.dropdownButtons}>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }} onClick={onNavButtonClick}>
            <NavLink
              className={(navData) => (navData.isActive ? "bold" : "")}
              to="/home">
              Home
            </NavLink>
          </NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }} onClick={onNavButtonClick}>
            <NavLink
              className={(navData) => (navData.isActive ? "bold" : "")}
              to="/about">
              About / FAQ
            </NavLink>
          </NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }} onClick={onNavButtonClick}>
            <NavLink
              className={(navData) => (navData.isActive ? "bold" : "")}
              to="/services">
              Services
            </NavLink>
          </NavButton>
        </div>
        <div>
          <NavButton
            style={{ fontSize: "1.3rem" }}
            onClick={onContactButtonClick}>
            Contact
          </NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }}>FAQ</NavButton>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
