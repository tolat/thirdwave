import styles from "./BusCalculator.module.css";
import GeneralInput from "../UI/GeneralInput";
import { useRef, useState } from "react";

const BusCalculator = (props) => {
  const themeStylesInput =
    props.theme == "light"
      ? { borderBottom: "1px solid darkgrey", color: "black" }
      : {};
  const themeStylesClasses = props.theme == "light" ? "invertFilter" : "";

  const [numSmallBuses, setNumSmallBuses] = useState("0");
  const [numMediumBuses, setNumMediumBuses] = useState("0");
  const [numLargeBuses, setNumLargeBuses] = useState("0");
  const numAdults = useRef();
  const numChildren = useRef();

  const busCapacities = {
    small: { adults: 20, children: 29 },
    medium: { adults: 46, children: 70 },
    large: { adults: 56, children: 84 },
  };

  const calculateBuses = (children, adults) => {
    const childAdultRatio =
      (busCapacities.small.adults / busCapacities.small.children +
        busCapacities.medium.adults / busCapacities.medium.children +
        busCapacities.large.adults / busCapacities.large.children) /
      3;

    const combinedPassengers = adults + childAdultRatio * children;
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
    const qtys = calculateBuses(
      parseInt(numChildren.current.value) || 0,
      parseInt(numAdults.current.value) || 0
    );
    setNumSmallBuses(qtys.small);
    setNumMediumBuses(qtys.medium);
    setNumLargeBuses(qtys.large);
  };

  return (
    <div className={props.className}>
      <GeneralInput
        label="Adults (Grade 5+)"
        type="number"
        placeholder="Enter Number"
        customClasses={themeStylesClasses}
        inputStyle={themeStylesInput}
        onChange={updateCalculator}
        inputRef={numAdults}
      />
      <GeneralInput
        label="Children (Grade K-4)"
        type="number"
        placeholder="Enter Number"
        customClasses={themeStylesClasses}
        inputStyle={themeStylesInput}
        onChange={updateCalculator}
        inputRef={numChildren}
      />
      <div className={styles.calculatorOutputContainer}>
        <div className={themeStylesClasses}>Recommended Buses</div>
        <div className={`${styles.calculatorOutput} ${themeStylesClasses}`}>
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
            <div
              key={outputItem.key}
              className={styles.outputItemOuterContainer}>
              <div className={styles.outputItemContainer}>
                <div className={styles.outputItemLabel}>{outputItem.label}</div>
                <div className={styles.outputItemQuantiy}>{outputItem.qty}</div>
              </div>
              <div className={styles.outputItemCapacities}>
                ({outputItem.children} Children or {outputItem.adults} Adults)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusCalculator;
