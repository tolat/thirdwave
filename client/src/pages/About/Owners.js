import React, { useState } from "react";
import CentralSection from "../../components/UI/CentralSection";
import styles from "./Owners.module.css";

import murray from "../../images/people/murray1.jpg";

const Owners = (props) => {
  const width = props.viewportWidth;
  return (
    <CentralSection>
      <div className={styles.container}>
        <div className={styles.aboutText}>
          <div>
            Thirdwave Bus Services is a full service student transportation
            provider, committed to getting students to school safe, on time, and
            ready to learn. Our experienced staff have decades of experience in
            every area of student transportation. As a local company, we have a
            vested interest in providing excellent service to all of the
            customers in our community as well as provide the resources
            equivalent to our larger multinational competitors.
          </div>
          <br />
          <div>
            We provide custom tailored transportation services including daily
            school routes, special needs, and field trip transportation, as well
            as summer and charter trips for districts and organizations in the
            Vancouver and Lower mainland areas of British Columbia. We are
            available to discuss your transportation needs and can be reached
            through the contact information listed on the contact us tab.
          </div>
        </div>
        <div className={styles.aboutOwnersContainer}>
          <img src={murray} alt="murray" />
          <div className={styles.aboutOwnersText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </CentralSection>
  );
};

export default Owners;
