import styles from "./toggleSwitch.module.css";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
const ToggleSwitch = () => {
  const { setToggle, toggle } = useContext(GlobalContext);
  function togglefunction() {
    setToggle(!toggle);
  }
  return (
    <div className={styles.container}>
      <p className={toggle ? styles.toggle : ""}>Monthly</p>
      <label className={styles.switch} onChange={() => togglefunction()}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <p className={toggle ? "" : styles.toggle}>Yearly</p>
    </div>
  );
};

export default ToggleSwitch;
