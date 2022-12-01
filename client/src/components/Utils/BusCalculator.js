import styles from "./BusCalculator.module.css";
import GeneralInput from "../UI/GeneralInput";

const BusCalculator = (props) => {
  const themeStylesInput =
    props.theme == "light"
      ? { borderBottom: "1px solid darkgrey", color: "black" }
      : {};
  const themeStylesClasses = props.theme == "light" ? "invertFilter" : "";

  return (
    <div className={props.className}>
      <GeneralInput
        label="Adults"
        type="number"
        placeholder="Enter Number"
        /*  inputRef={userNameRef} */
        required={true}
        customClasses={themeStylesClasses}
        inputStyle={themeStylesInput}
      />
      <GeneralInput
        label="Children"
        type="number"
        placeholder="Enter Number"
        /*  inputRef={userNameRef} */
        required={true}
        customClasses={themeStylesClasses}
        inputStyle={themeStylesInput}
      />
      <div className={styles.calculatorOutputContainer}>
        <div className={themeStylesClasses}>Recommended Buses</div>
        <div id="busCalculatorOutput" className={styles.calculatorOutput}>
          Enter passenger qtys
        </div>
      </div>
    </div>
  );
};

export default BusCalculator;
