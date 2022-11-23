import styles from "./FullWidthSection.module.css";

const FullWidthSection = (props) => {
  return (
    <div className={styles.fullWidthSection} style={props.style} id={props.id}>
      {props.children}
    </div>
  );
};

export default FullWidthSection;
