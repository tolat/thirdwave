import styles from "./Modal.module.css";
import { selectTSML, handleToggleModal } from "../../utils";
import closeButton from "../../images/close_button.png";
import background from "../../images/solar_background3.png";

const Modal = (props) => {
  const w = props.viewportWidth;
  const modalZoom = selectTSML(w, "0.9", "0.8", "1", "1");

  const onToggleModal = () => {
    handleToggleModal(props.setModalVis);
  };

  return (
    <div
      className={`${styles.container} noscroll`}
      style={{
        opacity: props.modalVis.o,
        visibility: props.modalVis.v,
      }}>
      <div className={styles.blackout}></div>
      <div
        className={`${styles.modal} noscroll`}
        style={{
          width: props.modalWidth,
          zoom: modalZoom,
          height: props.modalHeight,
          maxHeight: props.modalMaxHeight,
          backgroundImage: `url(${background}`,
          backgroundSize: "cover",
        }}>
        <div className={styles.sidePanel}>{props.sidePanel}</div>
        <div className={styles.mainPanel}>
          <div className={styles.headerContainer}>
            <div className={styles.headerSpacer}></div>
            <img
              src={closeButton}
              className={styles.closeModalButton}
              alt="exit modal button"
              onClick={onToggleModal}
            />
          </div>

          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
