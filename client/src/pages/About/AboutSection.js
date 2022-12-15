import CentralSection from "../../components/UI/CentralSection";
import styles from "./AboutSection.module.css";

import murray from "../../images/people/murray1.jpg";
import bus_img from "../../images/bus8.jpeg";
import signature from "../../images/signature.png";
import { responsive } from "../../utils";

const AboutSection = (props) => {
  const width = props.viewportWidth;
  const ownerContainerFlexDisplay = responsive(width, "column");
  const textContainerFlexDisplay = responsive(width, "column-reverse");
  const textFontSize = responsive(width, "1.1rem");
  const textJustify = responsive(width, "left");
  const textImgContainerWidth = responsive(width, "100%");
  const ownerImgContainerWidth = responsive(width, "100%");
  const textImgMaxWidth = responsive(width, "100%");
  const textImgMaxHeight = responsive(width, "20rem");
  const textImgMargin = responsive(width, "0 0 4rem 0");
  const innerTextContainerMargin = responsive(
    width,
    "0",
    "0 2rem 0rem 0",
    "0 2rem 0rem 0",
    "0 2rem 0rem 0"
  );
  const containerPadding = responsive(width, "2.5rem");
  const aboutOwnersTextPadding = responsive(width, "4rem 0 0 0");
  const signatureMargin = responsive(width, "0");

  return (
    <CentralSection>
      <div
        id="AboutSection"
        className={styles.container}
        style={{ padding: containerPadding }}>
        <div className={styles.mainHeaderContainer}>
          <div className={styles.mainHeader}>About</div>
        </div>

        <div
          className={styles.textContainer}
          style={{ flexDirection: textContainerFlexDisplay }}>
          <div style={{ margin: innerTextContainerMargin }}>
            <div
              className={styles.text}
              style={{ textAlign: textJustify, fontSize: textFontSize }}>
              Thirdwave Bus Services is a full service student transportation
              provider, committed to getting students to school safe, on time,
              and ready to learn. Our experienced staff have decades of
              experience in every area of student transportation. As a local
              company, we have a vested interest in providing excellent service
              to all of the customers in our community as well as provide the
              resources equivalent to our larger multinational competitors.
            </div>
            <br />
            <div
              className={styles.text}
              style={{ textAlign: textJustify, fontSize: textFontSize }}>
              We provide custom tailored transportation services including daily
              school routes, special needs, and field trip transportation, as
              well as summer and charter trips for districts and organizations
              in the Vancouver and Lower mainland areas of British Columbia. We
              are available to discuss your transportation needs and can be
              reached through the contact information listed on the contact us
              tab.
            </div>
          </div>
          <div
            className={styles.textImgContainer}
            style={{ width: textImgContainerWidth }}>
            <img
              style={{
                margin: textImgMargin,
                maxWidth: textImgMaxWidth,
                maxHeight: textImgMaxHeight,
              }}
              className={styles.textImg}
              src={bus_img}
              alt="bus"
            />
          </div>
        </div>
        <div
          className={styles.aboutOwnersContainer}
          style={{ flexDirection: ownerContainerFlexDisplay }}>
          <div
            className={styles.ownerImgContainer}
            style={{ width: ownerImgContainerWidth }}>
            <img className={styles.ownerImg} src={murray} alt="murray" />
          </div>
          <div className={styles.aboutOwnersTextContainer}>
            <div
              className={styles.aboutOwnersHeader}
              style={{ padding: aboutOwnersTextPadding }}>
              A word from Principal Manager, Murray Nicholl
            </div>
            <div
              className={styles.aboutOwnersText}
              style={{
                textAlign: textJustify,
                fontSize: textFontSize,
                padding: aboutOwnersTextPadding,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <img
              style={{ margin: signatureMargin }}
              className={styles.signatureImg}
              src={signature}
              alt="owner signature"
            />
          </div>
        </div>
      </div>
    </CentralSection>
  );
};

export default AboutSection;
