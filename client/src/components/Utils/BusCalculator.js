import styles from "./BusCalculator.module.css";
import materialStyles from "../UI/MaterialInputs.module.css";
import { MaterialTextInput } from "../UI/MaterialInputs";
import { useState } from "react";
import { responsive } from "../../utils";
import { useWindowSize } from "usehooks-ts";
import { Spacer } from "../Modals/FormUtils";

const BusCalculator = (props) => {
  const { width } = useWindowSize();
  const themeStylesClasses = props.theme == "light" ? "invertFilter" : "";
  const [numSmallBuses, setNumSmallBuses] = useState("0");
  const [numMediumBuses, setNumMediumBuses] = useState("0");
  const [numLargeBuses, setNumLargeBuses] = useState("0");
  const scaleCalcOutputs = responsive(width, "0.8", "1", "1", "1");

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
          label="Adults (10+ yrs)"
          type="number"
          onChange={updateCalculator}
          inputRef={props.formRefs.numAdults}
          style={{
            boxSizing: "border-box",
            width: "100%",
          }}
          required
        />
        <div style={{ width: "2rem" }}></div>
        <div className={materialStyles.formSpacer} />
        <MaterialTextInput
          label="Children (0-10 yrs)"
          type="number"
          onChange={updateCalculator}
          inputRef={props.formRefs.numChildren}
          style={{
            boxSizing: "border-box",
            width: "100%",
          }}
          required
        />
      </div>

      <div className={styles.calculatorOutputContainer}>
        <div className={`${styles.calculatorOutput} ${themeStylesClasses}`}>
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
            },
          ].map((outputItem) => (
            <div
              key={outputItem.key}
              className={styles.outputItemOuterContainer}
              style={{ transform: `scale(${scaleCalcOutputs})` }}>
              <div className={styles.outputItemContainer}>
                <div className={styles.outputItemLabel}>{outputItem.label}</div>
                <div className={styles.outputItemQuantity}>
                  {outputItem.qty}
                </div>
              </div>
              <div className={styles.outputItemCapacities}>
                {outputItem.children} Children or {outputItem.adults} Adults
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusCalculator;
