import styles from "./BlackFade.module.css";

const BlackFade = (props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundContainer}
        style={{
          backgroundImage: `url(".${props.backgroundImage}")`,
          opacity: `${props.backgroundOpacity}`,
        }}
      />
      <div className={styles.childrenContainer}>{props.children}</div>
    </div>
  );
};

export default BlackFade;
