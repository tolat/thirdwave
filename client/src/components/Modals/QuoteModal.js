import styles from "./QuoteModal.module.css";
import * as utils from "../../utils";
import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import CharterForm from "./CharterForm";
import { SelectField, NonButtonContainer, SubmitButton } from "./FormUtils";
import quote_icon from "../../images/icons/quote.svg";

// Import fields from all sub-forms
import { charterFields } from "./CharterForm";
import FormSelect from "react-bootstrap/esm/FormSelect";

const QuoteModal = (props) => {
  const w = props.viewportWidth;
  const emptyFormContent = (
    <div className={styles.placeholderContent}>Select a quote type.</div>
  );

  // Generate refs for each sub-form
  const charterRefs = utils.generateRefsFromStrings(charterFields, useRef);
  const modalWidth = utils.responsive(w, "100%", "90%", "1170px", "1170px");
  const quoteModalHeight = utils.responsive(w, "100%", "", "", "");
  const quoteModalMaxHeight = utils.responsive(w, "", "80%", "80%", "80%");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const [iconDisplay, setIconDisplay] = useState("block");
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [content, setContent] = useState(emptyFormContent);
  const formTypeRef = useRef();

  // Defalt form state **** SET TO EMPTY WHEN OTHER FORMAS ADDED ****
  const defaultFormState = {
    fields: [charterFields],
    refs: [charterRefs],
    type: "Charters",
  };
  const [formState, setFormState] = useState(defaultFormState);

  // Submit the form with the correct refs and type
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

  // Switch between sub-forms based on the value of the select quote type field
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
        // Delete next line when adding more forms
        return <CharterForm refs={charterRefs} />;
      // return emptyFormContent;
    }
  }

  // Handle form type change
  const onFormTypeChange = () => {
    setContent(getContent());
  };

  // Iinitialize form
  useEffect(() => {
    onFormTypeChange();
  }, []);

  return (
    <Modal
      viewportWidth={props.viewportWidth}
      modalVis={props.modalVis}
      setModalVis={props.setModalVis}
      modalWidth={modalWidth}
      modalHeight={quoteModalHeight}
      modalMaxHeight={quoteModalMaxHeight}
      sidepanel={<Sidepanel />}
      sidepanelDisplay={sidepanelDisplay}>
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <NonButtonContainer>
          <SelectField
            className={styles.selectInput}
            inputRef={formTypeRef}
            onChange={onFormTypeChange}
            formState={formState}
          />
          {content}
        </NonButtonContainer>
        <SubmitButton
          formTypeRef={formTypeRef}
          iconDisplay={iconDisplay}
          spinnerDisplay={spinnerDisplay}
          buttonText={"Request Quote"}
        />
      </form>
    </Modal>
  );
};

const Sidepanel = (props) => {
  return (
    <div className={styles.sidepanelContainer}>
      <div className={styles.quoteIcon}>
        <img className={"invertFilter"} src={quote_icon} alt="quote icon" />
      </div>
    </div>
  );
};

export default QuoteModal;
