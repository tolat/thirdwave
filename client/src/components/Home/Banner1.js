import styles from "./Banner1.module.css";
import FullWidthSection from "../UI/FullWidthSection";

const Banner1 = (props) => {
  return (
    <FullWidthSection style={{ marginTop: "var(--navBarHeight)" }}>
      <div className={styles.container}>Banner1</div>
    </FullWidthSection>
  );
};

export default Banner1;
