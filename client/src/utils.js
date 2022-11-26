import { useEffect, useState } from "react";

// Function to use stately variables to update things that have changes based onsmall medium and alrge window sizes
export const selectTSML = (width, tiny, sml, med, lrg) => {
  return width < process.env.REACT_APP_BREAKPOINT_T
    ? tiny
    : width < process.env.REACT_APP_BREAKPOINT_S
    ? sml
    : width < process.env.REACT_APP_BREAKPOINT_L
    ? med
    : lrg;
};

export const handleToggleModal = (setModalVisFunction) => {
  const hide = { o: "0", v: "hidden" };
  const show = { o: "1", v: "visible" };
  // eslint-disable-next-line
  setModalVisFunction((prevState) => (prevState.o == "0" ? show : hide));
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

  if (navDrawer.style.right != "0px") {
    navDrawer.style.right = "0px";
    //navDrawerBlackout.style.display = "block";
  } else {
    navDrawer.style.right = "-20rem";
    //navDrawerBlackout.style.display = "none";
  }
};
