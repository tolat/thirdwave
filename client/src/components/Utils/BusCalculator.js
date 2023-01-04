import styles from "./BusCalculator.module.css";
import materialStyles from "../UI/MaterialInputs.module.css";
import { MaterialTextInput } from "../UI/MaterialInputs";
import { useState } from "react";
import { responsive } from "../../utils";
import { useWindowSize } from "usehooks-ts";

const BusCalculator = (props) => {
  const { width } = useWindowSize();
  const themeStylesClasses = props.theme == "light" ? "invertFilter" : "";
  const [numSmallBuses, setNumSmallBuses] = useState("0");
  const [numMediumBuses, setNumMediumBuses] = useState("0");
  const [numLargeBuses, setNumLargeBuses] = useState("0");
  const outputFlexDirection = responsive(width, "column")
  const outputPadding = responsive(width, "0.1rem 0 0.5rem 0")

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
      parseInt(props.formRefs.numChildren.current.value) || 0,
      parseInt(props.formRefs.numAdults.current.value) || 0
    );
    setNumSmallBuses(qtys.small);
    setNumMediumBuses(qtys.medium);
    setNumLargeBuses(qtys.large);
  };

  return (
    <div className={props.className}>
      <div className={styles.inputsContainer}>
        <MaterialTextInput
          label="Adults"
          type="number"
          onChange={updateCalculator}
          inputRef={props.formRefs.numAdults}
          style={{
            boxSizing: "border-box",
            width: "100%",
          }}
          required
          subText="10+ yrs or Grade 5+"
        />
        <div style={{ width: "2rem" }}></div>
        <div className={materialStyles.formSpacer} />
        <MaterialTextInput
          label="Children"
          type="number"
          onChange={updateCalculator}
          inputRef={props.formRefs.numChildren}
          style={{
            boxSizing: "border-box",
            width: "100%",
          }}
          required
          subText="0-10 yrs or Grade K-5"
        />
      </div>

      <div>
        <div style={{flexDirection: outputFlexDirection}} className={`${styles.calculatorOutput} ${themeStylesClasses}`}>
          {[
            {
              key: Math.random(),
              label: "Small Buses",
              qty: numSmallBuses,
              children: busCapacities.small.children,
              adults: busCapacities.small.adults,
            },
            {
              key: Math.random(),
              label: "Medium Buses",
              qty: numMediumBuses,
              children: busCapacities.medium.children,
              adults: busCapacities.medium.adults,
            },
            {
              key: Math.random(),
              label: "Large Buses",
              qty: numLargeBuses,
              children: busCapacities.large.children,
              adults: busCapacities.large.adults,
              additionalSubtext: "(Limited Availability)",
            },
          ].map((outputItem) => (
            <div
              key={outputItem.key}
              className={styles.outputItemOuterContainer}
              style={{padding: outputPadding}}>
              <div className={styles.outputItemContainer}>
                <div className={styles.outputItemLabel}>{outputItem.label}</div>
                <div className={styles.outputItemQuantity}>
                  {outputItem.qty}
                </div>
              </div>
              <div className={styles.outputItemCapacities}>
                {outputItem.children} Children or {outputItem.adults} Adults{" "}
                <br />
                {outputItem.additionalSubtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusCalculator;
