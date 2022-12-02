import styles from "./BusCalculator.module.css";
import GeneralInput from "../UI/GeneralInput";
import { useState } from "react";

const BusCalculator = (props) => {
  const themeStylesInput =
    props.theme == "light"
      ? { borderBottom: "1px solid darkgrey", color: "black" }
      : {};
  const themeStylesClasses = props.theme == "light" ? "invertFilter" : "";

  const [numSmallBuses, setNumSmallBuses] = useState("0");
  const [numMediumBuses, setNumMediumBuses] = useState("0");
  const [numLargeBuses, setNumLargeBuses] = useState("0");

  const busCapacities = {
    small: { adults: 20, children: 20 },
    medium: { adults: 46, children: 70 },
    large: { adults: 54, children: 82 },
  };

  const calculateBuses = (children, adults) => {
    const combinedPassengers = adults + 0.65 * children;
    let remainingPassengers = combinedPassengers;

    let large = Math.floor(remainingPassengers / busCapacities.large.adults);
    remainingPassengers =
      remainingPassengers - large * busCapacities.large.adults;
    if (remainingPassengers > busCapacities.medium.adults) {
      large++;
      remainingPassengers = 0;
    }

    let medium = Math.floor(remainingPassengers / busCapacities.medium.adults);
    remainingPassengers =
      remainingPassengers - medium * busCapacities.medium.adults;
    if (remainingPassengers > busCapacities.small.adults) {
      medium++;
      remainingPassengers = 0;
    }

    let small = Math.ceil(remainingPassengers / busCapacities.small.adults);
    return { small, medium, large };
  };

  const updateCalculator = () => {
    const numChildren =
      parseInt(document.getElementById("busCalculatorChildrenInput").value) ||
      0;
    const numAdults =
      parseInt(document.getElementById("busCalculatorAdultsInput").value) || 0;

    const qtys = calculateBuses(numChildren, numAdults);
    setNumSmallBuses(qtys.small);
    setNumMediumBuses(qtys.medium);
    setNumLargeBuses(qtys.large);
  };

  return (
    <div className={props.className}>
      <GeneralInput
        id="busCalculatorAdultsInput"
        label="Adults (11+ yrs)"
        type="number"
        placeholder="Enter Number"
        customClasses={themeStylesClasses}
        inputStyle={themeStylesInput}
        onChange={updateCalculator}
      />
      <GeneralInput
        id="busCalculatorChildrenInput"
        label="Children (0-10 yrs)"
        type="number"
        placeholder="Enter Number"
        customClasses={themeStylesClasses}
        inputStyle={themeStylesInput}
        onChange={updateCalculator}
      />
      <div className={styles.calculatorOutputContainer}>
        <div className={themeStylesClasses}>Recommended Buses</div>
        <div
          id="busCalculatorOutput"
          className={`${styles.calculatorOutput} ${themeStylesClasses}`}>
          {[
            {
              key: Math.random(),
              label: "Small:",
              qty: numSmallBuses,
              children: busCapacities.small.children,
              adults: busCapacities.small.adults,
            },
            {
              key: Math.random(),
              label: "Medium:",
              qty: numMediumBuses,
              children: busCapacities.medium.children,
              adults: busCapacities.medium.adults,
            },
            {
              key: Math.random(),
              label: "Large:",
              qty: numLargeBuses,
              children: busCapacities.large.children,
              adults: busCapacities.large.adults,
            },
          ].map((outputItem) => (
            <div className={styles.outputItemOuterContainer}>
              <div className={styles.outputItemContainer}>
                <div className={styles.outputItemLabel}>{outputItem.label}</div>
                <div className={styles.outputItemQuantiy}>{outputItem.qty}</div>
              </div>
              <div className={styles.outputItemCapacities}>
                ({outputItem.children} Children, {outputItem.adults} Adults)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusCalculator;
