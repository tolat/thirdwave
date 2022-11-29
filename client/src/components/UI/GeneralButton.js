import styles from "./GeneralButton.module.css";

const GeneralButton = (props) => {
  return (
    <button
      className={`${styles.myButton} ${props.customClasses}`}
      style={props.style}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default GeneralButton;
