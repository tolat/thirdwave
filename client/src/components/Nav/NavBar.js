import styles from "./NavBar.module.css";
import logo from "../../images/logo2.png";

const NavBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div
          className={styles.logo}
          style={{ backgroundImage: `url("${logo}")` }}></div>
        <div className={styles.buttons}>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Services</NavButton>
          <NavButton>Contact</NavButton>
          <NavButton>FAQ</NavButton>
        </div>
      </div>
    </div>
  );
};

const NavButton = (props) => {
  return <button className={styles.navButton}>{props.children}</button>;
};

export default NavBar;
