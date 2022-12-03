import GeneralButton from "../UI/GeneralButton";
import styles from "./QuoteModal.module.css";
import modalStyles from "../UI/Modal.module.css";
import * as utils from "../../utils";
import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import Spinner from "react-bootstrap/Spinner";

import sendmail_icon from "../../images/icons/sendmail_icon.png";

import { useWindowSize } from "usehooks-ts";
import msg_icon from "../../images/icons/message_icon.png";
import CharterForm from "./CharterForm";

import { charterFields } from "./CharterForm";

const QuoteModal = (props) => {
  const w = props.viewportWidth;
  const defaultFormState = { fields: [], refs: [], tpe: "-" };
  const emptyFormContent = (
    <div className={styles.placeholderContent}>Select a quote type.</div>
  );

  const scrollMaskImage = utils.responsive(w, "", "none", "none", "none");
  const modalWidth = utils.responsive(w, "100%", "50rem", "50rem", "50rem");
  const quoteModalHeight = utils.responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = utils.responsive(w, "", "80%", "80%", "80%");
  const buttonFontSize = utils.responsive(w, "1.4rem", "", "", "");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [iconDisplay, setIconDisplay] = useState("block");
  const [formState, setFormState] = useState(defaultFormState);
  const [content, setContent] = useState(emptyFormContent);
  const formTypeRef = useRef();

  const charterRefs = utils.generateRefsFromStrings(charterFields, useRef);

  const handleSubmit = (event) => {
    utils.formSubmit(
      event,
      formState.fields,
      formState.refs,
      setSpinnerDisplay,
      setIconDisplay,
      utils.clearForm,
      "/quote",
      "Quote request sent successfully!",
      "Thank you for your request. We will get in touch with you if we have any questions, otherwise you can expect a quote within 3 business days.",
      formTypeRef.current.value
    );
  };

  function getContent() {
    switch (formTypeRef.current.value) {
      case "Charters":
        setFormState({
          fields: charterFields,
          refs: charterRefs,
          type: "Charters",
        });
        return <CharterForm refs={charterRefs} />;
      default:
        setFormState(defaultFormState);
        return emptyFormContent;
    }
  }

  const onFormTypeChange = (e) => {
    setContent(getContent());
  };

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      setModalVis={props.setModalVis}
      modalWidth={modalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}
      /* sidepanel={<QuoteSidepanel busCalcTheme={busCalcTheme} />} */
      sidepanelDisplay={sidepanelDisplay}>
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <div
          className={`${styles.nonButtonContainer} noscroll`}
          style={{
            maskImage: scrollMaskImage,
            WebkitMaskImage: scrollMaskImage,
          }}>
          <div
            className={styles.selectFieldContainer}
            id="quoteModalSelectContainer">
            Quote Type
            <SelectField
              options={[
                { key: Math.random(), value: "-" },
                { key: Math.random(), value: "School Routes" },
                { key: Math.random(), value: "Charters" },
                { key: Math.random(), value: "Shop Rental" },
                { key: Math.random(), value: "Service Regions" },
                { key: Math.random(), value: "Used Bus Sales" },
                { key: Math.random(), value: "Other" },
              ]}
              className={styles.selectInput}
              inputRef={formTypeRef}
              onChange={onFormTypeChange}
              formState={formState}
            />
          </div>
          {content}
        </div>
        <GeneralButton
          customClasses={styles.sendButton}
          style={{
            display:
              !formTypeRef.current || formTypeRef.current.value == "-"
                ? "none"
                : "",
          }}>
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

const SelectField = (props) => {
  return (
    <select
      onChange={props.onChange}
      ref={props.inputRef}
      className={props.className}
      value={props.formState.type}>
      {props.options.map((o) => (
        <option key={o.key}>{o.value}</option>
      ))}
    </select>
  );
};

export default QuoteModal;

export const DetailsTextarea = (props) => {
  const { width } = useWindowSize();
  const textAreaBottMarg = utils.responsive(width, "10rem");

  return (
    <div
      className={styles.sectionContainer}
      style={{ marginBottom: textAreaBottMarg, marginTop: "1rem" }}>
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
        ref={props.formRefs.details}
        className={styles.textArea}
        rows="4"
        required
        placeholder="Please provide a name and number for the main trip contact (if applicable), as well as any
        additional trip details."
      />
    </div>
  );
};
