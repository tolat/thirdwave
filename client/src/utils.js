import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

// function to select from
export const responsive = (width, mobile, sml, med, lrg) => {
  return width < process.env.REACT_APP_BREAKPOINT_T
    ? mobile
    : width < process.env.REACT_APP_BREAKPOINT_S
    ? sml
    : width < process.env.REACT_APP_BREAKPOINT_L
    ? med
    : lrg;
};

export const toggleModal = (setModalVisFunction, setQuoteType = false) => {
  const hide = { o: "0", v: "hidden" };
  const show = { o: "1", v: "visible" };
  // eslint-disable-next-line
  setModalVisFunction((prevState) => {
    if (prevState.o == "0") {
      document.body.style.overflowY = "hidden";
      return show;
    } else {
      document.body.style.overflowY = "";
      return hide;
    }
  });

  if (setQuoteType)
    setTimeout(() => {
      document.getElementById("quoteNameInput").focus();
      document.querySelector("#quoteModalSelectContainer select").value =
        setQuoteType;
    }, 100);
};

export const sendMessage = (
  msgObject,
  path,
  successFunction,
  failureFunction
) => {
  fetch(`${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(msgObject),
    //credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      responseData.success
        ? successFunction()
        : failureFunction(responseData.error);
    });
};

export const showFlash = (
  id,
  header,
  message,
  backgroundColor,
  headerColor,
  textColor
) => {
  document.getElementById(`${id}_flashContainer`).style.backgroundColor =
    backgroundColor;
  document.getElementById(`${id}_header`).innerText = header;
  document.getElementById(`${id}_message`).innerText = message;
  document.getElementById(`${id}_masterContainer`).style.marginTop = "2rem";
  document.getElementById(`${id}_header`).style.color = headerColor;
  document.getElementById(`${id}_message`).style.color = textColor;
};

export const closeFlash = (id) => {
  document.getElementById(`${id}_masterContainer`).style.marginTop = "-20rem";
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export const toggleNavDrawer = () => {
  let navDrawer = document.getElementById("navDrawer");
  //let navDrawerBlackout = document.getElementById("navDrawerBlackout");
  // eslint-disable-next-line
  if (navDrawer.style.right != "0px") {
    navDrawer.style.right = "0px";
    document.body.style.overflowY = "hidden";
    //navDrawerBlackout.style.display = "block";
  } else {
    navDrawer.style.right = "-30rem";
    document.body.style.overflowY = "";
    //navDrawerBlackout.style.display = "none";
  }
};

export const clickBurgerMenuIcon = (buttonActive = false) => {
  document.getElementsByClassName("hamburger-react")[0].click();
  if (!buttonActive) {
    toggleNavDrawer();
  }
};

export const DOMReadyPortal = (props) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady ? ReactDOM.createPortal(props.children, props.portal) : null;
};

export const updateHeroResponsiveHeights = (
  heights,
  uEffect,
  setHeroHeight
) => {
  uEffect(() => {
    setHeroHeight((prevState) => ({
      ...prevState,
      containerMinHeight: heights,
    }));
  }, []);
};

export const handleHeroFadeTransitions = (
  uEffect,
  setContentTransition,
  setContentOpacity,
  dependencies
) => {
  uEffect(() => {
    setContentTransition("none");
    setContentOpacity("0");
    let timeout = setTimeout(() => {
      setContentTransition("opacity 0.8s ease-in");
      setContentOpacity("1");
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [dependencies]);
};

export const scrollToId = (Id) => {
  if (!document.getElementById(Id)) {
    console.log(`id ${Id} not found`);
    return;
  }
  let offset = document.getElementById(Id).getBoundingClientRect().top;
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

export const scrollToOffset = (offset) => {
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

export const submitToServer = (
  event,
  formFields,
  formRefs,
  setSpinnerDisplay,
  setIconDisplay,
  path,
  successHeader,
  successMessage,
  formType = ""
) => {
  event.preventDefault();

  if (document.getElementById("quoteModalSpinner").style.display == "block") {
    return;
  }

  const formData = {};
  for (let field of formFields) {
    if (formRefs[field].current) {
      if (formRefs[field].current.type == "checkbox") {
        formData[field] = formRefs[field].current.checked ? "Yes" : "No";
      } else {
        formData[field] = formRefs[field].current.value || "";
      }
    }
  }
  formData.type = formType;

  setSpinnerDisplay("block");
  setIconDisplay("none");

  try {
    sendMessage(formData, path, resetSuccess(formFields, formRefs, setSpinnerDisplay, setIconDisplay, successHeader, successMessage), resetFailure);
  } catch (e) {
    resetFailure(e, setSpinnerDisplay, setIconDisplay);
  }
};

export const resetSuccess = (formFields, formRefs, setSpinnerDisplay, setIconDisplay, successHeader, successMessage, resetForm)=> {
  if(resetForm){clearForm(formFields, formRefs)}
  setSpinnerDisplay("none");
  setIconDisplay("block");
  showFlash(
    "appFlash",
    successHeader,
    successMessage,
    "rgb(55,55,55)",
    "white",
    "white"
  );
  setTimeout(() => {
    closeFlash("appFlash");
  }, 20000);
}

export const submitToEmailJS = async (event, formRefs, formFields, setSpinnerDisplay,setIconDisplay, headerTitle, headerMessage, templateID, formType=false, resetForm=true) => {
  event.preventDefault()

  let data = {type: formType||null}
  for(let ref in formRefs){
    data[ref] = formRefs[ref].current.value
  }

  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateID,
      data,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      function (response) {
          resetSuccess(
            formFields,
            formRefs,
            setSpinnerDisplay,
            setIconDisplay,
            headerTitle,
            headerMessage,
            resetForm
          );
      },
      function (error) {
        resetFailure(error, setSpinnerDisplay, setIconDisplay)
      }
    );
};

export const resetFailure = (error, setSpinnerDisplay, setIconDisplay) => {
  setSpinnerDisplay("none");
  setIconDisplay("block");

  showFlash(
    "appFlash",
    "There was an error sending your request.",
    error.message,
    "rgb(231,164,164)"
  );
};

export const generateRefsFromStrings = (formFields, uRef) => {
  let formRefs = {};
  for (let field of formFields) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    formRefs[field] = uRef();
  }
  return formRefs;
};

export const clearForm = (formFields, formRefs) => {
  for (let field of formFields) {
    formRefs[field].current.value = "";
  }
};

export const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export const isMobile = (width) =>{
  return width < process.env.REACT_APP_BREAKPOINT_T
}

