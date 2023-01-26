import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.navButton} ${props.className}`}
      style={props.style}>
      {props.children}
    </button>
  );
};

export default NavButton;
