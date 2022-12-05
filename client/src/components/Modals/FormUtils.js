import { useWindowSize } from "usehooks-ts";
import styles from "./FormUtils.module.css";
import * as utils from "../../utils";
import modalStyles from "./Modal.module.css";

import msg_icon from "../../images/icons/message_icon.png";

export const DetailsTextarea = (props) => {
  const { width } = useWindowSize();
  const textAreaBottMarg = utils.responsive(width, "10rem");

  return (
    <div
      className={styles.sectionContainer}
      style={{ marginBottom: textAreaBottMarg, marginTop: "1rem" }}>
      <div className={modalStyles.sectionHeader}>
        <div style={{ display: "flex" }}>
          <img
            className={modalStyles.inputIcon}
            src={msg_icon}
            alt="msg icon"
          />
          <div>Additional Details</div>
        </div>
      </div>

      <textarea
        ref={props.refs.details}
        className={styles.textArea}
        rows="4"
        required
        placeholder="Please provide a name and number for the main trip contact (if applicable), as well as any
          additional trip details."
      />
    </div>
  );
};

export const Spacer = () => {
  const { width } = useWindowSize();
  const spacerDisplay = utils.responsive(width, "none");

  return <div className={styles.spacer} style={{ display: spacerDisplay }} />;
};

export const SectionContainer = (props) => {
  const { width } = useWindowSize();

  const inputDisplay = utils.responsive(width, "column");

  return (
    <div
      className={styles.sectionSubContainer}
      style={{ flexDirection: inputDisplay }}>
      {props.children}
    </div>
  );
};
