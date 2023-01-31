import styles from "./Modal.module.css";
import { responsive, toggleModal } from "../../utils";
import closeButton from "../../images/close_button.png";
import { useWindowSize } from "usehooks-ts";


const Modal = (props) => {
  const {width} = useWindowSize()
  const closeButtonMargin = responsive(width, "1rem 1rem 0 0")

  const onToggleModal = () => {
    toggleModal(props.setModalVis);
  };

  return (
    <div
      className={`${styles.container} noscroll`}
      style={{
        opacity: props.modalVis.o,
        visibility: props.modalVis.v,
      }}>
      <div className={styles.blackout} id="modal-blackout"></div>
      <div
        className={`${styles.modal} noscroll`}
        style={{
          width: props.modalWidth,
          height: props.modalHeight,
          maxHeight: props.modalMaxHeight,
          backgroundImage: `url(${props.background}`,
          backgroundSize: "cover",
        }}>
        <div
          className={styles.sidePanel}
          style={{ display: props.sidepanelDisplay || "none" }}>
          {props.sidepanel}
        </div>
        <div className={styles.mainPanel}>
          <div className={styles.headerContainer}>
            <div className={styles.headerSpacer}></div>
            <img
              src={closeButton}
              className={styles.closeModalButton}
              alt="exit modal button"
              onClick={onToggleModal}
              style={{margin: closeButtonMargin}}
            />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
