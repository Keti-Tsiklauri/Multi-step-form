import styles from "./summary.module.css";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import GoBackButton from "./GoBackButton";
function Summary() {
  const {
    moreplan,
    setStep,
    setActiveIndex,
    total,
    step,
    activeIndex,
    setMoreplan,
    plan,
    setCurrentValue1,
    setCheckedState,
    setCurrentValue,
  } = useContext(GlobalContext);
  function back() {
    setActiveIndex((prevIndex) => prevIndex - 2);
    setStep((prevStep) => prevStep - 2);
    setCheckedState([false, false, false]);
    setCurrentValue1(0);
    setCurrentValue(0);
    setMoreplan();
  }
  function goBackFunction() {
    setStep(step - 1);
    setActiveIndex(activeIndex - 1);
    setMoreplan();
    setCheckedState([false, false, false]);
    setCurrentValue1(0);
  }
  return (
    <div>
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className={styles.largeDiv}>
          <div className={styles.container}>
            <div>
              <p className={styles.p1}>{plan.plan}</p>
              <p className={styles.p2} onClick={() => back()}>
                Change
              </p>
            </div>
            <div className={styles.p3}>+${plan.value}/mo</div>
          </div>
          <hr />
          {moreplan &&
            Object.entries(moreplan).length > 0 &&
            Object.entries(moreplan).map(([key, { value }], index) => (
              <div key={index} className={styles.additionalPlan}>
                <p>{key}</p>

                <p className={styles.p3}>{value}</p>
              </div>
            ))}
        </div>
        <div className={styles.sum}>
          <p>Total(per month)</p>
          <p>+${total}/mo</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <GoBackButton onClick={() => goBackFunction()} />
      </div>
    </div>
  );
}

export default Summary;
