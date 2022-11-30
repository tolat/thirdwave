import expand from "../../images/icons/expand.svg";
import { scrollToId } from "../../utils";
import styles from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  const onExpand = () => {
    scrollToId(props.scrollToId);
  };

  return (
    <div className={`${styles.expandButton} invertFilter`} onClick={onExpand}>
      <img className={styles.expandButtonImg} src={expand} alt="expand" />
    </div>
  );
};

export default ExpandButton;
