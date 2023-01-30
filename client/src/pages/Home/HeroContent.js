import styles from "./HeroContent.module.css";
import CentralSection from "../../components/UI/CentralSection";
import {
  DOMReadyPortal,
  handleHeroFadeTransitions,
  responsive,
  scrollToId,
  updateHeroResponsiveHeights,
  toggleModal
} from "../../utils";
import React, { useEffect, useState } from "react";

import maple_leaf from "../../images/maple_leaf.png";
import bus from "../../images/icons/bus.svg";
import wrench from "../../images/icons/build.svg";
import map from "../../images/icons/map.svg";
import family from "../../images/icons/fieldtrip.svg";
import tag from "../../images/icons/tag.svg";
import ExpandButton from "../../components/UI/ExpandButton";
import { useWindowSize } from "usehooks-ts";

const HeroContent = (props) => {
  const w = props.viewportWidth;
  const heroMarginTop = responsive(w, "", "18rem", "16rem", "20rem");
  const heroBorderBottom = responsive(w, "1px solid white");
  const heroFontSize = responsive(w, "1.3rem", "2.3rem", "2.3rem", "");
  const header2BorderBottom = responsive(w, "none");
  const iconsContainerWidth = responsive(w, "unset");
  const servicesDisplay = responsive(w, "none");
  const subMainContainerMarginBottom = responsive(w, "", "1rem", "2rem","5rem")
  const [contentOpacity, setContentOpacity] = useState("0");
  const [contentTransition, setContentTransition] =
    useState("opacity 1s ease-in");
  const subHeroBulletsFontSize = responsive(
    w,
    "0.7rem",
    "1.1rem",
    "1.4rem",
    "1.4rem"
  );
  const subHeroBulletsDotMargin = responsive(w, "", "-3.6rem", "", "");
  const justifyCentralContent = responsive(w, "center");
  const canadianOwnedImgStyle = responsive(w, {maxWidth: "5rem", height: "5rem"})
  const headerContainerMaxWidth = responsive(w, "40vw")
  const iconsContainerMarginTop = responsive(w, "","3rem", "2rem","5rem")


  handleHeroFadeTransitions(
    useEffect,
    setContentTransition,
    setContentOpacity,
    props.heroProps
  );

  updateHeroResponsiveHeights(
    ["100vh", "40rem", "40rem", "65rem"],
    useEffect,
    props.setHeroProps
  );


  const servicesIconClickHandler = (e) => {
    const innerText = e.target.innerText;
    if (innerText) {
      if(innerText === "Shop Services" || innerText === "Used Bus Sales"){
        props.heroProps.setContactModaltextareaPlaceholder(`Enter your ${innerText} inquiry here.`)
        toggleModal(props.setContactModalVis)
      }else{
        document.getElementById("servicesButton").click();
      }
     
    }

    setTimeout(() => {
      scrollToId(innerText.replaceAll(" ", ""));
    }, 800);
  };

  return (
    <DOMReadyPortal portal={document.getElementById("hero-content")}>
      <CentralSection>
        <div
          className={styles.centralContainer}
          style={{
            justifyContent: justifyCentralContent,
            transition: contentTransition,
            opacity: contentOpacity,
            maxHeight: "100vh"
          }}>
          <div
            className={styles.heroContainer}
            style={{
              marginTop: heroMarginTop,
              borderBottom: heroBorderBottom,
            }}>
            <img
              className={styles.canadianOwnedImg}
              src={maple_leaf}
              style={canadianOwnedImgStyle}
              alt="canadian owned"
            />
            <div className={styles.headerContainer} style={{maxWidth: headerContainerMaxWidth}}>
              <div
                className={styles.header1}
                style={{ fontSize: heroFontSize }}>
                Locally owned and operated
              </div>
              <div
                className={styles.header2}
                style={{
                  borderBottom: header2BorderBottom,
                  fontSize: heroFontSize,
                }}>
                {" "}
                Since 1987
              </div>
              <div
                className={styles.headerServices}
                style={{ display: servicesDisplay }}>
                <div
                  style={{ fontSize: subHeroBulletsFontSize }}
                  className={styles.servicesItem}>
                  Charters
                </div>
                <div
                  style={{ marginTop: subHeroBulletsDotMargin }}
                  className={styles.servicesDot}>
                  .
                </div>
                <div
                  style={{ fontSize: subHeroBulletsFontSize }}
                  className={styles.servicesItem}>
                  School Routes
                </div>
                <div
                  style={{ marginTop: subHeroBulletsDotMargin }}
                  className={styles.servicesDot}>
                  .
                </div>
                <div
                  style={{ fontSize: subHeroBulletsFontSize }}
                  className={styles.servicesItem}>
                  Events
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submainContainer} style={{marginBottom: subMainContainerMarginBottom}}>
            <div
              className={styles.iconsContainer}
              style={{
                width: iconsContainerWidth,
                marginTop: iconsContainerMarginTop
              }}>
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="School Routes"
                imgUrl={family}
                setContactModalVis={props.setContactModalVis}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Charters"
                imgUrl={bus}
                setContactModalVis={props.setContactModalVis}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Shop Services"
                imgUrl={wrench}
                setContactModalVis={props.setContactModalVis}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Regions"
                imgUrl={map}
                setContactModalVis={props.setContactModalVis}
              />
              <ServicesIcon
                onClick={servicesIconClickHandler}
                text="Used Bus Sales"
                imgUrl={tag}
                setContactModalVis={props.setContactModalVis}
              />
            </div>
            <ExpandButton scrollToId="ThirdwaveBlurb" />
          </div>
        </div>
      </CentralSection>
    </DOMReadyPortal>
  );
};

const ServicesIcon = (props) => {
  const {width} = useWindowSize()
  const clickContainer = () => {
    document.getElementById(`${props.text}_linkid`).click();
  };

  const imgStyle = responsive(width, {width: "1.5rem", height: "1.5rem"},{width: "2rem", height: "2rem"},{width: "2rem", height: "2rem"},null)
  const fontSize = responsive(width, "0.6rem", "1rem", "1rem", "")

  return (
    <div
      id={`${props.text}_linkid`}
      onClick={props.onClick}
      className={`${styles.iconContainer} invertFilter`}>
      <img
        className={`${styles.iconImg} `}
        src={props.imgUrl}
        alt={props.alt}
        onClick={clickContainer}
        style= {imgStyle}
      />
      <div className={styles.iconText} style={{fontSize: fontSize}}>{props.text}</div>
    </div>
  );
};

export default HeroContent;
