import styles from "./ServiceSection.module.css";
import CentralSection from "../../components/UI/CentralSection";
import GeneralButton from "../../components/UI/GeneralButton";
import { responsive } from "../../utils";

const ServiceSection = (props) => {
  const w = props.viewportWidth;
  const contentFlexDirection = responsive(w, "column", "column");
  return (
    <CentralSection backgroundColor={props.backgroundColor}>
      <div id={props.id} className={styles.container}>
        <div
          className={styles.header}
          style={{ justifyContent: props.justifyHeader }}>
          <img
            className={styles.headerIcon}
            src={props.icon}
            alt={props.iconAlt}
          />
          {props.headerText}
          <GeneralButton
            onClick={props.inquireOnClick}
            customClasses={styles.inquireButton}>
            Inquire
          </GeneralButton>
        </div>
        <div
          className={styles.contentContainer}
          style={{ flexDirection: contentFlexDirection }}>
          {props.children}
        </div>
      </div>
    </CentralSection>
  );
};

export default ServiceSection;
