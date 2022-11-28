import styles from "./GeneralButton.module.css";

const GeneralButton = (props) => {
  return (
    <button
      className={styles.myButton}
      style={props.style}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default GeneralButton;
