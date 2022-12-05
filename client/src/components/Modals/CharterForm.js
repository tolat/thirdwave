import * as utils from "../../utils";
import { useWindowSize } from "usehooks-ts";
import BusCalculator from "../Utils/BusCalculator";
import React from "react";
import {
  MaterialTextInput,
  MaterialDatePicker,
  MaterialTimePicker,
} from "../UI/MaterialInputs";

import { SectionContainer, Spacer, DetailsTextarea } from "./FormUtils";

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
  const busCalcTheme = utils.responsive(width, "", "", "", "");

  return (
    <React.Fragment>
      <SectionContainer>
        <MaterialTextInput
          label="Organization/Group"
          inputRef={props.refs.group}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Pickup Address"
          inputRef={props.refs.pickup}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Destination Address"
          inputRef={props.refs.destination}
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialTextInput
          label="Name"
          inputRef={props.refs.name}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Phone Number"
          type="tel"
          inputRef={props.refs.phone}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Email"
          type="email"
          inputRef={props.refs.email}
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <BusCalculator formRefs={props.refs} theme={busCalcTheme} />
      <SectionContainer>
        <MaterialDatePicker
          inputRef={props.refs.pickupDate}
          label="Pickup Date"
          style={{ width: "100%" }}
          required
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
          required
        />
        <Spacer />
        <MaterialTimePicker
          inputRef={props.refs.returnTime}
          label="Return Time"
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Luggage Bays?"
          inputRef={props.refs.luggage}
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <DetailsTextarea
        refs={props.refs}
        placeholder={
          "Please provide a name and number for the main trip contact (if applicable), as well as any additional trip details."
        }
      />
    </React.Fragment>
  );
};

export default CharterForm;
