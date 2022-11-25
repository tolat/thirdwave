import CentralSection from "../UI/CentralSection";
import styles from "./ThirdwaveBlurb.module.css";

import img from "../../images/under_grouse.jpeg";

const ThirdwaveBlurb = (props) => {
  return (
    <CentralSection backgroundColor={"rgb(250, 252, 252)"}>
      <div className={styles.container}>
        <div className={styles.header}>
          Custom Schoolbus Services For the lower mainland and beyond.{" "}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textImageContainer}>
            <img
              className={styles.textImage}
              src={img}
              alt="bus-under-grouse"
            />
          </div>
          <div className={styles.text}>
            Thirdwave Bus Services is a full service student transportation
            provider, committed to getting students to school safe, on time, and
            ready to learn. Our experienced staff have decades of experience in
            every area of student transportation. As a local company, we have a
            vested interest in providing excellent service to all of the
            customers in our community as well as provide the resources
            equivalent to our larger multinational competitors.
            <br />
            <br />
            We provide custom tailored transportation services including daily
            school routes, special needs, and field trip transportation, as well
            as summer and charter trips for districts and organizations in the
            Vancouver and Lower mainland areas of British Columbia . We are
            available to discuss your transportation needs and can be reached
            through the contact information listed on the contact us tab.
          </div>
        </div>
      </div>
    </CentralSection>
  );
};

export default ThirdwaveBlurb;
