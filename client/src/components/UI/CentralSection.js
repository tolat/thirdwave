import styles from "./CentralSection.module.css";

const CentralSection = (props) => {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className={styles.centralSectionContainer}
      id={props.id}>
      <div className={styles.centralSection} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};

export default CentralSection;
