import modalStyles from "../Modals/Modal.module.css";
import styles from "./ContactModal.module.css";
import * as utils from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "./Modal";
import phone_icon from "../../images/icons/phone1.svg";
import { SubmitButton, NonButtonContainer } from "./FormUtils";
import ContactForm from "./ContactForm";
import ContactDetails from "../Utils/ContactDetails";

const ContactModal = (props) => {
  const w = props.viewportWidth;
  const contactModalWidths = ["100%", "", "", ""];
  const quoteModalWidth = utils.responsive(w, ...contactModalWidths);
  const quoteModalHeight = utils.responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = utils.responsive(w, "", "80%", "80%", "80%");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const mobileDetailsDisplay = utils.responsive(w, "block");
  const mobileInvertFilter = utils.responsive(w, "invertFilter", "", "", "");
  const containerOverflowY = utils.responsive(w,"none", "scroll", "scroll", "scroll")

  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");

  const formFields = ["name", "phone", "email", "message"];
  const formRefs = utils.generateRefsFromStrings(formFields, useRef);

  const handleSubmit = (event) => {
    const flashData = {
      title: "Message Sent Successfully!",
      message:
        "Thanks for getting in touch. We will respond to your inquiry as soon as possible.",
    };

    if (document.getElementById("quoteModalSpinner").style.display == "block") {
      return;
    }
    setSpinnerDisplay("block");
    setIconDisplay("none");

    process.env.REACT_APP_USING_BACKEND == "TRUE"
      ? utils.submitToServer(
          event,
          formFields,
          formRefs,
          setSpinnerDisplay,
          setIconDisplay,
          "/message",
          flashData.title,
          flashData.message
        )
      : utils.submitToEmailJS(
          event,
          formRefs,
          formFields,
          setSpinnerDisplay,
          setIconDisplay,
          flashData.title,
          flashData.message,
          process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID
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
      sidepanelDisplay={sidepanelDisplay}
    >
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <NonButtonContainer>
          <ContactForm
            refs={formRefs}
            contactModaltextareaPlaceholder={
              props.contactModaltextareaPlaceholder
            }
          />
          {utils.isMobile(w) ? (
            <SubmitButton
              iconDisplay={iconDisplay}
              spinnerDisplay={spinnerDisplay}
              buttonText={"Send Message"}
              buttonMargin={utils.responsive(w, "0 2rem 0rem 0")}
            />
          ) : null}
          <div
            className={styles.detailsForMobile + ` ${mobileInvertFilter}`}
            style={{ display: mobileDetailsDisplay, margin: "0 0 2rem 0" }}
          >
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

            <ContactDetails
              containerStyle={{ padding: "0", overflowY: containerOverflowY }}
              textStyle={{ fontSize: "0.8rem", color: "white", width: "95%" }}
            />
          </div>
        </NonButtonContainer>
        {utils.isMobile(w) ? null : (
          <SubmitButton
            iconDisplay={iconDisplay}
            spinnerDisplay={spinnerDisplay}
            buttonText={"Send Message"}
            buttonMargin={utils.responsive(w, "0 2rem 5rem 0")}
          />
        )}
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
      <ContactDetails
        containerStyle={{ padding: "0", overflowY: "scroll" }}
        textStyle={{ fontSize: "0.8rem", color: "white", width: "65%" }}
      />
    </div>
  );
};

export default ContactModal;
