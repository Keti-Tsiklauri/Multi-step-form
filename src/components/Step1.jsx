import PersonalInfo from "./PersonalInfo";
import Steps from "./Steps";
import styles from "./step1.module.css";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
function Step1() {
  const { step } = useContext(GlobalContext);
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <Steps />
      </div>
      <div className={styles.box2}>
        {step === 1 && <PersonalInfo />}
        {step === 2 && <SelectPlan />}
        {step === 3 && <AddOns />}

        {step === 4 && <Summary />}
      </div>
    </div>
  );
}

export default Step1;
