import modalStyles from "../Modals/Modal.module.css";
import styles from "./ContactModal.module.css";
import * as utils from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "./Modal";
import phone_icon from "../../images/icons/phone1.svg";
import { SubmitButton, NonButtonContainer } from "./FormUtils";
import ContactForm from "./ContactForm";

const ContactModal = (props) => {
  const w = props.viewportWidth;
  const contactModalWidths = ["100%", "", "", ""];
  const quoteModalWidth = utils.responsive(w, ...contactModalWidths);
  const quoteModalHeight = utils.responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = utils.responsive(w, "", "80%", "80%", "80%");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const mobileDetailsDisplay = utils.responsive(w, "block");

  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const formFields = ["name", "phone", "email", "message"];
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
        <NonButtonContainer>
          <ContactForm refs={formRefs} />
        </NonButtonContainer>
        <div
          className={styles.detailsForMobile}
          style={{ display: mobileDetailsDisplay, margin: "0 0 2rem 0" }}>
          <ContactDetails className="invertFilter" />
        </div>

        <SubmitButton
          iconDisplay={iconDisplay}
          spinnerDisplay={spinnerDisplay}
          buttonText={"Send Message"}
        />
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

export default ContactModal;
