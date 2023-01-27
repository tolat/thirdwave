import styles from "./Footer.module.css";
import CentralSection from "../UI/CentralSection";
import { responsive } from "../../utils";

import logo from "../../images/logo4.png";
import facebook from "../../images/icons/facebook.png";
import instagram from "../../images/icons/instagram.png";
import youtube from "../../images/icons/youtube.png";
import linkedin from "../../images/icons/linkedin.png";
import ContactDetails from "../Utils/ContactDetails";

const Footer = (props) => {
  const w = props.viewportWidth;
  const flexDirection = responsive(w, "column", "column", "row", "row");
  return (
    <CentralSection backgroundColor="rgb(41,41,41)">
      <div className={styles.outerContainer}>
        <div
          className={styles.container}
          style={{ flexDirection: flexDirection }}>
          <ContactDetails/>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIconContainer}>
            <a href="https://www.facebook.com/ThirdwaveBusServices/">
              <img
                className={styles.socialIcon}
                src={facebook}
                alt="facebook link"
              />
              </a>
            </div>
           {/*  <div className={styles.socialIconContainer}>
              <img
                className={styles.socialIcon}
                src={instagram}
                alt="instagram link"
              />
            </div>
            <div className={styles.socialIconContainer}>
              {" "}
              <img
                className={styles.socialIcon}
                src={youtube}
                alt="youtube link"
              />
            </div>
            <div className={styles.socialIconContainer}>
              <img
                className={styles.socialIcon}
                src={linkedin}
                alt="linkedin link"
              />
            </div> */}
          </div>
          <div className={styles.footerLogo}>
            <img
              className={styles.footerLogoImg}
              style={{ maxWidth: "20rem", alignSelf: "center" }}
              src={logo}
            
              alt="company logo"
            />
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <div>
            &copy;Copyright Lataritech 2022
            <br />
            Designed and built by Torin O'Regan-Latarius
          </div>
        </div>
      </div>
    </CentralSection>
  );
};

export default Footer;
