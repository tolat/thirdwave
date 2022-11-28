import GeneralButton from "../UI/GeneralButton";
import GeneralInput from "../UI/GeneralInput";
import modalStyles from "../UI/Modal.module.css";
import styles from "./ContactModal.module.css";
import {
  selectFromWidth,
  sendMessage,
  showFlash,
  closeFlash,
} from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import Spinner from "react-bootstrap/Spinner";

import phone_icon from "../../images/icons/phone1.svg";
import msg_icon from "../../images/icons/message_icon.png";
import sendmail_icon from "../../images/icons/sendmail_icon.png";

const ContactModal = (props) => {
  const w = props.viewportWidth;
  const inputDisplay = selectFromWidth(w, "column");
  const inputWidth = selectFromWidth(w, "100%", "50%", "50%", "50%");
  const textAreaBottMarg = selectFromWidth(w, "10rem");
  const scrollMaskImage = selectFromWidth(w, "", "none", "none", "none");
  const quoteModalWidth = selectFromWidth(w, "100%", "50rem", "50rem", "50rem");
  const quoteModalHeight = selectFromWidth(w, "100%", "", "", "");
  const quoteModalMaxHeight = selectFromWidth(w, "", "80%", "80%", "80%");
  const buttonFontSize = selectFromWidth(w, "1.4rem", "", "", "");
  const sidepanelDisplay = selectFromWidth(w, "none", "flex", "flex", "flex");
  const mobileDetailsDisplay = selectFromWidth(
    w,
    "block",
    "none",
    "none",
    "none"
  );

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
      document.getElementById("contactModalSpinner").style.display == "block"
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
      sidepanel={<ContactSidepanel />}
      sidepanelDisplay={sidepanelDisplay}>
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <div
          className={`${styles.nonButtonContainer} noscroll`}
          style={{
            maskImage: scrollMaskImage,
            WebkitMaskImage: scrollMaskImage,
          }}>
          <div className={modalStyles.sectionContainer}>
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
          <div
            className={modalStyles.sectionContainer}
            style={{ marginBottom: textAreaBottMarg }}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={modalStyles.inputIcon}
                src={msg_icon}
                alt="msg icon"
              />{" "}
              <div>Message</div>
            </div>
            <textarea
              ref={userMessageRef}
              className={styles.textArea}
              rows="8"
              required
            />
          </div>
        </div>
        <div
          className={styles.detailsForMobile}
          style={{ display: mobileDetailsDisplay, margin: "0 0 2rem 0" }}>
          <div className={styles.sidepanelHeader}>
            <div className={modalStyles.sectionHeader}>
              <img
                className={`${modalStyles.inputIcon}`}
                src={phone_icon}
                alt="phone icon"
              />{" "}
              <div>Contact Us</div>
            </div>
          </div>
          <div className={styles.sidepanelText} style={{ color: "black" }}>
            (604) 274-1221 <br /> murrayn@thirdwavebus.com
            <br />
            <br />
            120-1355 Richmond, BC
            <br />
            V6V 1W5
          </div>
        </div>

        <GeneralButton
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            fontSize: "1.6rem",
            width: "100%",
            alignSelf: "flex-start",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <div style={{ fontSize: buttonFontSize }}>Send Message</div>

          <img
            style={{
              marginLeft: "0.6rem",
              height: "2.3rem",
              display: iconDisplay,
            }}
            src={sendmail_icon}
            alt="send icon"
          />
          <div
            id="contactModalSpinner"
            style={{ marginLeft: "2rem", display: spinnerDisplay }}>
            <Spinner animation="border" role="status" />
          </div>
        </GeneralButton>
      </form>
    </Modal>
  );
};

const ContactSidepanel = (props) => {
  return (
    <div className={styles.sidepanelContainer}>
      <div className={styles.sidepanelHeader}>
        <div className={modalStyles.sectionHeader}>
          <img
            className={`${modalStyles.inputIcon} invertFilter`}
            src={phone_icon}
            alt="phone icon"
          />{" "}
          <div style={{ color: "white" }}>Contact Us</div>
        </div>
      </div>
      <div className={styles.sidepanelText}>
        (604) 274-1221 <br /> murrayn@thirdwavebus.com
        <br />
        <br />
        120-1355 Richmond, BC
        <br />
        V6V 1W5
      </div>
    </div>
  );
};

export default ContactModal;
