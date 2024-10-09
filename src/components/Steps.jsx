import styles from "./steps.module.css";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
function Steps() {
  const { activeIndex } = useContext(GlobalContext);

  const steps = [
    { number: 1, step: 1, p: "YOUR INFO" },
    {
      number: 2,
      step: 2,
      p: "SELECT PLAN",
    },
    { number: 3, step: 3, p: "ADD-ONS" },
    { number: 4, step: 4, p: "SUMMARY" },
  ];
  return (
    <div className={styles.main}>
      {steps.map((elem, index) => (
        <div
          key={index}
          className={`${styles.container} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <div
            className={`${styles.rounded} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <p>{elem.number}</p>
          </div>
          <div className={styles.text}>
            <p>STEP {elem.step}</p>
            <p>{elem.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
