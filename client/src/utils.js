import { useEffect, useState } from "react";

import React from "react";
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";

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

export const handleToggleModal = (
  setModalVisFunction,
  setQuoteType = false
) => {
  const hide = { o: "0", v: "hidden" };
  const show = { o: "1", v: "visible" };
  // eslint-disable-next-line
  setModalVisFunction((prevState) => (prevState.o == "0" ? show : hide));

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
    //navDrawerBlackout.style.display = "block";
  } else {
    navDrawer.style.right = "-30rem";
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
    console.log("id not found");
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

export const formSubmit = (
  event,
  formFields,
  formRefs,
  setSpinnerDisplay,
  setIconDisplay,
  clearForm,
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
      formData[field] = formRefs[field].current.value;
    }
  }
  formData.type = formType;

  function resetSuccess() {
    clearForm(formFields, formRefs);
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

  const resetFailure = (error) => {
    setSpinnerDisplay("none");
    setIconDisplay("block");

    showFlash(
      "appFlash",
      "There was an error sending your request.",
      error.message,
      "rgb(231,164,164)"
    );
  };

  setSpinnerDisplay("block");
  setIconDisplay("none");

  try {
    sendMessage(formData, path, resetSuccess, resetFailure);
  } catch (e) {
    resetFailure(e);
  }
};

export const generateRefsFromStrings = (formFields, uRef) => {
  let formRefs = {};
  for (let field of formFields) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    formRefs[field] = uRef();
  }
  return formRefs;
};

export const clearForm = (formFields, formRefs, cleanupFn) => {
  for (let field of formFields) {
    formRefs[field].current.value = "";
  }

  cleanupFn();
};
