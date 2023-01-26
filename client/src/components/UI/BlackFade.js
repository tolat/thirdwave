import styles from "./BlackFade.module.css";

const BlackFade = (props) => {
  
  return (
    <div className={styles.container} style={props.containerStyle}>
      <div
        className={styles.backgroundContainer}
        style={{
          backgroundImage: `url(".${props.backgroundImage}")`,
          opacity: props.backgroundOpacity,
          backgroundAttachment: props.backgroundAttachment, 
          backgroundSize: props.backgroundSize, 
          backgroundPosition: props.backgroundPosition,
        }}
      />
      <div className={styles.childrenContainer}>{props.children}</div>
    </div>
  );
};

export default BlackFade;
