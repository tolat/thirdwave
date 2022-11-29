import CentralSection from "../../components/UI/CentralSection";
import styles from "./ThirdwaveBlurb.module.css";
import { selectFromWidth } from "../../utils";

import img from "../../images/under_grouse.jpeg";

const ThirdwaveBlurb = (props) => {
  const w = props.viewportWidth;
  const textContainerFlexDirection = selectFromWidth(
    w,
    "column",
    "row",
    "row",
    "row"
  );

  const secondBlurbDisplay = selectFromWidth(w, "none", "", "", "");
  const textContainerMargin = selectFromWidth(w, "0", "", "", "");
  const textImageContainerMargin = selectFromWidth(w, "0 0 3rem 0", "", "", "");
  const textImageContainerJustifyContent = selectFromWidth(
    w,
    "center",
    "",
    "",
    ""
  );
  const textFontSize = selectFromWidth(w, "1.1rem");
  const textLineHeight = selectFromWidth(w, "1.4rem");
  const textAlign = selectFromWidth(w);

  return (
    <CentralSection backgroundColor={"white"}>
      <div id="ThirdwaveBlurb" className={styles.container}>
        <div className={styles.header}>
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
