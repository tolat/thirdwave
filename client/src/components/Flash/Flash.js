import styles from "./Flash.module.css";
import closeButton from "../../images/close_button_light.png";
import { closeFlash } from "../../utils";

const Flash = (props) => {
  const handleClose = () => {
    closeFlash(props.id);
  };

  return (
    <div id={`${props.id}_masterContainer`} className={styles.masterContainer}>
      <div id={`${props.id}_flashContainer`} className={styles.flashContainer}>
        <div className={styles.headerContainer}>
          <div id={`${props.id}_header`} className={styles.header}>
            {props.header}
          </div>
          <div className={styles.button} onClick={handleClose}>
            <img
              style={{ width: "2rem", height: "2rem" }}
              src={closeButton}
              alt="close button"
            />
          </div>
        </div>
        <div id={`${props.id}_message`} className={styles.message}>
          {props.message}
        </div>
      </div>
    </div>
  );
};

export default Flash;
