import Bills from "./Bills";
import GoBackButton from "./GoBackButton";
import NextButton from "./NextButton";
import styles from "./selectPlan.module.css";
import ToggleSwitch from "./ToggleSwitch";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

function SelectPlan() {
  const {
    setStep,
    setActiveIndex,
    step,
    activeIndex,
    setPlan,
    x,
    setX,
    y,
    setTotal,
    currentValue,
  } = useContext(GlobalContext);

  function goBackFunction() {
    setStep(step - 1);
    setActiveIndex(activeIndex - 1);
  }

  function nextPageFunction() {
    setStep(step + 1);
    setActiveIndex(activeIndex + 1);
  }

  function handleNextButtonClick() {
    setX(true);
    if (y) {
      setTotal(currentValue); // Ensure this only runs if currentValue is defined
      nextPageFunction();
    }
  }

  return (
    <div>
      <h2 style={{ color: x ? "red" : "" }}>Select your plan</h2>
      <p className={styles.p}>
        You have the option of monthly or yearly billing.
      </p>
      <Bills />

      <ToggleSwitch onClick={() => setPlan()} />
      <div className={styles.container}>
        <GoBackButton onClick={goBackFunction} />
        <NextButton
          onClick={handleNextButtonClick} // Use the handler function
          className={styles.button}
        />
      </div>
    </div>
  );
}

export default SelectPlan;
