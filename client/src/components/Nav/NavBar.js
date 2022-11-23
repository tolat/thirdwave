import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Thirdwave Logo</div>
      <div className={styles.buttons}>
        <NavButton>Home</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Services</NavButton>
        <NavButton>Contact</NavButton>
      </div>
    </div>
  );
};

const NavButton = (props) => {
  return <button className={styles.navButton}>{props.children}</button>;
};

export default NavBar;
