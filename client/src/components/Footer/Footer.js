import styles from "./Footer.module.css";
import CentralSection from "../UI/CentralSection";
import { responsive } from "../../utils";

import logo from "../../images/logo4.png";
import facebook from "../../images/icons/facebook.png";
import instagram from "../../images/icons/instagram.png";
import youtube from "../../images/icons/youtube.png";
import linkedin from "../../images/icons/linkedin.png";

const Footer = (props) => {
  const w = props.viewportWidth;
  const flexDirection = responsive(w, "column", "column", "row", "row");
  return (
    <CentralSection backgroundColor="rgb(41,41,41)">
      <div className={styles.outerContainer}>
        <div
          className={styles.container}
          style={{ flexDirection: flexDirection }}>
          <div className={styles.footerContactContainer}>
            <div className={styles.footerContactText}>
              <b>
                Dispatch
              </b>
              <br />
              dispatch@thirdawavebus.com
              <br />
              <br />
              <b>
                Lower Mainland
              </b>
              <br />
              <b>Office:</b> (604) 274-1221 <br />
              <b>Shop:</b> (604) 247-1253 <br />
              <b>Emergency:</b> (604)-768-3787
              <br />
              <div style={{ marginTop: "0.5rem" }}>
                <i>13551 VERDUN PLACE, RICHMOND BC</i>
              </div>
              <br />
              <b>
                Sunshine Coast
              </b>
              <br />
              <b>Office:</b> (604) 855-1260 <br />
              <b>Manager: </b>Randy Gould <br /> (604) 989-9670 <br />
              <div style={{ marginTop: "0.5rem" }}>
                <i>4373 SOLAR RD, SECHELT, BC</i>
              </div>
              <br />
              <b>
                Victoria
              </b>
              <br />
              <b>Office:</b> 1 (250) 382-4333
              <br />
              victoriamanager@thirdwavebus.com
              <div style={{ marginTop: "0.5rem" }}>
                <i>482 CECILIA RD, VICTORIA, BC</i>
              </div>
              <br />
            </div>
          </div>
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
