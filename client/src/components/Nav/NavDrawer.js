import styles from "./NavDrawer.module.css";
import NavButton from "./NavButton";

const NavDrawer = (props) => {
  return (
    <div id="navDrawer" className={styles.container}>
      <div className={styles.dropdownButtons}>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }}>Home</NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }}>About</NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }}>Services</NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }}>Contact</NavButton>
        </div>
        <div>
          <NavButton style={{ fontSize: "1.3rem" }}>FAQ</NavButton>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
