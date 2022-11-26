import CentralSection from "../UI/CentralSection";
import styles from "./ThirdwaveBlurb.module.css";
import { selectTSML } from "../../utils";

import img from "../../images/under_grouse.jpeg";

const ThirdwaveBlurb = (props) => {
  const w = props.viewportWidth;
  const textContainerFlexDirection = selectTSML(
    w,
    "column",
    "row",
    "row",
    "row"
  );

  const secondBlurbDisplay = selectTSML(w, "none", "", "", "");
  const textContainerMargin = selectTSML(w, "0", "", "", "");
  const textImageContainerMargin = selectTSML(w, "0 0 3rem 0", "", "", "");
  const textImageContainerJustifyContent = selectTSML(w, "center", "", "", "");

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
          <div className={styles.text}>
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
