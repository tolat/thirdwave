import GeneralButton from "../UI/GeneralButton";
import GeneralInput from "../UI/GeneralInput";
import modalStyles from "../UI/Modal.module.css";
import styles from "./QuoteModal.module.css";
import * as utils from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import Spinner from "react-bootstrap/Spinner";

import calculator from "../../images/icons/calculator.svg";
import msg_icon from "../../images/icons/message_icon.png";
import sendmail_icon from "../../images/icons/sendmail_icon.png";
import BusCalculator from "../Utils/BusCalculator";
import BasicDatePicker from "../Utils/DatePicker";

const QuoteModal = (props) => {
  const w = props.viewportWidth;
  const inputDisplay = utils.responsive(w, "column");
  const inputWidth = utils.responsive(w, "100%", "50%", "50%", "50%");
  const textAreaBottMarg = utils.responsive(w, "10rem");
  const scrollMaskImage = utils.responsive(w, "", "none", "none", "none");
  const quoteModalWidth = utils.responsive(
    w,
    "100%",
    "50rem",
    "50rem",
    "50rem"
  );
  const quoteModalHeight = utils.responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = utils.responsive(w, "", "80%", "80%", "80%");
  const buttonFontSize = utils.responsive(w, "1.4rem", "", "", "");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const mobileCalculatorDisplay = utils.responsive(
    w,
    "block",
    "none",
    "none",
    "none"
  );
  const busCalcTheme = utils.responsive(w, "", "light", "light", "light");
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");
  const stackedView = utils.responsive(w, true, false, false, false);

  const formFields = [
    "name",
    "phone",
    "email",
    "type",
    "from",
    "to",
    "details",
  ];

  const formRefs = utils.generateRefsFromStrings(formFields, useRef);

  const handleSubmit = (event) => {
    utils.formSubmit(
      event,
      formFields,
      formRefs,
      setSpinnerDisplay,
      setIconDisplay,
      utils.clearForm,
      "/quote",
      "Quote request sent successfully!",
      "Thank you for your request. We will get in touch with you if we have any questions, otherwise you can expect a quote within 3 business days."
    );
  };

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      setModalVis={props.setModalVis}
      modalWidth={quoteModalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}
      sidepanel={<QuoteSidepanel busCalcTheme={busCalcTheme} />}
      sidepanelDisplay={sidepanelDisplay}>
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <div
          className={`${styles.nonButtonContainer} noscroll`}
          style={{
            maskImage: scrollMaskImage,
            WebkitMaskImage: scrollMaskImage,
          }}>
          <div className={modalStyles.sectionContainer}>
            <GeneralInput
              id="quoteNameInput"
              label="Name"
              type="text"
              placeholder="Full Name"
              inputRef={formRefs.name}
              required={true}
              inputStyle={{ marginBottom: "1rem" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: inputDisplay,
                justifyContent: "space-between",
              }}>
              <GeneralInput
                label="Phone Number"
                type="text"
                style={{ maxWidth: inputWidth }}
                placeholder="Number"
                inputRef={formRefs.phone}
                required={true}
              />
              <GeneralInput
                label="Email Address"
                type="email"
                style={{ maxWidth: inputWidth }}
                placeholder="Email"
                inputRef={formRefs.email}
                required={true}
              />
            </div>
          </div>
          <div
            className={styles.selectFieldContainer}
            id="quoteModalSelectContainer">
            Type of inquiry
            <SelectField
              options={[
                { key: Math.random(), value: "select" },
                { key: Math.random(), value: "School Routes" },
                { key: Math.random(), value: "Charters" },
                { key: Math.random(), value: "Shop Rental" },
                { key: Math.random(), value: "Service Regions" },
                { key: Math.random(), value: "Used Bus Sales" },
                { key: Math.random(), value: "Other" },
              ]}
              className={styles.selectInput}
              inputRef={formRefs.type}
            />
          </div>
          <div className={styles.datePickersOuterContainer}>
            <div className={styles.datePickersHeader}>
              Dates (if applicable)
            </div>
            <div className={styles.datePickersContainer}>
              <BasicDatePicker
                inputRef={formRefs.from}
                style={{ width: "48%" }}
                label="From"
              />
              <BasicDatePicker
                inputRef={formRefs.to}
                style={{ width: "48%" }}
                label="To"
              />
            </div>
          </div>

          <div
            className={modalStyles.sectionContainer}
            style={{ marginBottom: textAreaBottMarg }}>
            <div className={modalStyles.sectionHeader}>
              <div style={{ display: "flex" }}>
                <img
                  className={modalStyles.inputIcon}
                  src={msg_icon}
                  alt="msg icon"
                />
                <div>Additional Details</div>
              </div>
            </div>
            <textarea
              id="quoteModalTextArea"
              ref={formRefs.details}
              className={styles.textArea}
              rows="4"
              required
            />
          </div>
          <div
            className={styles.mobileCalculator}
            style={{
              marginTop: "-9rem",
              display: mobileCalculatorDisplay,
            }}>
            <SidePanelContents busCalcTheme={busCalcTheme} />
          </div>
        </div>

        <GeneralButton customClasses={styles.sendButton}>
          <div style={{ fontSize: buttonFontSize }}>Send Message</div>

          <img
            style={{
              marginLeft: "0.6rem",
              height: "2.1rem",
              display: iconDisplay,
            }}
            src={sendmail_icon}
            alt="send icon"
          />
          <div
            id="quoteModalSpinner"
            style={{ marginLeft: "2rem", display: spinnerDisplay }}>
            <Spinner animation="border" role="status" />
          </div>
        </GeneralButton>
      </form>
    </Modal>
  );
};

const QuoteSidepanel = (props) => {
  return (
    <div className={`${styles.sidepanelContainer}`}>
      <SidePanelContents busCalcTheme={props.busCalcTheme} />
    </div>
  );
};

const SidePanelContents = (props) => {
  return (
    <div className={`${styles.sidePanelContentsContainer} noscroll`}>
      <div className={styles.sidepanelHeader}>
        <div
          className={`${modalStyles.sectionHeader} ${
            props.busCalcTheme == "light" ? "invertFilter" : ""
          }`}>
          <img
            className={`${modalStyles.inputIcon}`}
            src={calculator}
            alt="calculator icon"
          />
          <div style={{ fontSize: "1.45rem" }}>Bus Estimator</div>
        </div>
      </div>
      <BusCalculator theme={props.busCalcTheme} />
    </div>
  );
};

const SelectField = (props) => {
  return (
    <select ref={props.inputRef} className={props.className}>
      {props.options.map((o) => (
        <option key={o.key}>{o.value}</option>
      ))}
    </select>
  );
};

export default QuoteModal;
