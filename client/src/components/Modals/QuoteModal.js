import GeneralButton from "../UI/GeneralButton";
import GeneralInput from "../UI/GeneralInput";
import modalStyles from "../UI/Modal.module.css";
import styles from "./QuoteModal.module.css";
import { responsive, sendMessage, showFlash, closeFlash } from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import Spinner from "react-bootstrap/Spinner";

import calculator from "../../images/icons/calculator.svg";
import msg_icon from "../../images/icons/message_icon.png";
import sendmail_icon from "../../images/icons/sendmail_icon.png";
import BusCalculator from "../Utils/BusCalculator";
import { SelectField } from "../../utils";

const QuoteModal = (props) => {
  const w = props.viewportWidth;
  const inputDisplay = responsive(w, "column");
  const inputWidth = responsive(w, "100%", "50%", "50%", "50%");
  const textAreaBottMarg = responsive(w, "10rem");
  const scrollMaskImage = responsive(w, "", "none", "none", "none");
  const quoteModalWidth = responsive(w, "100%", "50rem", "50rem", "50rem");
  const quoteModalHeight = responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = responsive(w, "", "80%", "80%", "80%");
  const buttonFontSize = responsive(w, "1.4rem", "", "", "");
  const sidepanelDisplay = responsive(w, "none", "flex", "flex", "flex");
  const mobileCalculatorDisplay = responsive(
    w,
    "block",
    "none",
    "none",
    "none"
  );
  const busCalcTheme = responsive(w, "", "light", "light", "light");
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const userEmailRef = useRef();
  const userNameRef = useRef();
  const userPhoneRef = useRef();
  const userMessageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      // eslint-disable-next-line
      document.getElementById("quoteModalSpinner").style.display == "block"
    ) {
      return;
    }

    const formData = {
      name: userNameRef.current.value,
      phone: userPhoneRef.current.value,
      email: userEmailRef.current.value,
      message: userMessageRef.current.value,
    };

    const resetSuccess = () => {
      userEmailRef.current.value = "";
      userNameRef.current.value = "";
      userPhoneRef.current.value = "";
      userMessageRef.current.value = "";

      setSpinnerDisplay("none");
      setIconDisplay("block");

      showFlash(
        "appFlash",
        "Message successfully sent!",
        "Thanks for getting in touch. We will do our best to respond to your inquiry within 3 business days.",
        "rgb(55,55,55)",
        "white",
        "white"
      );

      setTimeout(() => {
        closeFlash("appFlash");
      }, 5000);
    };

    const resetFailure = (error) => {
      setSpinnerDisplay("none");
      setIconDisplay("block");

      showFlash(
        "appFlash",
        "There was an error sending your message.",
        error.message,
        "rgb(231,164,164)"
      );
    };

    setSpinnerDisplay("block");
    setIconDisplay("none");

    try {
      sendMessage(formData, "/quote", resetSuccess, resetFailure);
    } catch (e) {
      resetFailure(e);
    }
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
              label="Name"
              type="text"
              placeholder="Full Name"
              inputRef={userNameRef}
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
                inputRef={userPhoneRef}
                required={true}
              />
              <GeneralInput
                label="Email Address"
                type="email"
                style={{ maxWidth: inputWidth }}
                placeholder="Email"
                inputRef={userEmailRef}
                required={true}
              />
            </div>
          </div>
          <div className={styles.selectFieldContainer}>
            Type of inquiry:
            <SelectField
              options={[
                { key: Math.random(), value: "select" },
                { key: Math.random(), value: "School Routes" },
                { key: Math.random(), value: "Charters" },
                { key: Math.random(), value: "Shop Facilities" },
                { key: Math.random(), value: "Service Regions" },
                { key: Math.random(), value: "Used Bus Sales" },
                { key: Math.random(), value: "Other" },
              ]}
              className={styles.selectInput}
            />
          </div>

          <div
            className={modalStyles.sectionContainer}
            style={{ marginBottom: textAreaBottMarg }}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
                src={msg_icon}
                alt="msg icon"
              />{" "}
              <div>Additional Details</div>
            </div>
            <textarea
              id="quoteModalTextArea"
              ref={userMessageRef}
              className={styles.textArea}
              rows="4"
              required
            />
          </div>
          <div
            className={styles.mobileCalculator}
            style={{
              marginTop: "-6rem",
              height: "100%",
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
    <React.Fragment>
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
          <div>Bus Sizing Calculator</div>
        </div>
      </div>
      <BusCalculator theme={props.busCalcTheme} />
    </React.Fragment>
  );
};

export default QuoteModal;
