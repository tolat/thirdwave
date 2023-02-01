import CentralSection from "../../components/UI/CentralSection";
import styles from "./ThirdwaveBlurb.module.css";
import { responsive } from "../../utils";

import img from "../../images/under_grouse.jpeg";
import { fontSize } from "@mui/system";

const ThirdwaveBlurb = (props) => {
  const w = props.viewportWidth;
  const textContainerFlexDirection = responsive(
    w,
    "column",
    "row",
    "row",
    "row"
  );

  const secondBlurbDisplay = responsive(w, "none", "", "", "");
  const textContainerMargin = responsive(w, "0", "", "", "");
  const textImageContainerMargin = responsive(w, "0 0 3rem 0", "", "", "");
  const textImageContainerJustifyContent = responsive(w, "center", "", "", "");
  const textFontSize = responsive(w, "1.1rem", "1.1rem", "1.2rem");
  const textLineHeight = responsive(w, "1.4rem");
  const textAlign = responsive(w, "left");
  const headerFontSize = responsive(w, "1.5rem")
  const headerMargin = responsive(w, "3rem 0.5rem 0rem 0.5rem")
  const headerTextAlign = responsive(w, "left")
  const imgDisplay = responsive(w, "none")
  const imgHeight = responsive(w, "", "18rem", "19rem")

  return (
    <CentralSection backgroundColor={"white"}>
      <div id="ThirdwaveBlurb" className={styles.container}>
        <div className={styles.header} style={{fontSize: headerFontSize, margin: headerMargin, textAlign: headerTextAlign}}>
          Custom Schoolbus Services For the lower mainland and beyond.{" "}
        </div>
        <div
          className={styles.textContainer}
          style={{
            flexDirection: textContainerFlexDirection,
            margin: textContainerMargin,
          }}>
          <div
            className={styles.textImageContainer}
            style={{
              margin: textImageContainerMargin,
              justifyContent: textImageContainerJustifyContent,
            }}>
            <img
              className={styles.textImage}
              style={{display: imgDisplay, height: imgHeight}}
              src={img}
              alt="bus-under-grouse"
            />
          </div>
          <div
            className={styles.text}
            style={{
              fontSize: textFontSize,
              lineHeight: textLineHeight,
              textAlign: textAlign,
            }}>
            <div>
              Thirdwave Bus Services is a full service student transportation
              provider, committed to getting students to school safe, on time,
              and ready to learn. Our experienced staff have decades of
              experience in every area of student transportation. As a local
              company, we have a vested interest in providing excellent service
              to all of the customers in our community as well as provide the
              resources equivalent to our larger multinational competitors.
            </div>
            <br />
            <div style={{ display: secondBlurbDisplay }}>
              We provide custom tailored transportation services including daily
              school routes, special needs, and field trip transportation, as
              well as summer and charter trips for districts and organizations
              in the Vancouver and Lower mainland areas of British Columbia. We
              are available to discuss your transportation needs and can be
              reached through the contact information listed on the contact us
              tab.
            </div>
          </div>
        </div>
      </div>
    </CentralSection>
  );
};

export default ThirdwaveBlurb;
