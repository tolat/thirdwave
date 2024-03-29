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
  const quoteModalMaxHeight = utils.responsive(w, "", "95%", "95%", "95%");
  const sidepanelDisplay = utils.responsive(w, "none", "flex", "flex", "flex");
  const [iconDisplay, setIconDisplay] = useState("block");
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");
  const [content, setContent] = useState(emptyFormContent);
  const formTypeRef = useRef();

  // Defalt form state **** SET TO EMPTY WHEN OTHER FORMS ADDED ****
  const defaultFormState = {
    fields: [charterFields],
    refs: [charterRefs],
    type: "Charters",
  };
  const [formState, setFormState] = useState(defaultFormState);

  // Submit the form with the correct refs and type
  const handleSubmit = (event) => {
    const flashData = {
      title: "Quote Request Sent Successfully!",
      message:
        "Thanks for getting in touch. We will respond to your quote request as soon as possible.",
    };

    if (document.getElementById("quoteModalSpinner").style.display == "block") {
      return;
    }
    setSpinnerDisplay("block");
    setIconDisplay("none");

    process.env.REACT_APP_USING_BACKEND == "TRUE"
      ? utils.submitToServer(
          event,
          formState.fields,
          formState.refs,
          setSpinnerDisplay,
          setIconDisplay,
          "/message",
          flashData.title,
          flashData.message
        )
      : utils.submitToEmailJS(
          event,
          formState.refs,
          formState.fields,
          setSpinnerDisplay,
          setIconDisplay,
          flashData.title,
          flashData.message,
          process.env.REACT_APP_EMAILJS_QUOTE_TEMPLATE_ID,
          formState.type,
          false
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
      sidepanelDisplay={sidepanelDisplay}
    >
      <form className={styles.form} style={props.style} onSubmit={handleSubmit}>
        <SelectField
          className={styles.selectInput}
          inputRef={formTypeRef}
          onChange={onFormTypeChange}
          formState={formState}
        />
        <NonButtonContainer nbContainerMargin = {""}>
          {content}
          {utils.isMobile(w) ? (
            <SubmitButton
            formTypeRef={formTypeRef}
              iconDisplay={iconDisplay}
              spinnerDisplay={spinnerDisplay}
              buttonText={"Request Quote"}
              buttonMargin={utils.responsive(w, "0 2rem 6rem 0")}
            />
          ) : null}
        </NonButtonContainer>
        <div className={styles.submitButtonContainer}>
          {utils.isMobile(w) ? null : (
            <SubmitButton
              formTypeRef={formTypeRef}
              iconDisplay={iconDisplay}
              spinnerDisplay={spinnerDisplay}
              buttonText={"Request Quote"}
              buttonMargin={utils.responsive(w, "0 2rem 3rem 0")}
            />
          )}
        </div>
      </form>
    </Modal>
  );
};

const Sidepanel = (props) => {
  return (
    <div className={styles.sidepanelContainer}>
      {/* <div className={styles.quoteIcon}>
        <img className={"invertFilter"} src={quote_icon} alt="quote icon" />
      </div>
      <div className={styles.sidebarLetter}>Q</div>
      <div className={styles.sidebarLetter}>U</div>
      <div className={styles.sidebarLetter}>O</div>
      <div className={styles.sidebarLetter}>T</div>
      <div className={styles.sidebarLetter}>E</div> */}
    </div>
  );
};

export default QuoteModal;
