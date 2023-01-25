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
  const mobileInvertFilter = utils.responsive(w,"invertFilter", "", "", "")

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
          <ContactForm refs={formRefs} contactModaltextareaPlaceholder={props.contactModaltextareaPlaceholder}/>
          <div
            className={styles.detailsForMobile + ` ${mobileInvertFilter}`}
            style={{ display: mobileDetailsDisplay, margin: "0 0 2rem 0" }}>
            <ContactDetails className="invertFilter" />
          </div>
        </NonButtonContainer>
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
<React.Fragment>      
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
      <div className={styles.sidepanelText + ' noscroll'}>
        <b>DISPATCH:</b>
        <br />
        dispatch@thirdawavebus.com
        <br />
        <br />
        <b>
          <u>Lower Mainland</u>
        </b>
        <br />
        <b>Phone:</b> (604) 274-1221 <br />
        <b>Fax: </b>(604) 247-1222 <br />
        <b>Shop:</b> (604) 247-1253 <br />
        <b>Emergency:</b> (604)-768-3787
        <br />
        <b>Owner:</b> Murray Nicholl
        <br />
        <div style={{ marginTop: "0.5rem" }}>
          <i>13551 VERDUN PLACE, RICHMOND BC</i>
        </div>
        <br />
        <b>
          <u>Sunshine Coast</u>
        </b>
        <br />
        <b>Office:</b> (604) 855-1260 <br />
        <b>Manager: </b>Randy Gould <br /> (604) 989-9670 <br />
        <div style={{ marginTop: "0.5rem" }}>
          <i>4373 SOLAR RD, SECHELT, BC</i>
        </div>
        <br />
        <b>
          <u>Victoria</u>
        </b>
        <br />
        <b>Office:</b> 1 (250) 382-4333 <br />
        <b>Fax: </b>1 (250) 382-4336
        <br />
        <b>Manager: </b> David Davenport
        <br />
        victoriamanager@thirdwavebus.com
        <div style={{ marginTop: "0.5rem" }}>
          <i>482 CECILIA RD, VICTORIA, BC</i>
        </div>
        <br />
        <br />
      </div>
      </React.Fragment>      
  );
};

export default ContactModal;
