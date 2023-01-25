import styles from "./ContactForm.module.css";
import { SectionContainer, Spacer, DetailsTextarea } from "./FormUtils";
import { MaterialTextInput } from "../UI/MaterialInputs";
import React from "react";

const ContactForm = (props) => {
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
          label="Phone"
          inputRef={props.refs.phone}
          style={{ width: "100%" }}
          required
        />
        <Spacer />
        <MaterialTextInput
          label="Email"
          inputRef={props.refs.email}
          style={{ width: "100%" }}
          required
        />
      </SectionContainer>
      <DetailsTextarea
        inputRef={props.refs.message}
        placeholder={props.contactModaltextareaPlaceholder || "Type your message here!"}
        headerText={"Message *"}
        textareaKey={"details"}
        rows={"fill"}
      />
    </React.Fragment>
  );
};

export default ContactForm;
