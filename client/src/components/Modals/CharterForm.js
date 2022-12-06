import * as utils from "../../utils";
import { useWindowSize } from "usehooks-ts";
import BusCalculator from "../Utils/BusCalculator";
import React from "react";
import {
  MaterialTextInput,
  MaterialDatePicker,
  MaterialTimePicker,
  MaterialCheckbox,
} from "../UI/MaterialInputs";

import { SectionContainer, Spacer, DetailsTextarea } from "./FormUtils";

export const charterFields = [
  "name",
  "group",
  "phone",
  "email",
  "pickupAddress",
  "destinationAddress",
  "destinationName",
  "pickupDate",
  "returnDate",
  "alternatePickupDate",
  "alternateReturnDate",
  "leavingDepartureTime",
  "returnDepartureTime",
  "returnArrivalTime",
  "numChildren",
  "numAdults",
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
          label="Name"
          inputRef={props.refs.name}
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialTextInput
          label="Organization/Group"
          inputRef={props.refs.group}
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
      <SectionContainer>
        <MaterialTextInput
          label="Pickup Address"
          inputRef={props.refs.pickupAddress}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Destination Address"
          inputRef={props.refs.destinationAddress}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Destination Name"
          inputRef={props.refs.destinationName}
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialDatePicker
          inputRef={props.refs.pickupDate}
          label="Pickup Date"
          style={{ width: "100%" }}
          required
        />
        <Spacer />

        <MaterialDatePicker
          inputRef={props.refs.returnDate}
          label="Return Date"
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialDatePicker
          inputRef={props.refs.alternatePickupDate}
          label="Alternate Pickup Date"
          style={{ width: "100%" }}
          subText="If buses are unavailable on first choice dates"
        />
        <Spacer />
        <MaterialDatePicker
          inputRef={props.refs.alternateReturnDate}
          label="Alternate Return Date"
          style={{ width: "100%" }}
          subText="If buses are unavailable on first choice dates"
        />
      </SectionContainer>
      <SectionContainer>
        <MaterialTimePicker
          inputRef={props.refs.leavingDepartureTime}
          label="Leaving Departure Time"
          style={{ width: "100%" }}
          required
          subText={"Leaving trip departure time from pickup address."}
        />
        <Spacer />
        <MaterialTimePicker
          inputRef={props.refs.returnDepartureTime}
          label="Return Departure Time"
          style={{ width: "100%" }}
          required
          subText={"Return trip departure time from destination address."}
        />
        <Spacer />
        <MaterialTimePicker
          inputRef={props.refs.returnArrivalTime}
          label="Return Arrival Time"
          style={{ width: "100%" }}
          required
          subText={"Return trip arrival time back at pickup address."}
        />
      </SectionContainer>
      <BusCalculator formRefs={props.refs} theme={busCalcTheme} />

      <MaterialCheckbox
        label="Luggage Bays"
        subLabel="Small backpacks/daypacks do no require luggage bays"
        inputRef={props.refs.luggage}
        required
      />
      <DetailsTextarea
        inputRef={props.refs.details}
        placeholder={
          "Please provide a name and number for the main trip contact (if applicable), as well as any additional trip details."
        }
        headerText={"Additional Details"}
        textareaKey={"details"}
        rows={"4"}
      />
    </React.Fragment>
  );
};

export default CharterForm;
