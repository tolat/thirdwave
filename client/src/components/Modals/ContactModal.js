import GeneralButton from "../UI/GeneralButton";
import GeneralInput from "../UI/GeneralInput";
import modalStyles from "../UI/Modal.module.css";
import styles from "./ContactModal.module.css";
import * as utils from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import Spinner from "react-bootstrap/Spinner";
import phone_icon from "../../images/icons/phone1.svg";
import msg_icon from "../../images/icons/message_icon.png";
import sendmail_icon from "../../images/icons/sendmail_icon.png";

const ContactModal = (props) => {
  const w = props.viewportWidth;
  const quoteModalWidths = ["100%", "50rem", "50rem", "50rem"];
  const inputDisplay = utils.responsive(w, "column");
  const inputWidth = utils.responsive(w, "100%", "50%", "50%", "50%");
  const textAreaBottMarg = utils.responsive(w, "10rem");
  const scrollMaskImage = utils.responsive(w, "", "none", "none", "none");
  const quoteModalWidth = utils.responsive(w, ...quoteModalWidths);
  const quoteModalHeight = utils.responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = utils.responsive(w, "", "80%", "80%", "80%");
  const buttonFontSize = utils.responsive(w, "1.4rem", "", "", "");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const mobileDetailsDisplay = utils.responsive(w, "block");

  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const formFields = ["phone", "email", "message"];

  const formRefs = utils.generateRefsFromStrings(formFields, useRef);

  const handleSubmit = (event) => {
    utils.formSubmit(
      event,
      formFields,
      formRefs,
      setSpinnerDisplay,
      setIconDisplay,
      utils.clearForm,
      "/message",
      "Message Sent Successfully!",
      "Thanks for getting in touch. We will do our best to respond to all questions within 3 business days."
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
              ref={formRefs.message}
              className={styles.textArea}
              rows="8"
              required
            />
          </div>
        </div>
        <div
          className={styles.detailsForMobile}
          style={{ display: mobileDetailsDisplay, margin: "0 0 2rem 0" }}>
          <ContactDetails className="invertFilter" />
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
      <ContactDetails />
    </div>
  );
};

const ContactDetails = (props) => {
  return (
    <div className={`${props.className}`}>
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
        <b>Phone:</b> (604) 274-1221 <br />
        <b>Fax: </b>(604) 247-1222 <br />
        <b>Shop:</b> (604) 247-1253 <br />
        <b>AfterHours/Emergency:</b> (604)-768-3787
        <br />
        <br />
        <br />
        <b>Address:</b>
        <br />
        120-1355 Richmond, BC
        <br />
        V6V 1W5
      </div>
    </div>
  );
};

const ContactItem = (props) => {
  return (
    <div className={styles.sidebarItemContainer}>
      <div className={styles.sidebarItemLabel}>{props.label}:</div>
      <div className={styles.sidebarItemName}>{props.contactName}</div>
      <div className={styles.sidebarItemEmail}>{props.email}</div>
    </div>
  );
};

export default ContactModal;
