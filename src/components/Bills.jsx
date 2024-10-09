import { useContext, useState, useEffect } from "react";
import styles from "./bills.module.css";
import { GlobalContext } from "./GlobalContext";

function Bills() {
  const {
    addOnsTotal,
    setSelectedPlan,
    setTotal,
    array,
    setPlan,
    plan,
    selectedPlan,
    setX,
    setCurrentValue,
    setY,
    currentValue,
  } = useContext(GlobalContext);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  function addTotal(elem, index) {
    const planValue = elem.value;
    const newTotal = addOnsTotal + planValue;
    setSelectedPlan(array[index]);
    setCurrentValue(newTotal);
    setSelectedDiv(elem);

    // Instead of logging here, handle it in useEffect
    setPlan({
      value: elem.value,
      plan: elem.plan,
    });
  }
  useEffect(() => {
    if (currentValue !== undefined) {
      setTotal(currentValue); // Update total after currentValue is set
    }
  }, [currentValue, setTotal]);

  return (
    <div className={styles.container}>
      {array.map((elem, index) => (
        <div
          style={{
            borderColor: selectedIndex === index ? "red" : "",
            cursor: "pointer",
          }}
          key={index}
          className={`${styles.box} ${
            selectedPlan === elem ? styles.selected : ""
          }`}
          onClick={() => {
            addTotal(elem, index);
            handleClick(index);
            setY(true);
            setX(false);
            setTotal(currentValue);
          }}
        >
          <img src={elem.img} alt={elem.plan} />
          <p className={styles.p1}>{elem.plan}</p>
          <p>{elem.costs}</p>
        </div>
      ))}
    </div>
  );
}

export default Bills;
