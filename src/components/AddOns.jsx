import { useContext, useState } from "react";
import styles from "./addOns.module.css";
import GoBackButton from "./GoBackButton";
import NextButton from "./NextButton";
import { GlobalContext } from "./GlobalContext";

function AddOns() {
  const {
    setStep,
    step,
    setActiveIndex,
    activeIndex,
    currentValue,
    setAddOns,
    currentValue1,
    setCurrentValue1,
    setSelectedPlan,
    setTotal,
    setMoreplan,
    setX,
    setY,
  } = useContext(GlobalContext);

  const [checkedState, setCheckedState] = useState([false, false, false]);

  const array = [
    {
      p1: "Online service",
      p2: "Access to multiplayer games",
      costs: "+$1/mo",
      value: 1,
    },
    {
      p1: "Larger storage",
      p2: " Extra 1TB of cloud save",
      costs: "+$2/mo",
      value: 2,
    },
    {
      p1: "Customizable Profile",
      p2: "Custom theme on your profile",
      costs: "+$2/mo",
      value: 2,
    },
  ];

  function goBackFunction() {
    setStep(step - 1);
    setActiveIndex(activeIndex - 1);
    setSelectedPlan([]);
    setX(false);
    setY(false);
  }

  function nextPageFunction() {
    setStep(step + 1);
    setActiveIndex(activeIndex + 1);
    setTotal(currentValue + currentValue1);
  }

  function addFunction(index) {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(updatedCheckedState);

    const value = array[index].value * (updatedCheckedState[index] ? 1 : -1);

    // Update global total
    setCurrentValue1((prev) => prev + value);

    checkaddons(index, updatedCheckedState[index]);
  }

  function checkaddons(index, isChecked) {
    if (isChecked) {
      setAddOns((prevAddOns) => [...prevAddOns, array[index]]);
      setMoreplan((prevMoreplan) => ({
        ...prevMoreplan,
        [array[index].p1]: { value: array[index].costs, plan: array[index].p2 },
      }));
    } else {
      setAddOns((prevAddOns) =>
        prevAddOns.filter((item) => item.p1 !== array[index].p1)
      );
      setMoreplan((prevMoreplan) => {
        const { [array[index].p1]: _, ...rest } = prevMoreplan;
        return rest;
      });
    }
  }

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p className={styles.mainP}>
        Add-ons help enhance your gaming experience
      </p>
      {array.map((elem, index) => (
        <div key={index} className={styles.check}>
          <div>
            <input
              type="checkbox"
              className={styles.input}
              checked={checkedState[index]}
              onChange={() => addFunction(index)}
            />
          </div>
          <div className={styles.containerP}>
            <div>
              <p className={styles.p1}>{elem.p1}</p>
              <p className={styles.p2}>{elem.p2}</p>
            </div>
            <div>
              <p className={styles.p3}>{elem.costs}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.container}>
        <GoBackButton onClick={goBackFunction} />
        <NextButton onClick={nextPageFunction} />
      </div>
    </div>
  );
}

export default AddOns;
