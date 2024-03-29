import { useWindowSize } from "usehooks-ts";
import styles from "./FormUtils.module.css";
import * as utils from "../../utils";
import modalStyles from "./Modal.module.css";
import GeneralButton from "../UI/GeneralButton";
import Spinner from "react-bootstrap/esm/Spinner";
import { useState } from "react";
import sendmail_icon from "../../images/icons/sendmail_icon.png";

import msg_icon from "../../images/icons/message_icon.png";

export const DetailsTextarea = (props) => {
  const { width } = useWindowSize();
  const textAreaBottMarg = utils.responsive(width, "2rem");

  return (
    <div style={{ marginBottom: textAreaBottMarg, marginTop: "1rem", display: "flex", flexDirection: "column", flexGrow: "1" }}>
      <div className={modalStyles.sectionHeader}>
        <div style={{ display: "flex", width: "100%" }}>
          <img
            className={modalStyles.inputIcon}
            src={msg_icon}
            alt="msg icon"
          />
          <div>{props.headerText}</div>
        </div>
      </div>

      <textarea
        ref={props.inputRef}
        className={styles.textArea}
        required
        placeholder={props.placeholder}
      />
    </div>
  );
};

export const Spacer = (props) => {
  const { width } = useWindowSize();
  const spacerDisplay = utils.responsive(width, "none");

  return (
    <div className={styles.spacer} style={{ display: spacerDisplay }}>
      {props.children}
    </div>
  );
};

export const SectionContainer = (props) => {
  const { width } = useWindowSize();

  const inputDisplay = utils.responsive(width, "column");

  return (
    <div
      className={styles.sectionSubContainer}
      style={{ flexDirection: inputDisplay }}
    >
      {props.children}
    </div>
  );
};

export const SelectField = (props) => {
  return (
    <div className={styles.selectFieldContainer}>
      Request Quote For:
      <select
        onChange={props.onChange}
        ref={props.inputRef}
        className={styles.selectInput}
        value={props.formState.type}
      >
        {[
          /* { key: Math.random(), value: "-" },
          { key: Math.random(), value: "School Routes" }, */
          { key: Math.random(), value: "Charters" },
          /* { key: Math.random(), value: "Shop Rental" },
          { key: Math.random(), value: "Service Regions" },
          { key: Math.random(), value: "Used Bus Sales" },
          { key: Math.random(), value: "Other" }, */
        ].map((o) => (
          <option key={o.key}>{o.value}</option>
        ))}
      </select>
    </div>
  );
};

export const NonButtonContainer = (props) => {
  const {width} = useWindowSize()
  const nbContainerPadding = utils.responsive(width, "0")
  const scrollbarDisplay = utils.responsive(width, 'noscroll')

  return (
    <div className={`${styles.nonButtonContainer} ${scrollbarDisplay}`} style={{padding: nbContainerPadding, margin: props.nbContainerMargin}}>
      {props.children}
    </div>
  );
};

export const SubmitButton = (props) => {
  const { width } = useWindowSize();
  const buttonFontSize = utils.responsive(width, "1.4rem");
  

  let formTypeRef = props.formTypeRef;

  // Create placeholder refs when type not relevant (i.e. used in contact form)
  if (!formTypeRef) {
    formTypeRef = { current: "none" };
  }

  return (
    <GeneralButton
      customClasses={styles.sendButton}
      style={{
        display:
          !formTypeRef.current || formTypeRef.current.value == "-"
            ? "none"
            : "",
            margin: props.buttonMargin
      }}
    >
      <div style={{ fontSize: buttonFontSize, color: "black" }}>{props.buttonText}</div>

      <img
        style={{
          marginLeft: "0.6rem",
          height: "2.1rem",
          display: props.iconDisplay,
        }}
        src={sendmail_icon}
        alt="send icon"
      />
      <div
        id="quoteModalSpinner"
        style={{ marginLeft: "2rem", display: props.spinnerDisplay }}
      >
        <Spinner animation="border" role="status" />
      </div>
    </GeneralButton>
  );
};
