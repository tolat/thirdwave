import styles from "./CharterForm.module.css";
import materialStyles from "../UI/MaterialInputs.module.css";
import * as utils from "../../utils";
import { useWindowSize } from "usehooks-ts";
import { DetailsTextarea } from "./QuoteModal";
import BusCalculator from "../Utils/BusCalculator";
import React from "react";
import {
  MaterialTextInput,
  MaterialDatePicker,
  MaterialTimePicker,
} from "../UI/MaterialInputs";

export const charterFields = [
  "group",
  "pickup",
  "destination",
  "name",
  "phone",
  "email",
  "numAdults",
  "numChildren",
  "pickupDate",
  "secondDate",
  "pickupTime",
  "returnTime",
  "luggage",
  "details",
];

const CharterForm = (props) => {
  const { width } = useWindowSize();
  const inputDisplay = utils.responsive(width, "column");
  const busCalcTheme = utils.responsive(width, "", "", "", "");
  const spacerDisplay = utils.responsive(width, "none");

  const Spacer = () => {
    return (
      <div
        className={materialStyles.formSpacer}
        style={{ display: spacerDisplay }}
      />
    );
  };

  const SectionContainer = (props) => {
    return (
      <div
        className={styles.sectionSubContainer}
        style={{ flexDirection: inputDisplay }}>
        {props.children}
      </div>
    );
  };

  return (
    <React.Fragment>
      <SectionContainer>
        <MaterialTextInput
          label="Organization/Group"
          inputRef={props.refs.group}
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialTextInput
          label="Pickup Address"
          inputRef={props.refs.pickup}
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialTextInput
          label="Destination Address"
          inputRef={props.refs.destination}
          style={{ width: "100%" }}
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialTextInput
          label="Name"
          inputRef={props.refs.name}
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialTextInput
          label="Phone Number"
          type="tel"
          inputRef={props.refs.phone}
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialTextInput
          label="Email"
          type="email"
          inputRef={props.refs.email}
          style={{ width: "100%" }}
        />
      </SectionContainer>
      <BusCalculator formRefs={props.refs} theme={busCalcTheme} />
      <SectionContainer>
        <MaterialDatePicker
          inputRef={props.refs.pickupDate}
          label="Pickup Date"
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialDatePicker
          inputRef={props.refs.secondDate}
          label="Second Date (optional)"
          style={{ width: "100%" }}
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialTimePicker
          inputRef={props.refs.pickupTime}
          label="Pickup Time"
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialTimePicker
          inputRef={props.refs.returnTime}
          label="Return Time"
          style={{ width: "100%" }}
        />
        <Spacer />
        <MaterialTextInput
          label="Luggage Bays? (yes/no)"
          inputRef={props.refs.luggage}
          style={{ width: "100%" }}
        />
      </SectionContainer>
      <DetailsTextarea formRefs={props.refs} />
    </React.Fragment>
  );
};

export default CharterForm;
