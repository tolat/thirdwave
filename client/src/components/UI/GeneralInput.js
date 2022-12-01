import styles from "./GeneralInput.module.css";

const GeneralInput = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      <div className={`${styles.label} ${props.customClasses}`}>
        {props.label}
      </div>
      <input
        className={`${styles.input} ${props.customClasses}`}
        type={props.type}
        placeholder={props.placeholder}
        style={props.inputStyle}
        onChange={props.onChange}
        value={props.value}
        ref={props.inputRef}
        required={props.required}
      />
      {props.children}
    </div>
  );
};

export default GeneralInput;
